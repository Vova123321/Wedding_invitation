import React, { useState, useEffect } from 'react';
import '../End/End.css';
import midnight from '../../../../../../assets/img/icons8-midnight-100.png'

export default function End() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceP4 = document.querySelector('.top_p4');
    
            if (PlaceP4) {
                const windowHeight = window.innerHeight;
                const elementTop = PlaceP4.getBoundingClientRect().top;
    
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
        <div className='stage_item4'>
            <div className="top_end">
                <p className={`top_p4 ${showRightDecorate ? 'show' : ''}`}>04:00</p>
                <img src={midnight} alt="" />
                <p className={`top_reg4 ${showRightDecorate ? 'show' : ''}`}>ОКОНЧАНИЕ <br /> ВЕЧЕРА</p>
            </div>
        </div>
    );
}
