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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Stas" id="2" />
                <DialogItem name="Egor" id="3" />
                <DialogItem name="Ivan" id="4" />
                <DialogItem name="Oleg" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hello, how are you?" />
                <Message message="Good-bye, see you later" />
                <Message message="I'm fine thank you" />
                <Message message="Nice to meet you" />
                <Message message="Would you like a cup of tea?" />
            </div>
        </div>
    );
}

export default Dialogs