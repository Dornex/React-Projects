import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class AuthForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderPostAuthError = (error) => {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  };

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formProps) => {
    this.props.onSubmit(formProps);
  };

  render() {
    return (
      <>
        {this.props.authError
          ? this.renderPostAuthError(this.props.authError)
          : null}
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="username"
            component={this.renderInput}
            label="Enter username"
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Enter password"
            type="password"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username!";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password!";
  }

  return errors;
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.error,
  };
};

const authForm = reduxForm({
  form: "authForm",
  validate,
})(AuthForm);

export default connect(mapStateToProps)(authForm);
