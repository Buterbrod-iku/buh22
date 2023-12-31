import React from 'react';
import style from './zndfl.module.css';
import Card from "./card/card";
import image1 from '../../../assets/image/pexels-andrea-piacqu.jpg';
import image2 from '../../../assets/image/pexels-karolina-grab.jpg';
import image3 from '../../../assets/image/pexels-mayofi-597244.jpg';
import image4 from '../../../assets/image/pexels-pietro-jeng-3.jpg';
import image5 from '../../../assets/image/pexels-pixabay-26190.jpg';
import image6 from '../../../assets/image/pexels-tobias-bjrkli.jpg';

const Zndfl = () => {
    function componentDidMount(){
        document.title = "3НДФЛ";
    }
    componentDidMount();

    return (
        <div className={style.main}>
            <h2 className={style.title}>Заполнение и сдача декларации 3-НДФЛ онлайн</h2>
            <p className={style.text}>Каждый человек, работающий официально, платит государству налоги. Даже если вы самолично ничего не платите - за вас это делает работодатель. Ваша зарплата на самом деле на 13% выше, чем вы получаете, а эти 13% называют налоговым вычетом. Он не просто обеспечивает вам пенсию, но и может помочь сэкономить на лечении, обучении или при покупке недвижимости. В некоторых случаях вы можете вернуть часть потраченной суммы, для чего необходимо правильно заполнить и подать декларацию 3-НДФЛ.</p>
            <div className={style.position}>
                <Card img={image6} title="Налоговый вычет при покупки квартиры" text="Вы приобрели недвижимость - квартиру, дом, комнату, земельный участок с домом? Вы можете вернуть до 260 000 рублей с суммы уплаченной за вашу недвижимость, а также вернуть до 390 000 рублей с уплаченных процентов по ипотеке"/>
                <Card img={image5} title="Налоговый вычет за обучение" text="Вы заплатили за своё обучение, за своих детей, братьев или сестер? Вы имеете право, получить 13% от суммы затраченной вами на обучение"/>
                <Card img={image4} title="Налоговый вычет за лечение" text="Вы оплатили свое лечение, лечение своих родственников (детей, мужа или родителей)? Или заплатили за медикаменты? Вы можете вернуть 13% от суммы затраченной вами на лечение"/>
                <Card img={image2} title="Налоговый вычет при продажи недвижимости, автомобиля" text="При продаже имущества (квартира, дом, дача, гараж, автомобиль). При получении дополнительного дохода(сдача имущества в аренду, получение выигрышей). Вы обязаны подать декларацию до 30 апреля следующего года."/>
                <Card img={image1} title="Налоговый вычет по страхованию жизни" text="При оплате страховых взносов по договору добровольного страхования жизни, заключенному на срок не менее 5 лет, вы можете получить налоговый вычет, проще говоря, вернуть себе часть затраченных денег на страхование жизни."/>
                <Card img={image3} title="Налоговый вычет по взносам на ИИС" text="Максимальный размер вычета до 400 000 рублей. Можно вернуть до 52 000 рублей в год. Срок действия договора может быть не менее трех лет, в течении этого периода запрещено снимать деньги со счета."/>
            </div>
        </div>
    );
};

export default Zndfl;