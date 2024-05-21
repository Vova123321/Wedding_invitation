import React, {useEffect, useState} from 'react';
import flowerCircle from '../../../../assets/img/flower_sircle.png';
import Decorate from './FirstSection_Components/Decorate/Decorate';
import '../FirstSection/FirstSection.css';

export default function FirstSection() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 300; // Порог прокрутки

            const WifeHusbandP = document.querySelector('.wife_husband_p');


            if (WifeHusbandP) {
                const p1_pos = WifeHusbandP.offsetTop;

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
        <section className="FirstSection">
            <Decorate />
            <div className="flower_circle">
                <img src={flowerCircle} alt="" />
                <div className="wife_husband">
                    <p className={`wife_husband_p ${showRightDecorate ? 'show' : ''}`}>YAEL <br /> & <br /> HARRY</p>
                </div>
            </div>
            <div className={`date ${showRightDecorate ? 'show' : ''}`}>
                21.O8.2024
            </div>
        </section>
    );
}