import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl";
import {maxLengthCreator, required} from "../../utils/validate";

const Dialogs = (props) => {

	let state = props.messagePage;

	let dialogsElements = state.dialogData.map((dialog) => (
		<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
	));
	let messagesElements = state.messagesData.map((m) => (
		<Message message={m.message} key={m.id}/>
	));

	let addNewMessage = (values) => {
		 props.sendMessage(values.newMessageBody)

	}
	if (!props.isAuth) {
		return <Redirect to={"/Login"}/>
	}
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>

			</div>
			<AddMessageFormRedux onSubmit={addNewMessage}/>
		</div>
	)
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea}
				       name="newMessageBody"
				       placeholder="Enter your massage"
				validate = {[required, maxLength50]}></Field>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;
