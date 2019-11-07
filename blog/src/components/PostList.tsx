import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeaders";

const PostList = (props: any) => {
  const { posts } = props;

  useEffect(() => {
    props.fetchPostsAndUsers();
  }, []);
  // console.log(posts);

  const renderList = () => {
    return posts.map((post: any) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
