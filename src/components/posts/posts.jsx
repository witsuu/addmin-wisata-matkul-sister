import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import axios from "axios";
import { DateRange } from "@material-ui/icons";
import dateFormat from "dateformat";
import { Loading, LoadingFull } from "../Loader/Loader";
import { trackPromise } from "react-promise-tracker";
import { Layout } from "../Layouts/Layout";
import ReactPaginate from "react-paginate";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState("");
  const limit = 6;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await axios.get(
          `${process.env.API_URL}destination?page=${page}&limit=${limit}`,
          {
            headers: { Authorization: process.env.API_TOKEN },
          }
        );

        setPageCount(post.data.maxPage);
        setPosts(post.data.destinations);
      } catch (error) {
        console.log(error);
      }
    };
    trackPromise(fetchPost());
  }, [page, limit]);

  const handleNextPaginate = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
    setOffset(selectedPage + 1);
  };

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
            <li className="breadcrumb-item active" aria-current="page">
              Semua Postingan
            </li>
          </ol>
        </nav>
        <div className="card">
          <div className="card-body">
            {posts.length === 0 && (
              <Loading
                type="MutatingDots"
                color="#007bff"
                height={100}
                width={100}
                secondaryColor="Red"
              />
            )}
            <div className="row">
              {posts.map((post) => (
                <div className="col-md-4 mb-4" key={post._id}>
                  <div className="card shadow">
                    <div className="card-body p-2">
                      <Link to={`/postingan/${post._id}`}>
                        <img
                          src={`data:${
                            post.images[0].files_id.contentType
                          };base64,${btoa(
                            String.fromCharCode(
                              ...new Uint8Array(post.images[0].data.data)
                            )
                          )}`}
                          alt={post.name}
                          className="w-100 rounded"
                        />
                        <h5>{post.name}</h5>
                      </Link>
                      <small
                        className="text-muted"
                        style={{ fontSize: "12px" }}
                      >
                        <DateRange style={{ fontSize: "18px" }} />{" "}
                        {dateFormat(
                          Date.parse(post.date),
                          "dddd, dd mmm yyyy HH:MM"
                        )}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {posts.length !== 0 && (
              <nav aria-label="Page navigation">
                <ReactPaginate
                  breakLabel={"..."}
                  nextLabel={"Next"}
                  previousLabel={"Prev"}
                  nextClassName={"page-item"}
                  previousClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  previousLinkClassName={"page-link"}
                  activeClassName={"active"}
                  activeLinkClassName={"page-link"}
                  breakClassName={"page-item disabled"}
                  breakLinkClassName={"page-link"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  onPageChange={handleNextPaginate}
                  initialPage={offset}
                  containerClassName={"pagination justify-content-center"}
                />
              </nav>
            )}
          </div>
        </div>
      </Layout>
      {posts.length !== 0 && (
        <LoadingFull
          type="Oval"
          color="#007bff"
          height={50}
          width={50}
          secondaryColor="Red"
        />
      )}
    </>
  );
};
