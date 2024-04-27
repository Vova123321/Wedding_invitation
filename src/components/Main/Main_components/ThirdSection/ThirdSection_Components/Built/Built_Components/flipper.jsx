// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import './flipper.css';
import mapGif from '../../../../../../../assets/img/map.gif'
import FlipPhoto from '../../../../../../../assets/img/FlipPhoto.png'

const Flipper = (props) => {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceBuilt = document.querySelector('.place_built_map_a');
    
            if (PlaceBuilt) {
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
        <a href={props.url} target='_blank' className={`place_built_map_a ${showRightDecorate ? 'show' : ''}`}>
            <div className="flipper">
                <div className="front">
                    <img src={FlipPhoto} alt="" />
                </div>
                <div className="back">
                    <div className="title_href">
                        <p>Посмотреть <br />на карте</p>
                    </div>
                    <div className="img_href">
                        <img src={mapGif} alt="" />
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Flipper;
