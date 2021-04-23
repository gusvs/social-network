const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text 
    })

export default store;