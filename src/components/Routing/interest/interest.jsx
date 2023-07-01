import React from 'react';
import style from './interest.module.css';
import TextBlock from "./textBlock/textBlock";
import image1 from '../../../assets/ico/Layer_6.svg';
import image2 from '../../../assets/ico/time-svgrepo-com.svg';
import image3 from '../../../assets/ico/25fn_mobilebank.svg';
import image4 from '../../../assets/ico/25fn_rouble.svg';
import image5 from '../../../assets/ico/documents.svg';
import image6 from '../../../assets/ico/25fn_signature.svg';
import image7 from '../../../assets/ico/Tilda_Icons_32_profession_accountant.svg';
import GreenButton from "../../UI_Kit/button/greenButton";
import Href from "./href/href";

const Interest = () => {
    function componentDidMount(){
        document.title = "Полезные сервисы";
    }
    componentDidMount();

    const array = ["Форма Р21001: Заявление о госрегистрации физлица в качестве ИП.", "Форма Р24001: Заявление о внесении изменений в сведения об ИП, содержащиеся в ЕГРИП.", "Форма Р26001: Заявление о госрегистрации прекращения физлицом деятельности в качестве ИП."];
    const a = [];

    return (
        <div className={style.main}>
            <h2 className={style.title}>Бесплатные полезные сервисы для <br/> предпринимателей</h2>
            <p className={style.text}>В этом разделе я сделала подборку для <br/> предпринимателей по интернет-сервисам, <br/> которые могут пригодиться в работе. <br/>
                Речь пойдет о бесплатных общедоступных <br/> ресурсах.</p>
            <div className={style.position}>
                <TextBlock img={image1} href="Регистрация ИП" src="https://service.nalog.ru/gosreg/#ip" text="Сервис позволяет заполнить следующие виды заявлений с возможностью представления в регистрирующий орган (лично или в электронном виде):" li={array}/>
                <TextBlock img={image2} href="Выбор подходящего режима налогообложения" src="https://www.nalog.gov.ru/rn77/service/mp/" text="Этот калькулятор от ФНС поможет определиться с выбором режима налогообложения." li={a}/>
                <TextBlock img={image3} href="Личный кабинет ИП" src="https://lkip2.nalog.ru/lk#/login" text="В ЛК легко зарегистрироваться, можно зайти туда по учетной записи с портала госуслуг.
                В «Личном кабинете» можно посмотреть задолженности и переплаты, оплатить налог, заказать сверку, провести зачет, узнать систему налогообложения, получить сведения об онлайн-кассах, зарегистрированных на ИП." li={a}/>
                <TextBlock img={image6} href="Прозрачный бизнес" src="https://pb.nalog.ru/index.html" text="Этот сервис позволяет получить комплексную информацию о налогоплательщике. Он полезен, в том числе, для целей проверки контрагентов при проявлении должной осмотрительности.
                В этом сервисе можно получить свою выписку из ЕГРИП и выписки из ЕГРИП/ЕГРЮЛ на контрагентов." li={a}/>
                <TextBlock img={image4} href="Информирование о приостановлениях по расчетному счету" src="https://service.nalog.ru/bi.do" text="Этот сервис позволяет узнать о действующих решениях о приостановлении операций по счету ИП или по счетам контрагентов." li={array}/>
                <TextBlock img={image7} href="Уплата налогов" src="https://service.nalog.ru/payment/#ip" text="Сервис поможет заполнить платежный документ на перечисление налогов, страховых взносов." li={a}/>
                <TextBlock check={true} img={image3} title="Сервисы от ПФР" href="Личный кабинет страхователя" src="https://es.pfrf.ru/#services-u" text="В личном кабинете ПФР можно сдать СЗВ-ТД и СЗВ-М на сотрудников (для ИП-работодателей), запросить сведения о трудовой деятельности работника, проверить СНИЛС.
                Авторизоваться в сервисе можно через портал госуслуг. Для сдачи отчетность необходима электронная подпись.
                Однако сформировать или загрузить проект отчетности в ПФР можно без авторизации и электронной подписи." li={a}/>
                <TextBlock check={true} img={image5} title="Сервисы от ФСС" href="Портал ФСС" src="http://portal.fss.ru/fss/sicklist/preg-guest" text="Сервис поможет составить и проверить 4-ФСС, рассчитать пособие по больничному листу, по беременности и родам на сотрудников.
                Причем расчет больничного можно произвести и для случая заболевания или беременности индивидуального предпринимателя лично, если он состоит в добровольных правоотношениях с ФСС.
                Через личный кабинет ФСС можно работать с электронными больничными, которые представляют сотрудники ИП." li={a}/>
            </div>
            <GreenButton text="Нужна помощь" padding="25px 80px"/>
            <Href />
        </div>
    );
};

export default Interest;