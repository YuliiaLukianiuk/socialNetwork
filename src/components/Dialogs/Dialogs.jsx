import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.messages}>{props.message}</div>;
};
const Dialogs = (props) => {
  let dialogData = [
    { id: 1, name: "Yuliia" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hello!!!" },
    { id: 4, message: "Hi" },
    { id: 5, message: "How are you?" },
    { id: 6, message: "yo" },
  ];

  let dialogsElements = dialogData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
