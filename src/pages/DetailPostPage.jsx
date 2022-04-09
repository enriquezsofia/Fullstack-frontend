import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

import { getPost } from "../api/postsApi";

const DetailPostPage = ({ onEdit }) => {
  const params = useParams();
  const { postId } = params;

  const [post, setPost] = useState({});

  useEffect(() => {
    getPostWId(postId);
  }, [postId]);

  const getPostWId = async (id) => {
    const post = await getPost(id);
    if (post) setPost(post);
  };

  return <Post post={post} onEdit={() => onEdit(postId)} />;
};

export default DetailPostPage;
