import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { registerUser } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  static propTypes = {
    registerUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const { password, passwordConfirmation } = this.state;
    const { createMessage } = this.props;
    if (password !== passwordConfirmation) {
      createMessage({ passwordsNotMatch: "Passwords do not match" });
    } else {
      const { username, email } = this.state;
      const { registerUser } = this.props;
      const newUser = {
        username,
        password,
        email
      };
      registerUser(newUser);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="car card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="passwordConfirmation"
                onChange={this.onChange}
                value={passwordConfirmation}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { registerUser, createMessage })(
  Register
);
