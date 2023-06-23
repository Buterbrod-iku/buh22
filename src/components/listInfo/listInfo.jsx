import React from 'react';
import style from './listInfo.module.css';
import ico_1 from '../../assets/image/cowork_parking.svg';
import ico_2 from '../../assets/image/weather_last_quarter.svg';
import ico_3 from '../../assets/image/music_record.svg';
import image from '../../assets/image/second_img.jpg';
import ListElement from "./listElement/listElement";

const ListInfo = () => {
    return (
        <div className={style.main}>
            <div className={style.leftBlock}>
                <ListElement check={true} ico={ico_1} title="Снижение затрат" text="Социальные выплаты, приобретение ПО, оснащение офиса для бухгалтерии – это в прошлом. Фирма-аутсорсер имеет свою инфраструктуру и технологии, а стоимость услуг наемного бухгалтера относится к категории ваших затрат и снижает налогооблагаемую базу."/>
                <ListElement ico={ico_2} title="Качество персонала" text="Вам не нужно обучать, натаскивать и следить за новичком на испытательном сроке. Нанятый по договору аутсорсинга бухгалтер имеет должную компетенцию, четко выполняет свои задачи, проходит повышение квалификации за счет своей фирмы."/>
                <ListElement ico={ico_3} title="Доступность и ответственность" text="Фирма-аутсорсер это не карманный бухгалтер! А партнер, защитник по сути. Клиент получает целый  штат компетентных и постоянно развивающихся сотрудников."/>
            </div>
            <div className={style.rightBlock}>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default ListInfo;