import React from 'react';
import style from './price.module.css';
import Table from "./table/table";

const Price = () => {
    return (
        <div className={style.main}>
            <h2 className={style.title}>ПРАЙС-ЛИСТ</h2>
            <p className={style.text}>Скачать прайс- лист на бухгалтерские услуги</p>
            <Table title={["ООО на ОСНО", <br/>, <i>Бухгалтерское сопровождение</i>]} price1="7 000" price2="10 000" price3="12 000" price4="15 000" price5="20 000"/>
            <Table title={["ООО на УСН 15%", <br/>,  <i>Бухгалтерское сопровождение</i>]} price1="5 000" price2="7 000" price3="10 000" price4="15 000" price5="20 000"/>
            <Table title={["ООО на УСН 6%", <br/>,  <i>Бухгалтерское сопровождение</i>]} price1="5 000" price2="7 000" price3="10 000" price4="15 000" price5="20 000"/>
            <Table title={["ИП на УСН 15%", <br/>,  <i>Бухгалтерское сопровождение</i>]} price1="5 000" price2="7 000" price3="10 000" price4="15 000" price5="20 000"/>
        </div>
    );
};

export default Price;