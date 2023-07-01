import React from 'react';
import style from './href.module.css';
import BlockHref from "./blockHref/blockHref";

const Href = () => {
    let info1 = ['Единая упрощенная налоговая декларация', 'Заявление об освобождении от уплаты страховых взносов', 'Информационное письмо из ИФНС о применении упрощенной системы налогообложения'];
    let info2 = ['Регистрация в ФСС как страхователя', 'Заявление о смене свидетельства'];
    let info3 = ['Образец договора займа'];

    return (
        <div className={style.main}>
            <BlockHref title="Шаблоны документов для подачи в ИФНС" array={info1} />
            <BlockHref title="Шаблоны документов для отправки в фонды (ПФР, ФСС)" array={info2} />
            <BlockHref title="Шаблоны документов для работы" array={info3} />
        </div>
    );
};

export default Href;