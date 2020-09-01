import React from "react";
import { connect } from "react-redux";
import TrackerCreateForm from "../forms/TrackerCreateForm";
import { createTrack } from "../../actions";

class TrackerCreate extends React.Component {
  onSubmit = (formProps) => {
    this.props.createTrack(formProps);
  };

  render() {
    return (
      <div className="ui container">
        <h3>Create a new issue tracker</h3>
        <TrackerCreateForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createTrack })(TrackerCreate);
