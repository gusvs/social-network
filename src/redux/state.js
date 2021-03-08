let state = {
    profilePage: {
        posts: [
            { post: 'Hi, how are you?', likesCount: 4 },
            { post: 'Its my first post', likesCount: 56 },
            { post: 'Blablabla', likesCount: 33 },
            { post: 'Dadada', likesCount: 88 },
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

export default state