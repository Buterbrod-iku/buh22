import React from 'react';
import style from './servBlock.module.css';
import logo from '../../../assets/image/mini-logo.png';

const ServBlock = (props) => {
    return (
        <div className={style.block}>
            <img src={logo} alt="" width="50px" height="50px" className={style.img}/>
            <div>
                <h3 className={style.title}>{props.title}</h3>
                <ul>
                    {props.li.map((text) => <li>{text}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ServBlock;