import React from 'react';
import style from './okTextBlock.module.css';

const OkTextBlock = (props) => {
    return (
        <div className={style.main}>
            <div>
                <svg className={style.svg} role="presentation" fill="#2bc96a"
                     xmlns="http://www.w3.org/2000/svg" style={{width: '30px', height: '30px'}} viewBox="0 0 31.8 31.8">
                    <path
                        d="M.9 14.5C5.2 19.4 9.8 24 14.1 29c.4.5 1.3.3 1.6-.2 5.1-8.4 10.1-16.8 15-25.4.7-1.2-.5-2.1-1.3-.9C19.3 18 19 18.4 13.9 26.7c.5-.1 1.1-.1 1.6-.2-4.4-4.8-8.9-8.6-13.9-12.8-.4-.4-1.1.3-.7.8z"></path>
                </svg>
            </div>
            <p className={style.title}>{props.title}</p>
        </div>
    );
};

export default OkTextBlock;