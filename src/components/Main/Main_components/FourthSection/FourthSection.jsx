import React, {useEffect, useState} from 'react';
import '../FourthSection/FourthSection.css';
import Registration from './FourthSection_Components/Registation/Registration';
import Buffet from './FourthSection_Components/Buffet/Buffet';
import Start from './FourthSection_Components/Start/Start';
import End from './FourthSection_Components/End/End';

export default function FourthSection() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceP = document.querySelector('.title');
    
            if (PlaceP) {
                const windowHeight = window.innerHeight;
                const elementTop = PlaceP.getBoundingClientRect().top;
    
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
        <section className='FourthSection'>
            <div className="programOfTheDay">
                <p className={`title ${showRightDecorate ? 'show' : ''}`}>Программа <br /> дня</p>
            </div>
            <div className="stages">
                <Registration/>
                <Buffet/>
                <Start/>
                <End/>
            </div>
        </section>
    );
}
