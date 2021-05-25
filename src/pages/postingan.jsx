import React from "react";
import { Router } from "@reach/router";
import { Posts } from "../components/posts/posts";
import { Post } from "../components/posts/details";
import { NewPost } from "../components/posts/new";
import { Categories } from "../components/posts/categories";

const Postingan = () => {
  return (
    <Router>
      <Posts path="postingan" />
      <Post path="postingan/:id" />
      <NewPost path="postingan/baru" />
      <Categories path="postingan/kategori" />
    </Router>
  );
};

export default Postingan;
