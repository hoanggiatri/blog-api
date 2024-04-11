import React from "react";
import About from "./components/About";
import Posts, { Post, PostLists } from "./components/Post";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Stats from "./components/Stats";
import AppLayout from "./components/Layout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />}>
              <Route index element={<PostLists />} />
              <Route path=":slug" element={<Post />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
