import React, { useEffect, useState } from "react";

const GoogleAuth = (props: any) => {
  const [isSignedin, setIsSignedIn] = useState<boolean>(false);
  let auth: any;
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "987283217526-pbhkveu3v717hl70hdc52v86smov9mv9.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange); //"listen" invokes "onAuthChange" whenever auth.isSignedIn is changed
        });
    });
  }, []);

  const onAuthChange = () => {
    setIsSignedIn(auth.isSignedIn.get());
  };

  const onSignIn = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };
  const onSignOut = () => {
    window.gapi.auth2.getAuthInstance().disconnect(); //will automatically sign in with the same account if you use signOut
  };

  const renderAuthButton = () => {
    if (isSignedin) {
      return (
        <button className="ui red google button" onClick={onSignOut}>
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={onSignIn}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
