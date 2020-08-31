import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import history from "../history";

class GoogleAuth extends React.Component {
  componentDidMount() {
    this.token = localStorage.getItem("token");
    this.onAuthChange(this.token);
  }

  onAuthChange = (token) => {
    if (token) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    history.push("/login");
  };

  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red button" onClick={this.onSignOutClick}>
          {/* <i className="icon" /> */}
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red button" onClick={this.onSignInClick}>
          {/* <i className="icon" /> */}
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
