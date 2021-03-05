import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Stas'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Oleg'},
    ];

    let messagesData = [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'Good-bye, see you later'},
        {id: 3, message: 'I\'m fine thank you'},
        {id: 4, message: 'Nice to meet you'},
        {id: 5, message: 'Would you like a cup of tea?'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    );
}

export default Dialogs