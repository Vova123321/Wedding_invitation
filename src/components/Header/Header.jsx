import './Header.css';
import siren from '../../assets/img/siren.png';
import sirenRight from '../../assets/img/siren_right.png';
import React, {useEffect, useState} from 'react';

export default function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0); // Состояние последней позиции прокрутки
    const [headerStyle, setHeaderStyle] = useState({}); // Стили для хедера
    const [leftStyle, setLeftStyle] = useState({}); // Стили для левой части хедера
    const [rightStyle, setRightStyle] = useState({}); // Стили для правой части хедера
    const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Флаг видимости хедера

    useEffect(() => {
        function handleScroll() {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isVisible = currentScrollTop === 0;

            setHeaderStyle({
                height: '150px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                fontSize: '50px',
                transition: 'transform 1.2s ease',
                transform: isVisible ? 'translateY(20%)' : 'translateY(-300%)'
            });

            setLeftStyle({
                position: 'absolute',
                top: 0,
                left: 0,
                transform: isVisible ? 'translateY(0%)' : 'translateY(-300%)',
                transition: 'transform 1.2s ease',
            });

            setRightStyle({
                position: 'absolute',
                right: 0,
                top: 0,
                transform: isVisible ? 'translateY(0%)' : 'translateY(-300%)',
                transition: 'transform 1.2s ease',
            });

            setLastScrollTop(currentScrollTop);

            // Проверяем, если пользователь прокрутил страницу достаточно далеко, чтобы хедер был невидим
            if (currentScrollTop > 500) {
                setIsHeaderVisible(false); // Устанавливаем флаг видимости хедера в false
            } else {
                setIsHeaderVisible(true); // Если пользователь вернулся обратно к хедеру, устанавливаем флаг видимости хедера в true
                window.addEventListener('scroll', handleScroll); // Перезапускаем обработчик прокрутки
            }
        }

        handleScroll(); // Вызываем функцию при монтировании компонента

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            {isHeaderVisible && (
                <header className='header'>
                    <div style={leftStyle} >
                        <img className='header__left-img' src={siren} alt="сирень" />
                    </div>
                    <div style={headerStyle}>
                        <h1 className='header_title'>THE WEDDING</h1>
                    </div>
                    <div style={rightStyle}>
                        <img className='header__right-img' src={sirenRight} alt="сирень" />
                    </div>
                </header>
            )}
        </>
    );
}