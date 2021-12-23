import {profileApi, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_POST_DELETE = "SET_POST_DELETE";


let initialState = {
	posts: [
		{id: 1, message: "Hi, how are you?", likesCount: "27"},
		{id: 2, message: "It's my first post", likesCount: "2"},
	],

	profile: null,
	status: ''
};
const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostNext: ''

			};
		}


		case SET_USERS_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		case SET_POST_DELETE: {
			return {...state, posts: state.posts.filter(p => p.id != action.postId)}
		}
		default:
			return state;
	}

}

export const addPostActionCreator = (newPostText) => ({
	type: ADD_POST,
	newPostText
});
export const deletePost = (postId) => ({
	type: SET_POST_DELETE,
	postId,
});

export const setUsersProfile = (profile) => ({
	type: SET_USERS_PROFILE,
	profile,
});
export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});

export const getUsersProfile = (userId) => async (dispatch) => {
const response = await	usersAPI.getProfile(userId)
			dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
const response = await	profileApi.getStatus(userId)
			dispatch(setStatus(response.data));

}
export const updateStatus = (status) => async (dispatch) => {
const response = await	profileApi.updateStatus(status)
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
};
export default profileReducer
