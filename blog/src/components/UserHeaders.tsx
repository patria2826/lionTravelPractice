import React from "react";
import { connect } from "react-redux";

const UserHeader = (props: any) => {
  const { user } = props;

  if (!user) {
    return <div>Anonymous</div>;
  }
  return <div className="header">{`${user.username}`}</div>;
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.users.find((user: any) => {
      return user.id === ownProps.userId;
    })
  };
};

export default connect(mapStateToProps)(UserHeader);
