
let initialState = {
    userId: 6,
    avatar: null,
    userName: null,
    islogin: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                avatar: action.data.picture.data,
                userName: action.data.name,
                isLogin: true,
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                avatar: null,
                userName: null,
                islogin: false,
            }
        default:
            return state
    }
};

export const login = (data) => ({ type: 'LOGIN_USER', data });
export const logout = () => ({ type: 'LOGOUT_USER' });
export default authReducer;