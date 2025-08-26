import React, { useState, useEffect } from 'react';
import Post from './components/Post';

export default function PostsList({ initialPosts }) {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('posts');
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const handleLikeToggle = (id) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, liked: !post.liked } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} onLikeToggle={handleLikeToggle} />
      ))}
    </div>
  );
}