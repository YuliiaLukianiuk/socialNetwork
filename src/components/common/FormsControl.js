import React from "react";
import styles from "./Preloader/FormsControl.module.css"

const FromControl =({input, meta,child,...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{props.children}
			</div>
			{ hasError && <span>{meta.error}</span>}
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