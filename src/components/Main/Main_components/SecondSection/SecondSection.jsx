import React, {useEffect, useState} from 'react';
import '../SecondSection/SecondSection.css';
import DesignerHeart from '../../../../assets/img/designer_heaer.png'
import DesignerSiren from '../../../../assets/img/disigner_siren.png'
import Calendar from './SecondSection_Components/Calendar/Calendar';

export default function SecondSection() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 300; // Порог прокрутки

            const p1 = document.querySelector('.p1');


            if (p1) {
                const p1_pos = p1.offsetTop;

                if (scrollPosition > p1_pos + scrollThreshold - windowHeight) {
                    setShowRightDecorate(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Здесь нет зависимости, так как нужно выполнить только один раз при загрузке страницы

    return (
        <section className='SecondSection'>
            <img className='designerSiren' src={DesignerSiren} alt="" />
            <img className='designerSiren2' src={DesignerSiren} alt="" />
            <div className="main_title">
                <p className={`p1 ${showRightDecorate ? 'show' : ''}`}>Дорогие родные <br /> и друзья!</p>
            </div>
            <div className="subtitle">
                <p className={`p1 ${showRightDecorate ? 'show' : ''}`}>ПРИГЛАШАЕМ РАЗДЕЛИТЬ</p>
                <p className={`p2 ${showRightDecorate ? 'show' : ''}`}>С НАМИ РАДОСТЬ ОСОБЕННОГО</p>
                <p className={`p3 ${showRightDecorate ? 'show' : ''}`}>ДЛЯ НАС СОБЫТИЯ И СТАТЬ </p>
                <p className={`p4 ${showRightDecorate ? 'show' : ''}`}>СВИДЕТЕЛЯМИ НАЧАЛА НАШЕЙ</p> 
                <p className={`p5 ${showRightDecorate ? 'show' : ''}`}>СЕМЕЙНОЙ ЖИЗНИ!</p>
                <p className={`p6 ${showRightDecorate ? 'show' : ''}`}>ЖДЁМ ВАС</p>
            </div>
            <div className="waitU">
                <img src={DesignerHeart} alt="" />
            </div>
            <Calendar>
            </Calendar>
        </section>
    );
}
