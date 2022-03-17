import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount}/>
  ));

  let AddMyPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostForm onSubmit={AddMyPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name="newPostText"/>
      <div>
        <button>add post</button>
      </div>
    </form>
  )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewMyPostForm"})(AddNewPostForm)

export default MyPosts;
