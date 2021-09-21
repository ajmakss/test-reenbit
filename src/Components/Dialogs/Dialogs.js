import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router";
import ChatsContainer from "./Chats/ChatsContainer";
import './Dialogs.scss';
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = () => {


    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(undefined);
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }

    const size = useWindowSize()
    
    return (
        <div className="dialogs">
            <Route exact={size < 700 ? true : false} path="/" render={() => <ChatsContainer />} />
            <Route path="/:dialogId" render={() => <MessagesContainer />} />
            <Redirect from="*" to="/" />
        </div>)
}
export default Dialogs;