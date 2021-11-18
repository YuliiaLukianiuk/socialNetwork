import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { (store) => {
//             // let state = store.getState().messagePage;
//
//             let onMessageClick = () => {
//                 store.dispatch(sendMessageActionCreator());
//
//             }
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyActionCreator(body));
//             }
//
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onMessageClick}
//                             messagePage={store.getState().messagePage}/>
//         }
//     }
//     </StoreContext.Consumer>
// };
let mapStateToProps = (state) => {
return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
     updateNewMessageBody:(body) => {
        dispatch(updateNewMessageBodyActionCreator(body));
    }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
