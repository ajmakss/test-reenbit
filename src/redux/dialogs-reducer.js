import { dialogsAPI } from "../api/api";
import moment from 'moment';
import message from '../audio/message.mp3';
import nextId from "react-id-generator";


let initialState = {
    dialogs: [
        {
            dialogId: "dialog1",
            members: [
                { userId: 1, username: 'Alice Freeman' },
                { userId: 6, username: 'Me' }
            ],
            messages: [
                { messageId: 1, messageText: 'Hi, please go to the meeting room 1B, we have big server issue', userId: 1, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog2",
            members: [
                { userId: 2, username: 'Josefina' },
                { userId: 6, username: 'Me' }
            ],
            messages: [
                { messageId: 1, messageText: 'Quickly come to the meeting room 1B, we have big server issue', userId: 2, createdAt: 'Sat Sep 10 2021 08:00:48 GMT+0300' },
                { messageId: 2, messageText: 'I\'m having breakfast right now, can\'t you wait for 10 minutes?', userId: 6, createdAt: 'Sat Sep 10 2021 08:05:48 GMT+0300' },
                { messageId: 3, messageText: 'We are losing money! Quick!', userId: 2, createdAt: 'Sat Sep 10 2021 08:10:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog3",
            members: [
                { userId: 3, username: 'Velazquez' },
                { userId: 6, username: 'Me' }
            ],
            messages: [
                { messageId: 1, messageText: 'Have you done your task?', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 2, messageText: 'Yes, I have. I\'ll send you it in a minute', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 3, messageText: 'Ok, you can send it to my email', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 4, messageText: 'Quickly come to the meeting room 1B, we have big server issue', userId: 3, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog4",
            members: [
                { userId: 4, username: 'Barrera' },
                { userId: 6, username: 'Me' }
            ],
            messages: [
                { messageId: 1, messageText: 'Hi, Barrera', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 2, messageText: 'Hi, how are you', userId: 4, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 3, messageText: 'Not bad, thanks. What about you?', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 4, messageText: 'I\'m good too, but I have to go to a client meeting right now. I\'ll type you later', userId: 4, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 5, messageText: 'Ok, bye', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
            ]
        },
        {
            dialogId: "dialog5",
            members: [
                { userId: 5, username: 'John' },
                { userId: 6, username: 'Me' }
            ],
            messages: [
                { messageId: 1, messageText: 'Hello, are you there?', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 2, messageText: 'Yes, who are you', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 3, messageText: 'I\'m Watt', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 4, messageText: 'What\'s your name?', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 5, messageText: 'Watt\'s my name', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 6, messageText: 'Yes, what\'s your name?', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 7, messageText: 'My name is John Watt', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 8, messageText: 'John what', userId: 6, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },
                { messageId: 9, messageText: 'Watt\'s my name', userId: 5, createdAt: 'Sat Sep 18 2021 19:07:48 GMT+0300' },

            ]
        },

    ],
    chatFilter: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            let newMessage = {
                messageId: nextId(action.dialogId),
                messageText: action.messageText,
                userId: action.userId,
                createdAt: moment().format()
            };

            let cloneState = JSON.parse(JSON.stringify(state));

            cloneState.dialogs.map(d => d.dialogId === action.dialogId
                ? d.messages = [...d.messages, newMessage]
                : d)
            return cloneState;
        case 'SET_CHAT_FILTER':
            return {
                ...state,
                chatFilter: action.filterText
            }
        default:
            return state
    }
};

export const addMessage = (dialogId, messageText, userId) => ({ type: 'ADD_NEW_MESSAGE', dialogId, messageText, userId });
export const setChatFilter = (filterText) => ({ type: 'SET_CHAT_FILTER', filterText });

export const getMessage = (dialogId, userId) => (dispatch) => {
    let sound = new Audio(message)
    setTimeout(() => {
        dialogsAPI.getMessage()
            .then(resp => {
                dispatch(addMessage(dialogId, resp.data.value, userId))
            })
        sound.play()
    }, 10000)
}

export default dialogsReducer;