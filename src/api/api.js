import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ac425be9-d202-4bf1-85c0-9d13d8fdd237',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
}

export const followAPI = {
  follow(userId, follow, toggleFollowingProgress) {
    toggleFollowingProgress(true, userId)
    return instance.post(`follow/` + userId).then((response) => {
      if (response.data.resultCode === 0) {
        follow(userId)
      }
      toggleFollowingProgress(false, userId)
    })
  },
  unfollow(userId, unfollow, toggleFollowingProgress) {
    toggleFollowingProgress(true, userId)
    return instance.delete(`follow/` + userId).then((response) => {
      if (response.data.resultCode === 0) {
        unfollow(userId)
      }
      toggleFollowingProgress(false, userId)
    })
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data)
  },
}
