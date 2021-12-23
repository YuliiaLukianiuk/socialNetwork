import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validate";
import {Textarea} from "../../common/FormsControl";

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo(props => {

  let postsElement =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>
    );
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={classes.posts}></div>
      {postsElement}
    </div>
  );
});


export default MyPosts;
