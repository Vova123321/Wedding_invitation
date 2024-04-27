// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import '../Built/Built.css';
import Flipper from './Built_Components/flipper.jsx';

export default function Built() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceBuilt = document.querySelector('.place_build_title_p');
    
            if (PlaceBuilt) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const elementTop = PlaceBuilt.getBoundingClientRect().top;
    
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
        <div className="place_built">
            <div className="place_built_title">
                <p className={`place_build_title_p ${showRightDecorate ? 'show' : ''}`}>ЦЕРЕМОНИЯ БРАКОСОЧИТАНИЯ</p>
                <br />
                <p className={`place_build_title_p2 ${showRightDecorate ? 'show' : ''}`}>ОТДЕЛЬ ЗАГС МО <br />ДВОРЕЦ БРАКОСОЧИТАНИЯ № 1</p>
            </div>
            <Flipper url='https://yandex.ru/maps/?ll=115.161049%2C-8.290715&mode=poi&poi%5Bpoint%5D=115.152218%2C-8.275671&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D96600587105&z=14.94'/>
        </div>
    );
}
