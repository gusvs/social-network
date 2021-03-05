import { React } from 'react';
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Dima</div>
                <div className={`${s.dialog} ${s.active}`}>Stas</div>
                <div className={s.dialog}>Egor</div>
                <div className={s.dialog}>Ivan</div>
                <div className={s.dialog}>Oleg</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello, how are you?</div>
                <div className={s.message}>Hello, how are you?</div>
                <div className={s.message}>Hello, how are you?</div>
                <div className={s.message}>Hello, how are you?</div>
                <div className={s.message}>Hello, how are you?</div>
            </div>
        </div>
    );
}

export default Dialogs