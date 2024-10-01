import React from "react";
import "./Posts.css";
import { PostsData } from "@/data/PostsData";
import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts">
      {PostsData?.map((post, index) => (
        <Post data={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
