import React, {useEffect, useState} from 'react';
import '../Registation/Registration.css';
import ring from '../../../../../../assets/img/wife_husband-ring.png'
import line from '../../../../../../assets/img/Line.png'

export default function Registration() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const topP1 = document.querySelector('.top_p');
    
            if (topP1) {
                const windowHeight = window.innerHeight;
                const elementTop = topP1.getBoundingClientRect().top;
    
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
        <div className='stage_item'>
            <div className="reg_top">
                <p className={`top_p ${showRightDecorate ? 'show' : ''}`}>10:00</p>
                <img className='stage_img' src={ring} alt="" />
                <p className={`top_reg ${showRightDecorate ? 'show' : ''}`}>РЕГИСТРАЦИЯ</p>
            </div>
            <div className="bottom">
                <img src={line} alt="" />
            </div>
        </div>
    );
}
