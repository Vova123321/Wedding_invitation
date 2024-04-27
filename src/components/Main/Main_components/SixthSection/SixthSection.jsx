import React, {useEffect, useState} from 'react';
import '../SixthSection/SixthSection.css';
import Recomendation from './SixthSection_Components/Recomendation/Recomendation';
import PulseButton from './SixthSection_Components/PulseButton/PulseButton';


export default function SixthSection() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const DresscodeP = document.querySelector('.dresscode_p ');

            if (DresscodeP) {
                const windowHeight = window.innerHeight;
                const elementTop = DresscodeP.getBoundingClientRect().top;

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
        <section className='SixthSection'>
            <div className='dresscode'>
                <p className={`dresscode_p ${showRightDecorate ? 'show' : ''}`}>Дресс-код</p>
            </div>
            <Recomendation/>
            <br/>
            <PulseButton/>
            <br/>
        </section>
    );
}
