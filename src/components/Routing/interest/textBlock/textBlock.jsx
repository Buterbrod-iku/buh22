import React from 'react';
import style from './textBlock.module.css';

const TextBlock = (props) => {
    return (
        <div className={style.main}>
            <img src={props.img} alt="" className={style.img} style={{marginTop : props.check ? "10px" : "40px"}}/>
            <div>
                <h3 className={style.title}>{[props.title, <br/>, <a href={props.src} target="_blank">{props.href}</a>]}</h3>
                <p className={style.text}>{props.text}</p>
                <ul>
                    {props.li.map((text) => <li>{text}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default TextBlock;