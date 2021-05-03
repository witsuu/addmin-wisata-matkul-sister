import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export const Post = (props) => {
  return (
    <>
      <Helmet>
        <title>{"Post - Jember Vacation"}</title>
      </Helmet>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light">
          <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            Postingan
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.id}
          </li>
        </ol>
      </nav>
      <div className="card">
        <div className="card-body">
          <h4>{props.id}</h4>
        </div>
      </div>
    </>
  );
};

export default Post;
