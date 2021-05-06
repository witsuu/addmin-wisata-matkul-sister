import React, { useEffect } from "react";
import { Layout } from "../components/Layouts/Layout";
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";
import { Helmet } from "react-helmet";
import logo  from '../images/beach.jpg';
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
        <section class="section">
          <div class="section-header">
            <h3>Dashboard</h3>
          </div>
        </section>
        <div className="row mt-3">
          <section className="col-md-9">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body text-light">
                    <h3 style={{ color:"black"}}>Selamat Datang di Jember Vacation</h3>
                    <img src={logo} width="400" height="200" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Link to="/wisata" className="btn btn-primary">
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
