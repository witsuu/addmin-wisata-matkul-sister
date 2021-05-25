import React from "react";
import { handleLogin, isLoggedIn } from "../../services/auth";
import { navigate } from "gatsby";
import "./Login.scss";
import { trackPromise } from "react-promise-tracker";
import { Loading } from "../Loader/Loader";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      isLoading: false,
      status: "",
    };

    this.handleChangeInput = this.handleChangeInput.bind();
    this.handleSubmit = this.handleSubmit.bind();
  }

  handleChangeInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        isLoading: true,
      },
      async () => {
        this.setState({
          status: await trackPromise(handleLogin(this.state)),
          isLoading: false,
        });
      }
    );
  };

  render() {
    const layoutStyle = {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    };

    if (isLoggedIn()) {
      navigate("/");
    }

    return (
      <>
        <div
          className="vw-100 vh-100"
          style={{
            background:
              "radial-gradient(circle, rgba(17,52,163,1) 0%, rgba(44,82,215,1) 51%, rgba(0,212,255,1) 100%)",
          }}
        >
          <div className="position-absolute col-md-4" style={layoutStyle}>
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <h4>MASUK</h4>
                </div>
                <form
                  onSubmit={(event) => {
                    this.handleSubmit(event);
                  }}
                  method="Post"
                >
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="pass"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    {this.state.isLoading ? (
                      <Loading
                        type="Oval"
                        color="#fff"
                        height={20}
                        width={20}
                      />
                    ) : (
                      "MASUK"
                    )}
                  </button>
                </form>
                {this.state.status === 400 && (
                  <div className="msgError p-2 rouded mt-2 text-white text-center">
                    Invalid Credentials!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
