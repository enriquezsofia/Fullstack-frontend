import React from "react";
import { Link } from "react-router-dom";
import "../blog.css";

const Post = ({ post, postId, onDelete }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-image">
        <img src={post.imageUrl} alt="img" width="250" height="250" />
      </div>
      <div className="blog-post-details">
        <p>{post.updatedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to={`post/${postId}`}>READ MORE</Link>
      </div>
      <Link className="blog-post-edit" to={`create-post/${postId}`}>
        Edit
      </Link>
      <button
        onClick={() => onDelete(postId)}
        className="blog-post-delete"
      >
        X
      </button>
    </div>
  );
};

export default Post;
