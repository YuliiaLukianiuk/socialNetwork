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

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {


        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
     newMessageBody,
});


export default dialogsReducer;
