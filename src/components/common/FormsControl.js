import React from "react";
import styles from "./Preloader/FormsControl.module.css"
import {Field} from "redux-form";


const FromControl =({input,  meta: {touched, error},children}) => {
	const hasError = touched && error
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{children}
			</div>
			{ hasError && <span>{error}</span>}
		</div>
	)
}


export const Textarea = (props) => {
	const {input, meta,child,...restProps} = props;
	return (
		<FromControl {...props}><textarea {...input} {...restProps}></textarea></FromControl>
	)
}

export const Input = (props) => {
	const {input, meta,child,...restProps} = props;
	return (
		<FromControl {...props}><input {...input} {...restProps}></input></FromControl>
	)
}
export const CreateField = (
	placeholder,
	name,
	validate,
	component,
	props = {},
	text = ""
) => (
	<div>
	<Field placeholder={placeholder}
	       name={name}
	       validate={validate}
	       component={component}
	       {...props}
	/> {text}
	</div>
)