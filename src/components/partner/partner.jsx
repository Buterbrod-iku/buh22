import React from 'react';
import style from './partner.module.css';
import alfa from '../../assets/partner/Alfa-logo.png';
import open from '../../assets/partner/Otkrytie-logo.jpg';
import dot from '../../assets/partner/Dot-logo.jpg';
import sber from '../../assets/partner/Sber-logo.jpg';
import tinkoff from '../../assets/partner/Tinkoff-logo.png';
import psb from '../../assets/partner/PSB_logo.png';

const Partner = () => {
    let width = window.screen.width;
    if(width > 756){
        return (
            <div className={style.main}>
                <h2 className={style.title}>Наши партнеры</h2>
                <div className={style.position}>
                    <img src={alfa} alt="" className={style.img}/>
                    <img src={open} alt="" className={style.img}/>
                    <img src={dot} alt="" className={style.img}/>
                    <img src={sber} alt="" className={style.img}/>
                    <img src={tinkoff} alt="" className={style.img}/>
                    <img src={psb} alt=""/>
                </div>
            </div>
        );
    }

    return (
        <div className={style.main}>
            <h2 className={style.title}>Наши партнеры</h2>
            <div className={style.position}>
                <img src={alfa} alt="" className={style.img}/>
                <img src={open} alt="" className={style.img}/>
                <img src={dot} alt="" className={style.img}/>
                <img src={sber} alt="" className={style.img}/>
                <img src={tinkoff} alt="" className={style.img}/>
            </div>
            <div className={style.position}>
                <img src={psb} alt=""/>
            </div>
        </div>
    );
};

export default Partner;