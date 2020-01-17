import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { signedIn, signedOut } from "../actions";

const GoogleAuth = (props: any) => {
  const { isSignedIn, signedIn, signedOut } = props;
  const auth: any = useRef();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "987283217526-pbhkveu3v717hl70hdc52v86smov9mv9.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange); //"listen" invokes "onAuthChange" whenever auth.isSignedIn is changed
        });
    });
    return () => {};
  });

  const onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      signedIn(auth.current.currentUser.get().getId());
    } else {
      signedOut();
    }
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };
  const onSignOutClick = () => {
    //will automatically sign in with the same account if you use 'signOut'
    window.gapi.auth2.getAuthInstance().disconnect();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state: { auth: any }) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signedIn, signedOut })(GoogleAuth);
