import React  from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl";
import {required} from "../../utils/validate";

const LoginForm = (props) =>{
	return	<form onSubmit={props.handleSubmit}>
		<div>
			<Field placeholder={'LOGIN'}
			       name={'login'}
			       component={Input}
			       validate = {[required]}
			/>
		</div>
		<div><Field placeholder={'PASSWORD'}
		            name={'password'}
		            component={Input}
		            validate = {[required]}
		/></div>
		<div><Field component={Input} name={'checkbox'} type='checkbox'/>remember me</div>
		<div>
			<button>LOGIN</button>
		</div>
	</form>
}
const LoginReduxForm = reduxForm({
	form:'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData)
	}
	return <div>
	<h1>LOGIN</h1>
	<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}



export default Login;