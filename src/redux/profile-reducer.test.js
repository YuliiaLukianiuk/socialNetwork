import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state =  {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "27"},
        {id: 2, message: "It's my first post", likesCount: "2"},
    ],

    profile: null,
    status: ''
};
test('new post should be add', () => {
    let action = addPostActionCreator('Hello');

    let newState = profileReducer(state, action);
   expect(newState.posts.length).toBe(3);
});

test('new post should be add message', () => {
    let action = addPostActionCreator('Hello');

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('Hello');
});
//tdd
test('after deleting length should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});