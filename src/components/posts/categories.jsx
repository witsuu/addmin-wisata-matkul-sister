import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Loading } from "../Loader/Loader";
import { trackPromise } from "react-promise-tracker";
import { Layout } from "../Layouts/Layout";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const category = await axios.get(
          `${process.env.API_URL}destination/categories`,
          {
            headers: { Authorization: process.env.API_TOKEN },
          }
        );
        setCategories(category.data);
      } catch (error) {
        console.log(error);
      }
    };
    trackPromise(getCategories());
  }, []);

  return (
    <>
      <Layout>
        <Helmet>
          <title>{"Semua Postingan - Jember Vacation"}</title>
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
              Kategori
            </li>
          </ol>
        </nav>
        <div className="card">
          <div className="card-body container">
            <Loading
              type="MutatingDots"
              color="#007bff"
              height={100}
              width={100}
              secondaryColor="Red"
            />
            <div className="row justify-content-center">
              {categories.map((item) => (
                <div
                  className="col-md-3 shadow p-2 text-center m-2"
                  key={item._id}
                >
                  <span>{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
