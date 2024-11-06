// src/components/PostContainer.js
import React from 'react';
import PostCard from './PostCard';

const PostContainer = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostContainer;
