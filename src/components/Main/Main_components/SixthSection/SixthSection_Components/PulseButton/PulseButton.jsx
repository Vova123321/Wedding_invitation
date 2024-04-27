// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import '../PulseButton/PulseButton.css';

export default function PulseButton() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const PulseBtn = document.querySelector('.pulse1');
    
            if (PulseBtn) {
                const windowHeight = window.innerHeight;
                const elementTop = PulseBtn.getBoundingClientRect().top;
    
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
        <div className="dresscode_btn">
            <div className={`top_btn ${showRightDecorate ? 'show' : ''}`}>
                <button className='pulse pulse1'></button>
                <button className='pulse pulse2'></button>
                <button className='pulse pulse3'></button>
                <button className='pulse pulse4'></button>
            </div>
            <div className={`bottom_btn ${showRightDecorate ? 'show' : ''}`}>
                <button className='pulse pulse5'></button>
                <button className='pulse pulse6'></button>
                <button className='pulse pulse7'></button>
                <button className='pulse pulse8'></button>
            </div>
        </div>
    );
}
