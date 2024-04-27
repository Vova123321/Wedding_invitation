import React, {useEffect, useState} from 'react';
import '../ThirdSection/ThirdSection.css';
import Built from './ThirdSection_Components/Built/Built';
import Party from './ThirdSection_Components/Party/Party';

export default function ThirdSection() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PlaceP = document.querySelector('.place_p');
    
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
        <section className='ThirdSection'>
            <div className="place">
                <p className={`place_p ${showRightDecorate ? 'show' : ''}`}>Место <br /> проведения</p>
            </div>
            <Built/>
            <Party/>
        </section>
    );
}
