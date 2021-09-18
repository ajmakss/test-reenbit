import React from "react";
import 'Preloader.scss';
import preloader from '../../../img/preloader.svg'

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} alt="avatar icon" />
        </div>
    )
}
export default Preloader;