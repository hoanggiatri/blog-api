import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
};

export default Posts;

export function PostLists() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/blogs')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);
  return (
    <ul>
      {blogPosts.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/posts/${id}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}


export function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/blogs/${slug}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
        setPost(null);
      });
  }, [slug]);

  if (!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }

  const { title, description } = post;

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}