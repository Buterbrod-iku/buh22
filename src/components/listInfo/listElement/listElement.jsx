import React from 'react';
import style from './listElement.module.css';

const ListElement = (props) => {
    return (
        <div className={style.main}>
            <img src={props.ico} alt="" className={style.img} style={{width : props.check ? "80px" : "70px", height : props.check ? "80px" : "70px", marginRight : props.check ? "-10px" : "0"}}/>
            <div className={style.position}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.text}>{props.text}</p>
            </div>
        </div>
    );
};

export default ListElement;