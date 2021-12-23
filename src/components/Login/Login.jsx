import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControl";
import {required} from "../../utils/validate";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/Preloader/FormsControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
	return <form onSubmit={handleSubmit}>

		{CreateField("Email", "email", [required], Input)}
		{CreateField("Password", "password", [required], Input, {type: "password"})}
		{CreateField(null, "rememberMe", [required], Input, {type: "checkbox"}, "remember me")}


		{error && <div className={style.formSummaryError}>
			{error}
		</div>
		}
		<div>
			<button>LOGIN</button>
		</div>
	</form>
}
const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

const Login = (props) => {
	console.log(props)
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Redirect to={"/profile"}></Redirect>
	}
	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);