import React from 'react';

export default function LikeButton({ liked, onClick }) {
  return (
    <button onClick={onClick} style={{ color: liked ? 'red' : 'grey' }}>
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}