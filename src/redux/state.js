import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
            ],
            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = sidebarReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}





export default store;