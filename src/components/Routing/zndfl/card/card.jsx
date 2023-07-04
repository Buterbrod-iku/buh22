import React from 'react';
import style from './card.module.css';
import {NavLink} from "react-router-dom";

const ButtonApl = () => {
    const handleClickScrollUp = () => {
        const element = document.getElementById('app');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
            <NavLink to="/application" onClick={handleClickScrollUp}><button className={style.button}>Оставить заявку</button></NavLink>
        </>
    );
};

const Card = (props) => {
    return (
        <div className={style.main}>
            <div className={style.blockImage} style={{backgroundImage: `url(${props.img})`}}></div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.text}>{props.text}</p>
            <ButtonApl />
        </div>
    );
};

export default Card;