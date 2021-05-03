import React, { useEffect } from "react";
import { Layout } from "../components/Layouts/Layout";
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";
import { Helmet } from "react-helmet";

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
        <div className="row mt-3">
          <section className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card bg-info">
                  <div className="card-body text-light">Wisata</div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card bg-danger">
                  <div className="card-body text-light">Admin</div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card bg-primary">
                  <div className="card-body text-light">Provinsi</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"></div>
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
