import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IState } from "../../interface";
import { fetchStream } from "../../actions";

const StreamEdit = (props: any) => {
  const { fetchStream, stream } = props;
  useEffect(() => {
    fetchStream(props.match.params.id);
  }, []);

  if (!stream) {
    return <div>Loading...</div>;
  }
  return <div>{stream.title}</div>;
};

const mapStateToProps = (state: IState, ownProps: any) => {
  console.log(state);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
