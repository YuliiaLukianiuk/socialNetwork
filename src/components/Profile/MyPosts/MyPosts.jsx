import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea"/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {

  let postsElement =
  props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />
    );
    let onAddPost = (values) => {
       props.addPost(values.newPostText);
      // alert(values.newPostText)

    }


  return (
    <div className={classes.postsBlock}>
     <h3> My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={classes.posts}></div>
      {postsElement}
    </div>
  );
};


export default MyPosts;
