import React, { useState, useEffect } from 'react';
import '../SpecificFirst/SpecificFirst.css';

export default function SpecificFirst() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const SpecificPLeft = document.querySelector('.specific_item_p_left');
    
            if (SpecificPLeft) {
                const windowHeight = window.innerHeight;
                const elementTop = SpecificPLeft.getBoundingClientRect().top;
    
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
        <div className='specific_item'>
            <p className={`specific_item_p_left ${showRightDecorate ? 'show' : ''}`}>ОБРАТИТЕ ВНИМАНИЕ,ЧТО</p>
            <p className={`specific_item_p_right ${showRightDecorate ? 'show' : ''}`}>ФОРМАТ МЕРОПРИЯТИЯ НЕ</p>
            <p className={`specific_item_p_left ${showRightDecorate ? 'show' : ''}`}>ПРЕДПОЛАГАЕТ ДЕТСКОЙ ПЛОЩАДКИ</p>
            <p className={`specific_item_p_right ${showRightDecorate ? 'show' : ''}`}>И АНИМАТОРОВ,</p>
            <p className={`specific_item_p_left ${showRightDecorate ? 'show' : ''}`}>ПОЖАЛУЙСТА,ПОЗАБОТЬТЕСЬ</p>
            <p className={`specific_item_p_right ${showRightDecorate ? 'show' : ''}`}>О ТОМ, ЧТОБЫ ПРОВЕСТИ</p>
            <p className={`specific_item_p_left ${showRightDecorate ? 'show' : ''}`}>ЭТОТ ВЕЧЕР БЕЗ ДЕТЕЙ.</p>
        </div>
    );
}
