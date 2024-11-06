// src/components/FakeApiApp.js
import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer';
import PostForm from './PostForm';

const FakeApiApp = () => {
  const [data, setData] = useState([]);       // Holds the list of posts
  const [loading, setLoading] = useState(true); // Controls the loading indicator
  const [newPost, setNewPost] = useState({ title: '', body: '' }); // Holds new post data

  // Fetch initial data from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setData(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Handle submission of new post
  const handleAddPost = () => {
    const id = data.length + 1; // Assign a unique ID
    const post = { ...newPost, id };
    setData([post, ...data]);   // Add new post to the start of the list
    setNewPost({ title: '', body: '' }); // Reset form fields
  };

  return (
    <div>
      <h1>Fake API Post Platform</h1>
      
      {/* Place the form at the top */}
      <PostForm newPost={newPost} setNewPost={setNewPost} handleAddPost={handleAddPost} />
      
      {/* Display loading state or posts */}
      {loading ? <p>Loading...</p> : <PostContainer posts={data} />}
    </div>
  );
};

export default FakeApiApp;
