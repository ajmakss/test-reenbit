import React from "react";
import FacebookLogin from 'react-facebook-login';
import { connect } from "react-redux";
import { login, logout } from '../../redux/auth-reducer';
import './Facebook.scss';

class Facebook extends React.Component {

    responseFacebook = (resp) => {
        this.props.login(resp)
    };
    onLogout = () => {
        this.props.logout();
    }
    render() {
        let fbContent;
        if (this.props.auth.islogin) {
            fbContent = <button onClick={this.onLogout} className="logout">Logout</button>
        } else {
            fbContent = <FacebookLogin
                appId="392919762537820"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                size="small" />
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { login, logout })(Facebook)