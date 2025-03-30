import React from "react";
import "./post.css";
import { Link, useLocation } from "react-router-dom";

export default function Post({ post }) {
  const date = new Date
  const img = 'http://localhost:5000/images/'
  
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={img + post.photo} alt='img'/>}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c}</span>
          ))}
        </div>
        <Link to={`post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {date.toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}