import React from 'react';
import style from './about.module.css';
import image from '../../../assets/image/about.jpg';

const About = () => {
    function componentDidMount(){
        document.title = "Бухгалтерское бюро Олеси Якобсон";
    }
    componentDidMount();

    return (
        <div className={style.main}>
            <p className={style.nameBlock}>О КОМПАНИИ</p>
            <h2 className={style.title}>Меня зовут Олеся Якобсон, я <br/> руководитель Бухгалтерского Бюро</h2>
            <img src={image} alt="" className={style.img}/>
            <p className={style.text}>Более 15 лет веду деятельность в области финансов и бухгалтерского учета. <br/>В разных сферах деятельности. Знаю о бухгалтерском учете все!<br/>
                Наша команда бухгалтеров и юристов делает свою работу это на высоком, <br/>по-настоящему профессиональном уровне!<br/>
                Мы с уверенностью гарантируем вам серьезный подход к делу.</p>
        </div>
    );
};

export default About;