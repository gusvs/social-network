import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 4 },
            { id: 2, message: 'Its my first post', likesCount: 56 },
            { id: 3, message: 'Blablabla', likesCount: 33 },
            { id: 4, message: 'Dadada', likesCount: 88 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Stas' },
            { id: 3, name: 'Egor' },
            { id: 4, name: 'Ivan' },
            { id: 5, name: 'Oleg' },
        ],
        messages: [
            { id: 1, message: 'Hello, how are you?' },
            { id: 2, message: 'Good-bye, see you later' },
            { id: 3, message: 'I\'m fine thank you' },
            { id: 4, message: 'Nice to meet you' },
            { id: 5, message: 'Would you like a cup of tea?' },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state