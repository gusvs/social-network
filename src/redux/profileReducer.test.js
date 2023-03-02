import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'Its my first post', likesCount: 56},
        {id: 3, message: 'Blablabla', likesCount: 33},
        {id: 4, message: 'Dadada', likesCount: 88},
    ]
}

it('new post should be added', () => {
    let action = addPostActionCreator('text')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
})

it('message of new post should be text', () => {
    let action = addPostActionCreator('text')
    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('text')
})

it('after deleting length should be decrement', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3)
})

it('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})
