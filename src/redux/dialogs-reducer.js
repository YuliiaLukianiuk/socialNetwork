const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
    dialogData: [
        {id: 1, name: "Yuliia"},
        {id: 2, name: "Anna"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Hello!!!"},
        {id: 4, message: "Hi"},
        {id: 5, message: "How are you?"},
        {id: 6, message: "yo"},
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
                // messagesData:[ ...state.messagesData ],
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, {id: 7, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = (body) => ({
    type: SEND_MESSAGE,
    message: body,
});
export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReducer;
