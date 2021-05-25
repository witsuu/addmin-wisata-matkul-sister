import React, { useEffect } from "react";
import { Layout } from "../components/Layouts/Layout";
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";
import { Helmet } from "react-helmet";
import logo from "../images/beach.jpg";
import { Link } from "gatsby";

export default function Home() {
  useEffect(() => {
    new Calendar({
      id: "#color-calendar",
    });
  }, []);

  return (
    <>
      <Layout>
        <Helmet>
          <title>{"Dashboard - Jember Vacation"}</title>
        </Helmet>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-light">
            <li className="breadcrumb-itema active">Dashboard</li>
          </ol>
        </nav>
        <div className="row mt-3">
          <section className="col-md-9">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body text-light">
                    <h3 style={{ color: "black" }}>
                      Selamat Datang di Jember Vacation
                    </h3>
                    <img
                      src={logo}
                      width="400"
                      height="200"
                      alt="Images destinations"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Link to="/postingan" className="btn btn-primary">
                  Daftar Wisata
                </Link>
              </div>
            </div>
          </section>
          <section className="col-md-3">
            <div id="color-calendar"></div>
          </section>
        </div>
      </Layout>
    </>
  );
}
