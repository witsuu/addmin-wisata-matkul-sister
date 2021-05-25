import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light">
          <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
      <div className="card">
        <div className="card-body">
          <h1>About</h1>
        </div>
      </div>
    </>
  );
};
