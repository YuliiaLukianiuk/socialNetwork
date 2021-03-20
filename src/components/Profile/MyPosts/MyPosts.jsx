import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id:1, message:'Hi, how are you?', likesCount:"25"}, 
    {id:2, message:'It\'s my first post', likesCount:"2"}
  ]

  let postsElement = 
      posts.map( p => <Post message={p.message} likesCount={p.likesCount} />
    )
  return (
    <div className={classes.postsBlock}>
     <h3> My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}></div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
