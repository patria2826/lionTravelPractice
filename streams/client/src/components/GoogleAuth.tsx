import React, { useEffect } from "react";

const GoogleAuth = (props: any) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "987283217526-pbhkveu3v717hl70hdc52v86smov9mv9.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }, []);
  return <div>GoogleAuth</div>;
};

export default GoogleAuth;
