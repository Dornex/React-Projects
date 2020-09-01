import React from "react";
import { Link } from "react-router-dom";

class TrackerList extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Link to="/tracker/new" className="ui primary button">
          Create new issue tracker
        </Link>
      </div>
    );
  }
}

export default TrackerList;
