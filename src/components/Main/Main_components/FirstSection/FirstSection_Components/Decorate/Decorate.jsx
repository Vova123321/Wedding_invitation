import React, {useEffect, useState} from 'react';
import decorateSiren from '../../../../../../assets/img/decorate_siren.png'
import './Decorate.css'

export default function Deсorate() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 300; // Порог прокрутки

            const LeftDecorate = document.querySelector('.left_decorate');


            if (LeftDecorate) {
                const p1_pos = LeftDecorate.offsetTop;

                if (scrollPosition > p1_pos + scrollThreshold - windowHeight) {
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
        <div>
            <div className={`left_decorate ${showRightDecorate ? 'show' : ''}`}>
                <img src={decorateSiren} alt="" />
            </div>
            <div className={`right_decorate ${showRightDecorate ? 'show' : ''}`}>
            <img src={decorateSiren} alt="" />
        </div>

        </div>
    );
}
