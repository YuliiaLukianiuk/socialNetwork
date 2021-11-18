import  axios from 'axios';


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '6e47cc31-4791-45a1-9bde-719317a38571'
	},

});
export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(id) {
		return instance.post(`follow/${id}`
		)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`)
	},
	getProfile(userId) {
		return instance.get(`profile/` + userId)
	}
}


export const authAPI = {
		me() {
			return instance.get(`auth/me`)
	}



}

