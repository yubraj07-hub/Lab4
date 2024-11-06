// src/components/PostForm.js
import React from 'react';

export default function PostForm ({ newPost, setNewPost, handleAddPost }){
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevPost => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPost();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newPost.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="body"
        placeholder="Body"
        value={newPost.body}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};


