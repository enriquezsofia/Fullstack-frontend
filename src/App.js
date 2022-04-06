import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import CreatePostPage from "./pages/CreatePostPage";
import DetailPostPage from "./pages/DetailPostPage";
import JoinOurTeamPage from "./pages/JoinOurTeamPage";
import NotFoundPage from "./pages/NotFoundPage";

import { getPosts, savePost, getPost } from "./api/postsApi";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [postId, setPostId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const posts = await getPosts();
    setAllPosts(posts);
  };

  const handleOnSave = async (post) => {
    const savedPost = await savePost(post);
    if (savedPost) setAllPosts([...allPosts, savedPost]);

    navigate("/", { replace: true });
  };

  const handleOnEdit = (postId) => {
    //setIsCreateVisible(true);
    setPostId(postId);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          index
          element={<HomePage allPosts={allPosts} handleOnEdit={handleOnEdit} />}
        />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="join-our-team" element={<JoinOurTeamPage />} />
        <Route
          path="create-post"
          element={<CreatePostPage onSave={handleOnSave} />}
        />
        <Route
          path="create-post/:postId"
          element={<CreatePostPage onSave={handleOnSave} />}
        />
        <Route path="post/:postId" element={<DetailPostPage />} onEdit={handleOnEdit}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div>Footer</div>
    </div>
  );
}

export default App;
