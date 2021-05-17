import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMassageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }
                    return <Dialogs
                        updateNewMessageBody={onNewMassageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;