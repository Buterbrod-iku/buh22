import React from 'react';
import style from './servBlock.module.css';
import logo from '../../../assets/image/mini-logo.png';
import {NavLink} from "react-router-dom";

const ServBlock = (props) => {
    const handleClickScrollUp = () => {
        const element = document.getElementById('app');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={style.block}>
            <img src={logo} alt="" width="50px" height="50px" className={style.img}/>
            <div>
                <NavLink to={props.to} className={style.NavLink} onClick={handleClickScrollUp}><h3 className={style.title}>{props.title}</h3></NavLink>
                <ul>
                    {props.li.map((text) => <li>{text}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ServBlock;