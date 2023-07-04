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
    if(width < 1200){
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
    } else {
        return (
            <div className={style.main}>
                <h2 className={style.title}>Наши партнеры</h2>
                <div className={style.position}>
                    <a href="https://alfabank.ru/?ysclid=lb9e6l2hn4669613275" target="_blank"><img src={alfa} alt="" className={style.img}/></a>
                    <a href="https://www.open.ru/small?ysclid=lb9e5lm0qe375544390" target="_blank"><img src={open} alt="" className={style.img}/></a>
                    <a href="https://tochka.com/?ysclid=lb9e80czhh958940713" target="_blank"><img src={dot} alt="" className={style.img}/></a>
                    <a href="https://www.sberbank.com/ru/s_m_business/open-accounts?utm_source=yandex&utm_medium=cpc&utm_campaign=open-accounts_corporate_perform_god_20220100016_context_search_autotargeting_rus_yxprrko-_-77150026&utm_content=cid-_-77150026-_-gid-_-4990066246-_-ad-_-12531415972_12531415972-_-ph_id-_-40407930402-_-src-_-none_search-_-geo-_-Барнаул_197-_-&utm_term=---autotargeting&_openstat=ZGlyZWN0LnlhbmRleC5ydTs3NzE1MDAyNjsxMjUzMTQxNTk3Mjt5YW5kZXgucnU6cHJlbWl1bQ&yclid=14827847675702411263" target="_blank"><img src={sber} alt="" className={style.img}/></a>
                    <a href="https://www.tinkoff.ru/cards/debit-cards/tinkoff-black/?utm_source=yandex&utm_medium=ctx.cpc&utm_campaign=debit.black_tb_search_ya_brand.general.conv_aon_0722_rus&utm_term=тинькофф%20банк&utm_content=pid%7C40249781171%7Cretid%7C40249781171%7Ccid%7C76796867%7Cgid%7C4983430425%7Caid%7C12498804480%7Cpostype%7Cpremium%7Cpos%7C1%7C%7Csrc%7Cnone%7Cdvc%7Cdesktop%7Cregionid%7C197&_openstat=ZGlyZWN0LnlhbmRleC5ydTs3Njc5Njg2NzsxMjQ5ODgwNDQ4MDt5YW5kZXgucnU6cHJlbWl1bQ&yclid=11419000272941219839" target="_blank"><img src={tinkoff} alt="" className={style.img}/></a>
                </div>
                <div className={style.position}>
                    <a href="https://www.psbank.ru/" target="_blank"><img src={psb} alt=""/></a>
                </div>
            </div>
        );
    }


};

export default Partner;