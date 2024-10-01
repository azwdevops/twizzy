import React from "react";
import "./Post.css";

import Comment from "@/assets/comment.png";
import Share from "@/assets/share.png";
import Heart from "@/assets/like.png";
import NotLike from "@/assets/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="" />
      <div className="post-react">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span>{data.likes} likes</span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data?.desc}</span>
      </div>
    </div>
  );
};

export default Post;
