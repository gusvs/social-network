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
    let dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Stas' },
        { id: 3, name: 'Egor' },
        { id: 4, name: 'Ivan' },
        { id: 5, name: 'Oleg' },
    ];

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messages = [
        { id: 1, message: 'Hello, how are you?' },
        { id: 2, message: 'Good-bye, see you later' },
        { id: 3, message: 'I\'m fine thank you' },
        { id: 4, message: 'Nice to meet you' },
        { id: 5, message: 'Would you like a cup of tea?' },
    ];

    let messagesElements = messages
        .map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs