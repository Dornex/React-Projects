import React from "react";
import { connect } from "react-redux";
import { signInNode } from "../actions";
import AuthForm from "./forms/AuthForm";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  onSubmit = (formProps) => {
    this.props.signInNode(formProps);
  };

  render() {
    return (
      <div>
        <h3>Login Page</h3>
        <AuthForm onSubmit={this.onSubmit} />
        <Link to="/register">Do you not have an account?</Link>
      </div>
    );
  }
}

export default connect(null, { signInNode })(LoginPage);
