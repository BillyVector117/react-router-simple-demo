import React from "react";
import Post from "../data/Posts";
import { Link } from "react-router-dom";
const Blog = () => {
  console.log(Post);
  return (
    <div className="">
      <h2>Blog page</h2>
      <p>This is the Blog page</p>
      <ul>
        {Post.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/post/${item.id}`}>{item.title}</Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
