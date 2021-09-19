
let initialState = {
    userId: 6,
    avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png',
    userName: 'Me',
    email: null,
    login: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state
    }
};

export const addMessage = (dialogId, messageText, userId) => ({ type: 'ADD_NEW_MESSAGE', dialogId, messageText, userId });


export default authReducer;