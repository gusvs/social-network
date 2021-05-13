import { React } from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMassageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs
            updateNewMessageBody={onNewMassageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
}

export default DialogsContainer;