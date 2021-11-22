import {profileApi, usersAPI} from "../api/api";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

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
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText
});


export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile,
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});

export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
      .then(response => {
          dispatch(setUsersProfile(response.data));
      });

};

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
      .then(response => {
          dispatch(setStatus(response.data));
      });
}
export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
      .then(response => {
          if (response.data.resultCode === 0) {
              dispatch(setStatus(status));
          }


      });
};
export default profileReducer
