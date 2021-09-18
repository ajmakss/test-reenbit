import { dialogsAPI } from "../api/api";
import moment from 'moment';

let initialState = {
    dialogs: [
        {
            dialogId: "dialog1",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you, its last?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog2",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog3",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog4",
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1234, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
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
                createdAt: moment().format()
            };

            let cloneState = JSON.parse(JSON.stringify(state));

            cloneState.dialogs.map(d => d.dialogId === action.dialogId
                ? d.messages = [...d.messages, newMessage]
                : d)

            return cloneState;
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