import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogData.map((dialog) => (
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    ));
    let messagesElements = state.messagesData.map((m) => (
        <Message message={m.message} key={m.id}/>
    ));
    let newMessageBody = state.newMessageBody;

    let onMessageClick = () => {
        props.sendMessage()

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <textarea value={newMessageBody}
                           onChange={onNewMessageChange}
                           placeholder='Enter your message'>
                </textarea>
            </div>
            <div>
                <button onClick={onMessageClick}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
