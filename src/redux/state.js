let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "25" },
        { id: 2, message: "It's my first post", likesCount: "2" },
      ],
      newPostText: "Yuliia Hello",
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
      ],
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber()  {
    console.log("state  changed");
  },
  _addPost()  {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);

  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);

  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type==='ADD-POST') {
      this._addPost();
    }else if (action.type=== 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText);
    }
  }
}




export default store;
window.store = store;