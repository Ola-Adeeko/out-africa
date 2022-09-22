import React from "react";

import './floating.css';

const FloatingDiv = ({image, txt1, txt2}) => {
    return (
        <div className="float-div">
            <div className="float-img">
                <img src={image} alt="" />
            </div>
            <div className="float-content">
                <span>{txt1}</span>
                <span>{txt2}</span>
            </div>
        </div>
    )
}

export default FloatingDiv

