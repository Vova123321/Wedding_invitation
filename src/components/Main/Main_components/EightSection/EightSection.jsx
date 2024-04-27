import React, {useEffect, useState} from 'react';
import './EightSection.css';
import Form from "./Form/Form.jsx";
import arrow from '../../../../assets/img/arrow.png'

const EightSection = () => {
    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const TitleQuestP = document.querySelector('.title_guest_p');
            const SubTitleQuestP = document.querySelector('.subtitle_guest_p');

            if (TitleQuestP) {
                const windowHeight = window.innerHeight;
                const elementTop = TitleQuestP.getBoundingClientRect().top;

                if (elementTop < windowHeight) {
                    setShowRightDecorate(true);
                }
            }

            if(SubTitleQuestP) {
                const windowHeight = window.innerHeight;
                const elementTop = SubTitleQuestP.getBoundingClientRect().top;

                if(elementTop < windowHeight) {
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
        <section className='EightSection'>
            <div className="title_guest">
                <p className={`title_guest_p ${showRightDecorate ? 'show' : ''}`}>Анкета <br/>гостя</p>
            </div>
            <div className="subtitle_guest">
                <p className={`subtitle_guest_p ${showRightDecorate ? 'show' : ''}`}>ОТВЕТЬТЕ ПОЖАЛУЙСТА </p>
                <p className={`subtitle_guest_p2 ${showRightDecorate ? 'show' : ''}`}>НА НЕСКОЛЬКО ВОПРОСОВ</p>
                <p className={`subtitle_guest_p ${showRightDecorate ? 'show' : ''}`}>НИЖЕ</p>
            </div>
            <div className="form_img">
                <img className='first-arrow' src={arrow} alt=""></img>
                <img className='second-arrow' src={arrow} alt=""></img>
            </div>
            <Form/>
        </section>
    );
};

export default EightSection;