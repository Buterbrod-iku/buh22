import React from 'react';
import style from "./greenButton.module.css";

const GreenButton = (props) => {
    return (
        <button className={style.button} style={{padding : props.padding}}>
            {props.text}
        </button>
    );
};

export default GreenButton;