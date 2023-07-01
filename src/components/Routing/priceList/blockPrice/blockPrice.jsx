import React from 'react';
import style from './blockPrice.module.css';
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
            <NavLink to="/application" className={style.NavLink} onClick={handleClickScrollUp}><button className={style.button}>Оставить заявку</button></NavLink>
        </>
    );
};

const BlockPrice = (props) => {
    return (
        <div className={style.main}>
            <div className={style.img} style={{backgroundImage: `url(${props.img})`}}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.price}>{props.price}</p>
            </div>
            <div style={{paddingBottom: "10vh"}}>
                {
                    props.array.map((element) => <div className={style.element}>{element}</div>)
                }
            </div>
            <div className={style.posBut}>
                <ButtonApl />
            </div>
        </div>
    );
};

export default BlockPrice;