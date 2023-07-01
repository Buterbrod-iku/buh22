import React from 'react';
import style from './application.module.css';
import GreenButton from "../../UI_Kit/button/greenButton";

const Application = () => {
    return (
        <div className={style.main}>
            <h2 className={style.title}>АНКЕТА ПРЕДВАРИТЕЛЬНОГО РАСЧЕТА СТОИМОСТИ ОБСЛУЖИВАНИЯ КЛИЕНТА</h2>
            <div className={style.block}>
                <label className={style.label}>Ваше имя</label>
                <input type="name" className={style.input}/>
            </div>
            <div className={style.block}>
                <label className={style.label}>Наименование компании</label>
                <input type="text" className={style.input}/>
            </div>

            <div className={style.block} style={{width: "40vw", marginBottom: "30px"}}>
                <label className={style.label}>Система налогообложения</label>
                <div style={{display: "flex", alignItems: "center", margin: "10px 0"}}>
                    <input type="checkbox" className={style.inputChecbox}/>
                    <p className={style.inpText}>ОСНО</p>
                </div>
                <div style={{display: "flex", alignItems: "center", margin: "10px 0"}}>
                    <input type="checkbox" className={style.inputChecbox}/>
                    <p className={style.inpText}>УСН - ИП, ООО доходы</p>
                </div>
                <div style={{display: "flex", alignItems: "center", margin: "10px 0"}}>
                    <input type="checkbox" className={style.inputChecbox}/>
                    <p className={style.inpText}>УСН - ИП, ООО доходы минус расходы</p>
                </div>
                <div style={{display: "flex", alignItems: "center", margin: "10px 0"}}>
                    <input type="checkbox" className={style.inputChecbox}/>
                    <p className={style.inpText}>ИП Патент</p>
                </div>
                <div style={{display: "flex", alignItems: "center", margin: "10px 0"}}>
                    <input type="checkbox" className={style.inputChecbox}/>
                    <p className={style.inpText}>Другое</p>
                </div>
            </div>

            <div className={style.block}>
                <label className={style.label}>Ваш номер телефона</label>
                <input className={style.input} type="tel" id="phone" name="phone"
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                       required/>
            </div>
            <div className={style.block}>
                <label className={style.label}>Ваш email</label>
                <input className={style.input} type="email" id="email"
                       pattern=".+@globex\.com" size="30"/>
            </div>
            <div className={style.block} style={{marginBottom: "5vh"}}>
                <label className={style.label}>Ваши пожелания в работе с бухгалтером</label>
                <textarea className={style.input + ' ' + style.area}/>
            </div>

            <GreenButton text="Отправить" padding="25px 80px"/>
        </div>
    );
};

export default Application;