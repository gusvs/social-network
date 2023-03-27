import axios from 'axios'
import {ProfileType} from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0d5b22a7-40b7-401e-a252-838843c88412',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: number) {
    return profileAPI.getProfile(userId)
  },
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photoFile: any) {
    let formData = new FormData()
    formData.append('image', photoFile)
    return instance.put(`profile/photo`,formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile)
  }
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: { id: number, email: string, login: string }
  resultCode: ResultCodesEnum
  message: string[]
}

type LoginResponseType = {
  data: { userId: number }
  resultCode: ResultCodesEnum | ResultCodesForCaptcha
  messages: string[]
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then(response => response.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
        .then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}

export const securityAPI = {
  getCaptcha() {
    return instance.get(`security/get-captcha-url`)
  },

}

