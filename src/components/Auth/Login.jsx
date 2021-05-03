import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      error: false,
      msgError: "",
    };

    this.handleChangeInput = this.handleChangeInput.bind();
    this.handleLogin = this.handleLogin.bind();
  }

  handleChangeInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    if (this.state.email === "" || this.state.pass === "") {
      this.setState({
        error: true,
        msgError: "Email dan Password Tidak boleh kosong",
      });
    } else {
      alert("email: " + this.state.email + "\nPassword: " + this.state.pass);
    }
    e.preventDefault();
  };

  render() {
    const layoutStyle = {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    };

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
                <form onSubmit={this.handleLogin} method="Post">
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
                      type="text"
                      className="form-control"
                      name="pass"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    MASUK
                  </button>
                </form>
                {this.state.error && (
                  <strong className="text-danger">{this.state.msgError}</strong>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
