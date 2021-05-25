import React from "react";
import { Link, navigate } from "gatsby";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./post.scss";
import { storeDestinationService } from "../../services/destination.service";
import { Layout } from "../Layouts/Layout";
import { LoadingFull } from "../Loader/Loader";
import { ModalSuccessAndFail } from "../Modals";
import { trackPromise } from "react-promise-tracker";

export class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      name: "",
      description: "",
      image: undefined,
      kategori: "",
      imageError: undefined,
      showModal: false,
      status: "",
    };

    this.handleChangeInput = this.handleChangeInput.bind();
    this.handleChangeInputFile = this.handleChangeInputFile.bind();
    this.handleSubmit = this.handleSubmit.bind();
  }

  componentDidMount = () => {
    const getCategories = async () => {
      try {
        const category = await axios.get(
          `${process.env.API_URL}destination/categories`,
          {
            headers: { Authorization: process.env.API_TOKEN },
          }
        );
        this.setState({
          categories: category.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  };

  handleChangeInput = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleChangeInputFile = (e) => {
    e.preventDefault();
    const img = e.target.files[0];
    if (!img) return this.setState({ imageError: "Please select image" });

    if (!img.name.match(/\.(jpg|jpeg|png)$/))
      return this.setState({ imageError: "please select valid image" });

    this.setState({
      image: e.target.files[0],
      imageError: undefined,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const status = await trackPromise(storeDestinationService(this.state));
    this.setState(
      {
        showModal: true,
        status: status,
      },
      () => {
        setTimeout(() => {
          this.setState({
            showModal: false,
          });
          this.state.status === 200 && navigate("/postingan");
        }, 3000);
      }
    );
  };

  render() {
    return (
      <>
        <Layout>
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
              <div className="card-body">
                {
                  <form method="POST" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Nama Wisata</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.handleChangeInput}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Kategori</label>
                      <select
                        name="kategori"
                        className="form-control"
                        onBlur={this.handleChangeInput}
                        required
                      >
                        <option value="">--Pilih Kategori--</option>
                        {this.state.categories.map((data) => (
                          <option value={data._id} key={data._id}>
                            {data.category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Gambar</label>
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        onChange={this.handleChangeInputFile}
                        accept="image/png,image/jpeg"
                        required
                      />
                      {this.state.imageError && (
                        <strong className="text-danger fw-5">
                          {this.state.imageError}
                        </strong>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Deskripsi</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        onChange={this.handleChangeInput}
                        required
                      />
                    </div>
                    {!this.state.imageError ? (
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                      />
                    ) : (
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                        disabled
                      />
                    )}
                  </form>
                }
              </div>
            </div>
          </section>
        </Layout>
        <LoadingFull
          type="Oval"
          color="#007bff"
          height={50}
          width={50}
          secondaryColor="Red"
        />
        {this.state.showModal ? (
          <ModalSuccessAndFail
            id="successAndFail"
            message={this.state.status === 200 ? "Berhasil" : "Gagal"}
            status={this.state.status}
          />
        ) : null}
      </>
    );
  }
}
