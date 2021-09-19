

let initialState = {
    users: [
        {userId: 1, username: 'Alice Freeman', avatar:'https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608?k=20&m=1129638608&s=612x612&w=0&h=AUoSDsGI9b-f_izlotPYpYb1nQ34YUvIlU6S4B1zJug=', online: true,},
        {userId: 2, username: 'Josefina', avatar:'https://www.westend61.de/images/0000998676pw/mature-blonde-woman-close-up-portrait-CUF39147.jpg', online: true,},
        {userId: 3, username: 'Velazquez', avatar:'https://images.unsplash.com/photo-1558730234-d8b2281b0d00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', online: false,},
        {userId: 4, username: 'Barrera', avatar:'https://st4.depositphotos.com/1049680/i/600/depositphotos_309844750-stock-photo-beautiful-brunette-woman-smiling-cheerful.jpg', online: true,},
        {userId: 5, username: 'John', avatar:'https://images.pexels.com/photos/3277804/pexels-photo-3277804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', online: false,},
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