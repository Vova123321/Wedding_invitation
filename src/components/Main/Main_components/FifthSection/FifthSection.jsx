import React, {useEffect, useState} from 'react';
import '../FifthSection/FifthSection.css';
import HeartGf from '../../../../assets/img/icons8-heart.gif'
import SpecificFirst from './FifthSection_Components/SpecificFirst/SpecificFirst';

export default function FifthSection() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const TitleSpecificP = document.querySelector('.title_specific_p');
    
            if (TitleSpecificP) {
                const windowHeight = window.innerHeight;
                const elementTop = TitleSpecificP.getBoundingClientRect().top;
    
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
        <section className='FifthSection'>
            <div className='title_specific'>
                <p className={`title_specific_p ${showRightDecorate ? 'show' : ''}`}>Детали</p>
            </div>
            <SpecificFirst/>
            <br />
            <img src={HeartGf} alt="" />
            <br />
            <SpecificFirst/>
            <br />
            <img src={HeartGf} alt="" />
            <br />
            <SpecificFirst/>
        </section>
    );
}
