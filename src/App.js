import React, {Profiler} from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/preloader";
import {initializeApp} from "./redux/app-reducer";


class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if(!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<BrowserRouter>
				<div className="app-wrapper">
					<HeaderContainer/>
					<Navbar/>
					<div className='app-wrapper-content'>
						<Route path='/dialogs'
						       render={() => <DialogsContainer/>}/>
						<Route path='/profile/:userId?'
						       render={() => <ProfileContainer/>}/>

						<Route path='/users'
						       render={() => <UsersContainer/>}/>
						<Route path='/login'
						       render={() => <Login/>}/>

						{/*<Route path='/news'/>*/}
						{/*<Route path='/music'/>*/}
						{/*<Route path='/settings'/>*/}

					</div>
				</div>
			</BrowserRouter>
		);
	}
}
const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})) (App);
