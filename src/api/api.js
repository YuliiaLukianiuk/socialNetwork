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
		console.warn('Obsolete method.Please profileApi object')
		return profileApi.getProfile(userId)
	}
}

export const profileApi = {
	getProfile(userId) {
	return instance.get(`profile/` + userId)
 	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId)
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, {status:status});
	},
	savePhoto(photoFile) {
		let formData = new FormData();
		formData.append("image", photoFile)
		return instance.put(`profile/photo/`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	}
}
export const authAPI = {
		me() {
			return instance.get(`auth/me`);
	},
		login(email, password, rememberMe=false) {
			return instance.post(`auth/login`, {email, password, rememberMe});
		},
	logout() {
		return instance.delete(`auth/login`);
	}



}

