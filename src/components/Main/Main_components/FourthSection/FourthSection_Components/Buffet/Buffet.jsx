import React, { useState, useEffect } from 'react';
import '../Buffet/Buffet.css';
import wine from '../../../../../../assets/img/wine.png'
import line from '../../../../../../assets/img/Line.png'

export default function Buffet() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceP2 = document.querySelector('.top_p2');
    
            if (PlaceP2) {
                const windowHeight = window.innerHeight;
                const elementTop = PlaceP2.getBoundingClientRect().top;
    
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
        <div className='stage_item2'>
            <div className="top_buf">
                <p className={`top_p2 ${showRightDecorate ? 'show' : ''}`}>13:00</p>
                <img src={wine} alt="" />
                <p className={`top_reg2 ${showRightDecorate ? 'show' : ''}`}>ФУРШЕТ</p>
            </div>
            <div className="bottom">
                <img src={line} alt="" />
            </div>
        </div>
    );
}
