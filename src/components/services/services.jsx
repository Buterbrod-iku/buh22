import React, {useState} from 'react';
import style from './services.module.css';
import ServBlock from "./servBlock/servBlock";
import GreenButton from "../UI_Kit/button/greenButton";

const Services = () => {

    const block1 = ["Комплексное бухгалтерское сопровождение;", "Подготовка и сдача отчетности (УСН, ОСНО);", "Кадровый учет, начисление заработной платы;", "Постановка и восстановление бухгалтерского учета;", "Консультации по оптимизации налогов"];
    const block2 = ["Регистрация/Ликвидация ООО и ИП;", "Внесение изменений в ЕГРЮЛ/ЕГРИП;", "Разработка договоров и локальных нормативно-правовых актов;", "Помощь в открытии счета;", "Помощь в разблокировке счета по 115-ФЗ"];
    const block3 = ["Подготовка и сдача налоговой отчетности по валютным счетам;", "Декларации 3-НДФЛ по возврату подоходного налога", "Справки СРО для госслужащих"];
    const block4 = ["Подготовка ответов по требованию (пояснений) ИФНС", "Ответы в страховые фонды", "Консультации по подбору (смене) системы налогообложения"];

    return (
        <div className={style.main}>
            <h2 className={style.title}>НАШИ УСЛУГИ</h2>
            <div className={style.position}>
                <ServBlock title="Бухгалтерский учет для ООО и ИП" li={block1} />
                <ServBlock title="Юридическая поддержка" li={block2} />
                <ServBlock title="Бухгалтерские услуги для физических лиц" li={block3} />
                <ServBlock title="Консультации. Ответы на постановление и требования от ИФНС" li={block4} />
            </div>
            <div className={style.positionButton}>
                <GreenButton text="Заказать услугу" padding="25px 80px"/>
            </div>
        </div>
    );
};

export default Services;