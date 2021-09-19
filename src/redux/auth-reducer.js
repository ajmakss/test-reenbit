
let initialState = {
    userId: 1221,
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