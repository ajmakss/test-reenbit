import { dialogsAPI } from "../api/api";


let initialState = {
    dialogs: [
        {
            dialogId: "dialog1",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you, its last?', userId: 1234, createdAt: '' },
            ]
        },
        {
            dialogId: "dialog2",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
            ]
        },
        {
            dialogId: "dialog3",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
            ]
        },
        {
            dialogId: "dialog4",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: '' },
            ]
        },

    ],
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