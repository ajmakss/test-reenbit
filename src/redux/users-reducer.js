import { dialogsAPI } from "../api/api";


let initialState = {
    users: [
        {userId: 1, username: 'Max', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 2, username: 'Ivan', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 3, username: 'Lilia', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 4, username: 'Valentyn', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 5, username: 'Olesia', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 6, username: 'Ann', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default usersReducer;