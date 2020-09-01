import React from "react";
import { Field, reduxForm } from "redux-form";

class TrackerCreateForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
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
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="name"
            component={this.renderInput}
            label="Enter issue tracker name"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You must enter a issue tracker name!";
  }

  return errors;
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.error,
  };
};

export default reduxForm({
  form: "createForm",
  validate,
})(TrackerCreateForm);
