import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { post: 'Hi, how are you?', likesCount: 4 },
  { post: 'Its my first post', likesCount: 56 },
  { post: 'Blablabla', likesCount: 33 },
  { post: 'Dadada', likesCount: 88 },
];

let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Stas' },
  { id: 3, name: 'Egor' },
  { id: 4, name: 'Ivan' },
  { id: 5, name: 'Oleg' },
];

let messages = [
  { id: 1, message: 'Hello, how are you?' },
  { id: 2, message: 'Good-bye, see you later' },
  { id: 3, message: 'I\'m fine thank you' },
  { id: 4, message: 'Nice to meet you' },
  { id: 5, message: 'Would you like a cup of tea?' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
