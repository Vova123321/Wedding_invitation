import React, { useState, useEffect } from 'react';
import '../Start/Start.css';
import meal from '../../../../../../assets/img/icons8-meal-100.png'
import line from '../../../../../../assets/img/Line.png'

export default function Start() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceP3 = document.querySelector('.top_p3');
    
            if (PlaceP3) {
                const windowHeight = window.innerHeight;
                const elementTop = PlaceP3.getBoundingClientRect().top;
    
                if (elementTop < windowHeight) {
                    setShowRightDecorate(true);
                } 
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='stage_item3'>
            <div className="top_start">
                <p className={`top_p3 ${showRightDecorate ? 'show' : ''}`}>16:00</p>
                <img src={meal} alt="" />
                <p className={`top_reg3 ${showRightDecorate ? 'show' : ''}`}>НАЧАЛО <br /> БАНКЕТА</p>
            </div>
            <div className="bottom">
                <img src={line} alt="" />
            </div>
        </div>
    );
}
