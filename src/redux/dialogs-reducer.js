import { dialogsAPI } from "../api/api";


let initialState = {
    dialogs: {
        dialog1: [
            { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
            { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
            { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
            { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
            { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
        ],
    },
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            let newMessage = {
                messageId: 1,
                messageText: action.messageText,
                userId: action.userId,
                createdAt: new Date()
            };
            let dialogId = action.dialogId;

            return {
                ...state,
                dialogs: [...state.dialogs[dialogId], newMessage]
            };
        default:
            return state
    }
};

export const addMessage = (dialogId, messageText, userId) => ({ type: 'ADD_NEW_MESSAGE', dialogId, messageText, userId });

export const getMessage = (dialogId) => (dispatch) => {
    dialogsAPI.getMessage()
        .then(resp => {
            dispatch(addMessage(dialogId, resp.data.value,))
        })
}

export default dialogsReducer;