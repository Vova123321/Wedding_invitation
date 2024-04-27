import React from 'react';
import './NetWork.css';
import tg from '../../../../assets/img/telegram.png'
import Wa from '../../../../assets/img/whatsapp.png'

const NetWork = (props) => {
    return (
        <div className='network'>
            <a target='_blank' href={props.NetWorkUrlTg}><img src={tg} alt=""/></a>
            <a target='_blank' href={props.NetWorkUrlWa}><img src={Wa} alt=""/></a>
        </div>
    );
};

export default NetWork;