import React from 'react';

export default function PostCard  ({ title, body }){
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

