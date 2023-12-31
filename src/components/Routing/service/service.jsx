import React, {useState} from 'react';
import style from './service.module.css';

const Service = () => {
    function componentDidMount(){
        document.title = "Услуги";
    }
    componentDidMount();

    let [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <div className={style.main}>
            <h2 className={style.title}>БУХГАЛТЕРСКИЙ УЧЕТ ДЛЯ ИП И ООО</h2>
            <div className={style.position}>
                {
                    data.map((item, i) => (
                        <div style={{cursor: "pointer"}}>
                            <div className={style.close} onClick={() => toggle(i)}>
                                <h3>{item.title}</h3>
                                <div>{selected === i ? <p style={{transform: "rotate(45deg)", marginLeft: "5px"}}>+</p> : <p style={{transform: "rotate(0)"}}>+</p> }</div>
                            </div>
                            <div className={selected === i ? style.open : style.hidden}>
                                {item.text.split('\n').map(i => {
                                    return <p className={style.first}>{i}</p>
                                })}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

let data = [
    {
        title: 'Постановка бухгалтерского и налогового учета с «нуля»',
        text: 'ЧТО ПРЕДУСМАТРИВАЕТ ОРГАНИЗАЦИЯ БУХГАЛТЕРСКОГО И НАЛОГОВОГО УЧЁТА:\n' +
            '— экспертиза бухгалтерского учёта;\n' +
            '— изучение специфики деятельности компании;\n' +
            '— изучение организационной структуры и документооборота в компании;\n' +
            '— разработка бухгалтерского учёта и системы налогообложения с «нуля»;\n' +
            '— разработка документации, создание форм первичной документации;\n' +
            '— разработка документооборота;\n' +
            '— разработка и утверждение учетной политики компании;\n' +
            '— разработка и внедрение кадровой политики в компании;\n' +
            '— внедрение и автоматизация бухгалтерского и налогового учета в компании;\n' +
            '— инструктаж и обучение сотрудников компании.\n' +
            'Организация бухгалтерского и налогового учёта может осуществляться полностью с нуля, либо по отдельным участкам.'
    },
    {
        title: 'Бухгалтерское обслуживание и сопровождение',
        text: 'МЫ ПРЕДЛАГАЕМ ВАМ СОСРЕДОТОЧИТЬСЯ НА ВАШЕМ БИЗНЕСЕ, А СЛЕДУЮЩИЕ БУХГАЛТЕРСКИЕ ЗАБОТЫ ВОЗЬМЕМ НА СЕБЯ:\n' +
            '— Ведение и учёт первичных документов по всем хозяйственным операциям компании\n' +
            '— Формирование и составление книг покупок и продаж\n' +
            '— Составление и сдача налоговых деклараций, бухгалтерской отчётности и прочей отчётности во внебюджетные фонды\n' +
            '— Расчет и начисление износа основных средств\n' +
            '— Анализ ведения бухгалтерского учёта в сфере расчётов с кредиторами и дебиторами\n' +
            '— Проведение расчётов с сотрудниками по оплате труда\n' +
            '— Ведение налогового учёта с оптимизацией налогооблагаемой базы\n' +
            '— Представительство в налоговых органах и участие в налоговых проверках\n' +
            '— Разработка учётной политики компании\n' +
            '— Организация работы бухгалтерии компании\n' +
            '— Введение данных в бухгалтерскую программу, их обработка и систематизация\n' +
            '— Консультации и информационная поддержка каждого клиента\n' +
            'Заключив с нами договор на бухгалтерское обслуживание и сопровождение, компания имеет право отнести стоимость бухгалтерского обслуживания на расходы и тем самым снизить налогооблагаемый доход. Вы платите только за объем выполненной работы, а не исполнителю. Бухгалтерское обслуживание позволяет не только получить качественную услугу, но и сэкономить средства компании.'
    },
    {
        title: 'Восстановление бухгалтерского учета',
        text: 'ОСНОВНЫЕ ЭТАПЫ ПО ВОССТАНОВЛЕНИЮ БУХГАЛТЕРСКОГО И НАЛОГОВОГО УЧЁТА:\n' +
            '\n' +
            '— Проведение аудиторской проверки\n' +
            '— Проведение налоговой оптимизации\n' +
            '— Проведение проверки наличия каждого первичного документа, правильность его заполнения и соответствия его отражения в налоговом и бухгалтерском учёте\n' +
            '— Проведение сверок с контролирующими органами\n' +
            '— Проведение сверок с контрагентами\n' +
            '— Введение недостающих документов в программу учёта\n' +
            '— Корректировка итогов по прошлым отчётным периодам\n' +
            '— Формирование уточненных отчётов и их сдача в контролирующие органы'
    },
    {
        title: 'Подготовка первичной документации',
        text: 'ПОДГОТОВКА ПЕРВИЧНОЙ ДОКУМЕНТАЦИИ\n' +
            '\n' +
            '— Формируем платежные поручения;\n' +
            '— банковские выписки;\n' +
            '— счета на оплату;\n' +
            '— счета-фактуры, акты и тд.\n' +
            '— акты сверок с поставщиками, покупателями'
    },
    {
        title: 'Оптимизация налогообложения',
        text: 'ОПТИМИЗАЦИЯ НАЛОГООБЛОЖЕНИЯ\n' +
            '\n' +
            'Оптимизация налогообложения — важная частью налогового планирования. Главная цель оптимизации – увеличение финансового результата после налогообложения. Мероприятия, направленные на снижение налоговой нагрузки, позволяют избежать налоговых ”переплат” за период времени, устранить основания для возможных ”доначислений”, избежать неблагоприятных финансовых последствий игнорирования налогового фактора.\n' +
            'Оптимизировать налогообложение можно законными методами. Согласно действующему законодательству осуществлять хозяйственную деятельность можно в различных правовых формах, которые предполагают разный порядок системы налогообложения. В некоторых случаях право выбора режима уплаты налогов предоставляется самому налогоплательщику.\n' +
            'САМЫМИ ПОПУЛЯРНЫМИ ЗАКОННЫМИ СТРАТЕГИЯМИ ОПТИМИЗАЦИИ ЯВЛЯЮТСЯ СЕГОДНЯ СЛЕДУЮЩИЕ:\n' +
            '— минимальные налоговые отчисления в течение налогового периода;\n' +
            '— равномерное формирование налоговых обязательств;\n' +
            '— управление финансовыми потоками с целью обеспечения запланированного дохода;\n' +
            '— максимальный финансовый результат при минимальной уплате налоговых сборов.\n' +
            'МЫ ПОДБЕРЕМ ДЛЯ ВАС ОПТИМАЛЬНЫЙ РЕЖИМ НАЛОГООБЛОЖЕНИЯ И ПОМОЖЕМ ЗАКОННО МИНИМИЗИРОВАТЬ НАЛОГОВЫЕ ОТЧИСЛЕНИЯ'
    },
    {
        title: 'Подготовка и сдача отчетности в налоговые органы и фонды',
        text: 'ПОДГОТОВКА И СДАЧА ОТЧЕТНОСТИ В НАЛОГОВЫЕ ОРГАНЫ И ФОНДЫ\n' +
            '\n' +
            'Бухгалтерская отчетность – это унифицированная система данных о финансовом состоянии предприятия или индивидуального предпринимателя, свидетельствующая о результатах деятельности за очередной отчетный период. Она составляется на основе бухгалтерской документации по установленным и утвержденным государством формам.\n' +
            'Все субъекты хозяйствования, независимо от форм собственности, количества работников, независимо от того, ведется ли хозяйственная деятельности, должны сдавать отчетность в контролирующие органы. Сдача отчетности осуществляется в сроки и согласно формам, закрепленным в законодательных актах. Формы при этом должны быть актуальны, а сроки соблюдены с точностью до дня. За несвоевременную подачу и наличие ошибок контролирующие органы вправе применить штрафные санкции.\n' +
            'Именно поэтому сдача бухгалтерской отчетности, отчетов в контролирующие органы должна осуществляться компетентным и ответственным лицом.\n' +
            'Мы готовы предложить Вам следующие услуги по подготовке и сдаче отчетности как в рамках договора на ведение бухгалтерского и налогового учета, так и на основании разового договора:\n' +
            '— заполнение форм и бланков налоговой и бухгалтерской отчетности;\n' +
            '— составление и сдача бухгалтерской отчетности при общей системе налогообложения (ОСНО);\n' +
            '— составление и сдача отчетности при упрощенной системе налогообложения (УСН, ПСН);\n' +
            '— составление бухгалтерского баланса на основании регистров бухучета;\n' +
            '— сдача бухгалтерской отчетности в ИФНС и внебюджетные фонды;\n' +
            '— составление и сдача персонифицированного отчета;\n' +
            '— составление итоговой годовой отчетности по подоходному налогу физических лиц (2-НДФЛ).\n' +
            'Наши специалисты подготовят для Вас как весь пакет отчетности, так и отдельные отчеты, как квартальные, так и годовые.'
    },
    {
        title: 'Нулевая отчетность',
        text: 'НУЛЕВАЯ ОТЧЁТНОСТЬ\n' +
            '\n' +
            'Если  за отдельно взятый промежуток времени,  компания не осуществляла хозяйственную деятельность, сдается Нулевая отчетность.\n' +
            '\n' +
            'Так же как и любая другая отчетность нулевая,  представляет собой важную документацию, к оформлению и подаче которой нужно отнестись со всей серьезностью.'
    },
    {
        title: 'Расчет заработной платы',
        text: 'МЫ РЕШИМ ВАШУ ПРОБЛЕМУ С НАЧИСЛЕНИЕМ\n' +
            '\n' +
            ' ЗАРАБОТНОЙ ПЛАТЫ. ОБРАТИВШИСЬ К НАМ, ВЫ БУДЕТЕ ИМЕТЬ:\n' +
            '\n' +
            '— начисление зарплаты для сотрудников, с учетом всех видов начислений, расчет больничных, декретных, отпускных, командировочных и других компенсационных выплат;\n' +
            '— ведение бухгалтерского и налогового учета, учета доходов физлиц;\n' +
            '— уплата налогов c заработной платы и страховых взносов с фонда оплаты труда (ФОТ);\n' +
            '— создание и сдача персонифицированного учета;\n' +
            '— подготовка и сдача ежемесячного, ежеквартального и годового отчета в Фонды по начислениям взносов с ФОТ;\n' +
            '— регулярные сверки по платежам с бюджетом;\n' +
            '— формирование расчетных документов: расчетная ведомость, расчеты среднего заработка.\n'
    },
    {
        title: 'Дополнительные услуги',
        text: 'ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ\n' +
            '\n' +
            '— подготовка других документов по требованию ИФНС;\n' +
            '— подготовка документов по блокировке банка 115-ФЗ;\n' +
            '— сопровождение Камеральной проверки и расчетов с бюджетом;\n' +
            '— составление учетной политики;'
    },
    {
        title: 'Консультационные услуги',
        text: 'КОНСУЛЬТАЦИИ \n' +
            '\n' +
            'Наши консультационные услуги бухгалтера очень удобны, так как они затрагивают большую область вопросов бухгалтерии от первичной документации до сдачи готовой бухгалтерской отчетности в органы статистики. К нам вы можете обратиться совершенно по любому вопросу и мы окажем вам эффективную помощь.'
    }
]

export default Service;