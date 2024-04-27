// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import '../Party/Party.css';
import Flipper from '../Built/Built_Components/flipper';

export default function Party() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceParty = document.querySelector('.place_party_title_p');
    
            if (PlaceParty) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const elementTop = PlaceParty.getBoundingClientRect().top;
    
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
        <div className="place_party">
            <div className="place_party_title">
                <p className={`place_party_title_p ${showRightDecorate ? 'show' : ''}`}>ТОРЖЕСТВО</p>
                <br />
                <p className={`place_party_title_p2 ${showRightDecorate ? 'show' : ''}`}>ПОМЕСТЬЕ-ПАРК <br />ЛЕРМОНТОВА УЛ.,КРАСНОДАР</p>
            </div>
            <Flipper url='https://yandex.ru/maps/geo/4955035056/?ll=115.381615%2C-8.455998&z=12.78'/>
        </div>
    );
}