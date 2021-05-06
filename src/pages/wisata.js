import React, { useEffect } from "react";
import { Layout } from "../components/Layouts/Layout";
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";
import { Helmet } from "react-helmet";
import papuma  from '../images/beach.jpg';
import nanggelan from '../images/nanggelan.jpg';
import tancak  from '../images/tancak.jpg';
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
        <title>{"Wisata - Jember Vacation"}</title>
        </Helmet>
        <section class="section">
            <div class="section-header">
                <h3>Daftar Wisata</h3>
            </div>
        </section>
        <div className="row mt-3">
            <section className="col-md-9">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body text-light">
                                <h3 style={{ color:"black"}}>Pantai Papuma</h3>
                                <img src={papuma} width="200" height="200" />
                                <p style={{ color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore et repellendus corrupti. Optio id non ratione autem quam explicabo corporis aut dolor tempore sit? Pariatur maiores commodi at corrupti?</p>
                            </div>
                        </div>
                    </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body text-light">
                            <h3 style={{ color:"black"}}>Pantai Nanggelan</h3>
                            <img src={nanggelan} width="200" height="200" />
                            <p style={{ color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore et repellendus corrupti. Optio id non ratione autem quam explicabo corporis aut dolor tempore sit? Pariatur maiores commodi at corrupti?</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body text-light">
                            <h3 style={{ color:"black"}}>Air Terjun Tancak</h3>
                            <img src={tancak} width="200" height="200" />
                            <p style={{ color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore et repellendus corrupti. Optio id non ratione autem quam explicabo corporis aut dolor tempore sit? Pariatur maiores commodi at corrupti?</p>
                        </div>
                    </div>
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
