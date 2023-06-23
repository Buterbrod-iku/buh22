import React from 'react';
import style from './table.module.css';

const Table = (props) => {
    return (
        <div className={style.main}>
            <p className={style.text}>{props.title}</p>
            <table>
                <tr>
                    <td className={style.mainText}>Количество операций</td>
                    <td className={style.mainText}>Стоимость</td>
                </tr>
                <tr>
                    <td>от 1 до 25 (в штате до 1 человек)</td>
                    <td>{props.price1 + " руб/мес"}</td>
                </tr>
                <tr>
                    <td className={style.blue}>от 26 до 50 (в штате до 3 человек)</td>
                    <td className={style.blue}>{props.price2 + " руб/мес"}</td>
                </tr>
                <tr>
                    <td>от 51 до 100 (в штате до 3 человек)</td>
                    <td>{props.price3 + " руб/мес"}</td>
                </tr>
                <tr>
                    <td className={style.blue}>от 101 до 150 (в штате до 3 человек)</td>
                    <td className={style.blue}>{props.price4 + " руб/мес"}</td>
                </tr>
                <tr>
                    <td>от 151 до 200 (в штате до 5 человек)</td>
                    <td>{props.price5 + " руб/мес"}</td>
                </tr>
                <tr>
                    <td className={style.blue}>Свыше 201</td>
                    <td className={style.blue}>По договоренности</td>
                </tr>
            </table>
        </div>
    );
};

export default Table;