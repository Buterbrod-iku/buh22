import React from 'react';
import style from './infoBlock.module.css';

const InfoBlock = () => {
    return (
        <div className={style.main}>
            <h2 className={style.title}>Бухгалтерские услуги удаленно по всей России</h2>
            <p className={style.text}>
                Более 15 лет — деятельность в области<br/> финансов и бухгалтерского учета.<br/>
                И делаем это на высоком, по-настоящему<br/> профессиональном уровне!<br/>
                Мы с уверенностью гарантируем вам<br/> серьезный подход к делу.<br/>
            </p>
            <b className={style.bolt}>Конкурентные преимущества бухгалтерии<br/> на аутсорсинге</b>
        </div>
    );
};

export default InfoBlock;