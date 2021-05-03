import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export const NewPost = () => {
  return (
    <>
      <Helmet>
        <title>{"Postingan Baru - Jember Vacation"}</title>
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
            Postingan Baru
          </li>
        </ol>
      </nav>
      <section>
        <div className="card">
          <div className="card-body">{/* Tambah tampilan disini */}</div>
        </div>
      </section>
    </>
  );
};
