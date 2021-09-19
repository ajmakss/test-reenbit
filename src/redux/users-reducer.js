

let initialState = {
    users: [
        {userId: 1, username: 'Alice Freeman', avatar:'http://demo.foxthemes.net/socialitev2.1/assets/images/avatars/avatar-3.jpg', online: true,},
        {userId: 2, username: 'Josefina', avatar:'http://demo.foxthemes.net/socialitev2.1/assets/images/avatars/avatar-3.jpg', online: true,},
        {userId: 3, username: 'Velazquez', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 4, username: 'Valentyn', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 5, username: 'Barrera', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        {userId: 6, username: 'Me', avatar:'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png', online: true,},
        
        
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default usersReducer;