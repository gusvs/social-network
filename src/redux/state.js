let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 4 },
                { id: 2, message: 'Its my first post', likesCount: 56 },
                { id: 3, message: 'Blablabla', likesCount: 33 },
                { id: 4, message: 'Dadada', likesCount: 88 },
            ],
            newPostText: 'it-kamasutra.com'
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;