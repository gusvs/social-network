import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

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

const maxLength10 = maxLengthCreator(10)

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} placeholder={"Post message"} name="newPostText" validate={[required, maxLength10]}/>
      <div>
        <button>add post</button>
      </div>
    </form>
  )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewMyPostForm"})(AddNewPostForm)

export default MyPosts;
