import React from 'react';
import Timer from "./Timer/Timer.jsx";
import '../SeventhSection/SeventhSecton.css';

const SeventhSection = () => {
    return (
        <section className='SeventhSection'>
            <div className="timer_title">
                <p>12 АПРЕЛЯ 2024</p>
                <p>ДО СВАДЬБЫ ОСТАЛОСЬ</p>
            </div>
            <Timer/>
        </section>
    );
};

export default SeventhSection;