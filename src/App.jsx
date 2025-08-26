import React from 'react';
import PostsList from './PostsList';

const initialPosts = [
  { id: 1, title: "First Post", content: "Hello World!", liked: false },
  { id: 2, title: "Second Post", content: "Another Post", liked: false }
];

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Simple Blog</h1>
      <PostsList initialPosts={initialPosts} />
    </div>
  );
}