import { dialogsAPI } from "../api/api";
import moment from 'moment';

let initialState = {
    dialogs: [
        {
            dialogId: "dialog1",
            members: [
                { userId: 1 },
                { userId: 6 }
            ],
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 1, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you, its last?', userId: 1, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog2",
            members: [
                { userId: 2 },
                { userId: 6 }
            ],
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 2, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 2, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 2, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 2, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 2, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog3",
            members: [
                { userId: 3 },
                { userId: 6 }
            ],
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog4",
            members: [
                { userId: 4 },
                { userId: 6 }
            ],
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 4, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 4, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 4, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 4, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 4, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog5",
            members: [
                { userId: 5 },
                { userId: 6 }
            ],
            messages: [
                { messageId: 1, messageText: 'Hi, how are you?', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 1, messageText: 'Hi, how are you?', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
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

export const getMessage = (dialogId, userId) => (dispatch) => {
    setTimeout(() => {
        dialogsAPI.getMessage()
            .then(resp => {
                dispatch(addMessage(dialogId, resp.data.value, userId))
            })
    }, 10000)
}

export default dialogsReducer;