import React from "react";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {
return {
    messagePage: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        },

    }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  AuthRedirect
)(Dialogs);
