import React from 'react';

import './Footer.css';

import Contact from './Footer_components/Contact/Contact';
import NetWork from './Footer_components/NetWork/NetWork';

import siren_footer from '../../assets/img/1684442557_polinka-top-p-siren-kartinka-na-belom-fone-pinterest-43.png';
import siren_bottom from '../../assets/img/1649817969_115-vsegda-pomnim-com-p-fioletovie-tsveti-foto-123.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer_title">
                <p>Контакты</p>
            </div>
            <div className="husband">
                <Contact name='ЖЕНИХ: ' phone='+7 918 470 77 10'/>
                <NetWork NetWorkUrlTg='https://t.me/+79184707710' NetWorkUrlWa='https://wa.me/79184707710'/>
            </div>
            <br/>
            <br/>
            <div className="wife">
                <Contact name='НЕВЕСТА: ' phone='+7 918 067 23 99'/>
                <NetWork NetWorkUrlTg='https://t.me/+79180672399' NetWorkUrlWa='https://wa.me/79180672399'/>
            </div>
            <img className='siren_footer' src={siren_footer} alt=""/>
            <div className="happy">
                <p>БУДЕМ РАДЫ ВИДЕТЬ ВАС</p>
                <p>НА НАШЕМ ПРАЗДНИКЕ!</p>
            </div>
            <div className="name_couple">
                <p>Владимир</p>
                <p>и</p>
                <p>Анастасия</p>
            </div>
            <img className='siren_bottom' src={siren_bottom} alt=""/>
        </footer>
    );
}