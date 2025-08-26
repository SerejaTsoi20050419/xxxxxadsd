import React from 'react';
import LikeButton from './LikeButton';

export default function Post({ post, onLikeToggle }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <LikeButton liked={post.liked} onClick={() => onLikeToggle(post.id)} />
    </div>
  );
}