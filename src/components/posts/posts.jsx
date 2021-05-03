import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export const Posts = () => {
  return (
    <>
      <Helmet>
        <title>{"Semua Postingan - Jember Vacation"}</title>
      </Helmet>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light">
          <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Semua Postingan
          </li>
        </ol>
      </nav>
      <div className="card">
        <div className="card-body">
          <ol>
            <li>
              <Link to="/postingan/12345">Postingan pertama</Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
