import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";


let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],


};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {

		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users,action.userId, "id", {followed: true})
			 }
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users,action.userId, "id", {followed: false})
			}

		case SET_USERS: {
			return {...state, users: [...action.users]}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		case TOGGLE_IS_FOLLOWING: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		}


		default:
			return state;
	}
};

export const followSuccess = (userId) => ({
	type: FOLLOW,
	userId
});
export const unfollowSuccess = (userId) => ({
	type: UNFOLLOW,
	userId
});
export const setUsers = (users) => ({
	type: SET_USERS,
	users,
});
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING,
	isFetching,
	userId
});
//thunk
export const getUsersThunkCreator = (page, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

		const data = await usersAPI.getUsers(page, pageSize)

		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setUsersTotalCount(data.totalCount));

	}
}
const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, id));

	const response = await apiMethod(id)
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(id))
	}
	dispatch(toggleFollowingProgress(false, id));
}

export const follow = (id) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.follow.bind(usersAPI);
		let actionCreator = followSuccess;
		followUnfollowFlow(dispatch, id, apiMethod, actionCreator);

	}
}

export const unfollow = (id) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.unfollow.bind(usersAPI);
		let actionCreator = unfollowSuccess;
		followUnfollowFlow(dispatch, id, apiMethod, actionCreator);

	}
}


export default usersReducer;
