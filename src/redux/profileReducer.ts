import {profileAPI, usersAPI} from '../api/api'
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS'



type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'Its my first post', likesCount: 56},
        {id: 3, message: 'Blablabla', likesCount: 33},
        {id: 4, message: 'Dadada', likesCount: 88},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts].filter(post => post.id !== action.postId)
            }
        case SET_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})
type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})
type SetUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfile => ({type: SET_USER_PROFILE, profile})
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})
type SavePhotoSuccessType = {
    type: typeof SET_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SET_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatus(status))
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) dispatch(getUserProfile(userId))
    else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer
