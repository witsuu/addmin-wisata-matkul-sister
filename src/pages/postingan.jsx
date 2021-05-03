import React from "react";
import { Router } from "@reach/router";
import { Layout } from "../components/Layouts/Layout";
import { Posts } from "../components/posts/posts";
import { Post } from "../components/posts/details";
import { NewPost } from "../components/posts/new";

const Postingan = () => {
  return (
    <Layout>
      <Router>
        <Posts path="postingan" />
        <Post path="postingan/:id" />
        <NewPost path="postingan/baru" />
      </Router>
    </Layout>
  );
};

export default Postingan;
