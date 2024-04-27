import React, { useState, useEffect } from 'react';
import '../Recomendation/Recomendation.css';

export default function Recomendation() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const SpecificLeftP = document.querySelector('.specific_item_p_left2');
    
            if (SpecificLeftP) {
                const windowHeight = window.innerHeight;
                const elementTop = SpecificLeftP.getBoundingClientRect().top;
    
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
        <div className="recomendation">
            <p className={`specific_item_p_left2 ${showRightDecorate ? 'show' : ''}`}>НАМ БУДЕТ ОСОБЕННО</p>
            <p className={`specific_item_p_right2 ${showRightDecorate ? 'show' : ''}`}>ПРИЯТНО ВИДЕТЬ ВАС В</p>
            <p className={`specific_item_p_left2 ${showRightDecorate ? 'show' : ''}`}>НАРЯДАХ ЦВЕТОВОЙ ГАММЫ</p>
            <p className={`specific_item_p_right2 ${showRightDecorate ? 'show' : ''}`}>НАШЕЙ СВАДЬБЫ</p>
        </div>
    );
}
