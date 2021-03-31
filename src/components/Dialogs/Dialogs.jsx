import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogs-reducer copy";

const Dialogs = (props) => {

  let state = props.store.getState().messagePage
  let dialogsElements = state.dialogData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator())
    
  }
  let onNewMessageChange = (e) => {
   let body =  e.target.value;
   props.store.dispatch(updateNewMessageBodyActionCreator(body))
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        </div>
        <div><textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='Enter your message'></textarea></div>
        <div><button onClick={ onMessageClick}>Send</button></div>
    </div>
  );
};

export default Dialogs;
