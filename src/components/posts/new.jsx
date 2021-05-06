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
          <div className="card-body">{
            <form>
              <div class="form-group">
                <label>Nama Wisata</label>
                <input type="text" className="form-control"/>
              </div>
              <div class="form-group">
                <label>Gambar</label>
                <input type="file" className="form-control" />
              </div>
              <div class="form-group">
                <label>Deskripsi</label>
                <input type="text" className="form-control"/>
              </div>
              <input type="button" value="Submit" className="btn btn-primary"/>
            </form>
          }</div>
        </div>
      </section>
    </>
  );
};
