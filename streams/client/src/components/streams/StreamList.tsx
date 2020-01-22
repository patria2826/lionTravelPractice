import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IProps, IState, IStream } from "../../interface";
import { fetchStreams } from "../../actions";

const StreamList: React.FC<any> = (props: IProps) => {
  const { fetchStreams } = props;
  useEffect(() => {
    fetchStreams && fetchStreams();
  }, []);

  //   create delete and edit btns
  const renderAdmin = (stream: IStream) => {
    if (stream.userId === props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderCreateBtn = () => {
    if (props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Steam
          </Link>
        </div>
      );
    }
  };

  const renderList = () => {
    if (props.streams && props.streams.length) {
      return props.streams.map((stream: IStream) => {
        return (
          <div className="item" key={stream.id}>
            {/* moved here for semantic UI */}
            {renderAdmin(stream)}
            {/* moved here for semantic UI */}
            <i className="large middle aligned icon camera" />
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <div className="ui celled list">{renderList()}</div>
      {renderCreateBtn()}
    </>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    streams: Object.values(state.streams),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
