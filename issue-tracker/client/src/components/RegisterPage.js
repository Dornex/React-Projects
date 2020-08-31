import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import { Link } from "react-router-dom";
import RegisterForm from "./forms/RegisterForm";

class RegisterPage extends React.Component {
  onSubmit = (formProps) => {
    this.props.registerUser(formProps);
  };

  render() {
    return (
      <div>
        <h3>Register a new account</h3>
        <RegisterForm onSubmit={this.onSubmit} />
        <Link to="/login">Do you already have an account?</Link>
      </div>
    );
  }
}

export default connect(null, { registerUser })(RegisterPage);
