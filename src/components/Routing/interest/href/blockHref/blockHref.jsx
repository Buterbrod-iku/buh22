import React from 'react';
import style from './blockHref.module.css';

const BlockHref = (props) => {
    return (
        <div className={style.main}>
            <h3 className={style.title}>{props.title}</h3>
            <ul>
                {
                    props.array.map((ul) => <li className={style.li}>{ul}</li>)
                }
            </ul>
        </div>
    );
};

export default BlockHref;