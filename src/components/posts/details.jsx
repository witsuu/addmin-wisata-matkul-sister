import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { Loading } from "../Loader/Loader";
import { DateRange } from "@material-ui/icons";
import dateFormat from "dateformat";
import { Layout } from "../Layouts/Layout";

export const Post = (props) => {
  const [destination, setDestination] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await axios.get(
          `${process.env.API_URL}destination/${props.id}`,
          {
            headers: {
              Authorization: process.env.API_TOKEN,
            },
          }
        );
        setDestination([post.data]);
        setTitle(post.data.name);
      } catch (err) {
        console.log(err);
      }
    };

    trackPromise(fetchData());
  }, [props.id]);

  return (
    <>
      <Layout>
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
              {title}
            </li>
          </ol>
        </nav>
        <div className="card">
          <Loading
            type="MutatingDots"
            color="#007bff"
            secondaryColor="Red"
            height={100}
            width={100}
          />
          {destination.map((post) => (
            <div className="card-body" key={post._id}>
              <h4 className="text-capitalize">{post.name}</h4>
              <small className="text-muted">
                <DateRange style={{ fontSize: "18px" }} />{" "}
                {dateFormat(Date.parse(post.date), "dddd, dd mmm yyyy")}
              </small>
              <hr className="mt-1" />
              <img
                src={`data:${post.images[0].files_id.contentType};base64,${btoa(
                  String.fromCharCode(
                    ...new Uint8Array(post.images[0].data.data)
                  )
                )}`}
                alt={post.name}
                className="w-100 rounded"
              />
              <span>{post.name}</span>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Post;
