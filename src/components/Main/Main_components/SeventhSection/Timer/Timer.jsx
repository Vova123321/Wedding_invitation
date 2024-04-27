import React, {useEffect, useState} from 'react';
import Countdown from 'react-countdown';
import './Timer.css';

const Timer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-04-12T00:00:00') - Date.now();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className='timer'>
                <div>
                    <span>{days || '0'}</span>
                    <span>Дней</span>
                </div>
                |
                <div>
                    <span>{hours || '0'}</span>
                    <span>Часов</span>
                </div>
                |
                <div>
                    <span>{minutes || '0'}</span>
                    <span>Минут</span>
                </div>
                |
                <div>
                    <span>{seconds || '0'}</span>
                    <span>Секунд</span>
                </div>
            </div>
        );
    };

    return <Countdown date={Date.now() + (timeLeft.days * 24 * 60 * 60 * 1000) + (timeLeft.hours * 60 * 60 * 1000) + (timeLeft.minutes * 60 * 1000) + (timeLeft.seconds * 1000)} renderer={renderer} />;
};

export default Timer;