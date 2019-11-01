import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostList = (props: any) => {
  const { posts } = props;
  useEffect(() => {
    props.fetchPosts();
  }, []);
  console.log(posts.data);
  return (
    <div>
      PostList
      {/* <div>{4}</div> */}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
