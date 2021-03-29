import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let postsElement =
  props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />
    );

    let addPost = () => {
      props.dispatch( addPostActionCreator());
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
        
    }
  return (
    <div className={classes.postsBlock}>
     <h3> My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
          value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}></div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
