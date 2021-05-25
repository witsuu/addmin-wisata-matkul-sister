import React from "react";
import { About } from "../components/About/About";
import { Router } from "@reach/router";
import { Layout } from "../components/Layouts/Layout";

const AboutScreen = () => {
  return (
    <Layout>
      <Router>
        <About path="/about" />
      </Router>
    </Layout>
  );
};

export default AboutScreen;
