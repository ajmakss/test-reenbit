import React from "react";
import FacebookLogin from 'react-facebook-login';
import { connect } from "react-redux";
import { login, logout } from '../../redux/auth-reducer';
import './Facebook.scss';

const Facebook = (props) => {

    const responseFacebook = (resp) => {
        props.login(resp)
    };
    const onLogout = () => {
        props.logout();
    }
    if(props.auth.islogin) {
        return <button onClick={onLogout} className="logout">Logout</button>
    } else {
    return <FacebookLogin
        appId="392919762537820"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        size="small" />
}
}

let mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { login, logout })(Facebook)