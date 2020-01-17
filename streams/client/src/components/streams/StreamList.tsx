import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Props, State, Stream } from "../../interface";
import { fetchStreams } from "../../actions";

const StreamList: React.FC<any> = (props: Props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);
  const renderList = () => {
    return props.streams.map((stream: Stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="ui celled list">{renderList()}</div>
    </>
  );
};

const mapStateToProps = (state: State) => {
  console.log(state.streams);

  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
