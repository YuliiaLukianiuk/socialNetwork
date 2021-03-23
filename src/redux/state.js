import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "25" },
      { id: 2, message: "It's my first post", likesCount: "2" },
    ],
    newPostText: 'Yuliia Hello'
  
  },
  messagePage: {
    dialogData: [
      { id: 1, name: "Yuliia" },
      { id: 2, name: "Anna" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],

    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Hello!!!" },
      { id: 4, message: "Hi" },
      { id: 5, message: "How are you?" },
      { id: 6, message: "yo" },
    ]
  
  }
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
renderEntireTree(state);
}

export default state;