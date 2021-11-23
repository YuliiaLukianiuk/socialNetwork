import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl";
import {required} from "../../utils/validate";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field placeholder={'Email'}
			       name={'email'}
			       component={Input}
			       validate={[required]}
			/>
		</div>
		<div><Field placeholder={'PASSWORD'}
		            name={'password'}
		            component={Input}
		            type={"password"}
		            validate={[required]}
		/></div>
		<div><Field component={Input}
		            name={'rememberMe'}
		            type='checkbox'/>remember me
		</div>
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
		return <Redirect to = {"/profile"}></Redirect>
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