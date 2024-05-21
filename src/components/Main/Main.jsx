import './Main.css'
import FirstSection from './Main_components/FirstSection/FirstSection';
import SecondSection from './Main_components/SecondSection/SecondSection';
import ThirdSection from './Main_components/ThirdSection/ThirdSection';
import FourthSection from './Main_components/FourthSection/FourthSection';
import FifthSection from './Main_components/FifthSection/FifthSection';
import SixthSection from './Main_components/SixthSection/SixthSection';
import SeventhSection from './Main_components/SeventhSection/SeventhSection';
import EightSection from "./Main_components/EightSection/EightSection.jsx";
import React, { useEffect } from 'react'
import design_siren from '../../assets/img/disigner_siren.png'

export default function Main() {
    return (
        <main className="Main">
            <FirstSection/>
            <SecondSection/>
            <img className='siren_toLeft' src={design_siren} alt=""/>
            <ThirdSection/>
            <FourthSection/>
            <img className='siren_toRight' src={design_siren} alt=""/>
            <FifthSection/>
            <SixthSection/>
            <img className='siren_toLeft2' src={design_siren} alt=""/>
            <SeventhSection/>
            <EightSection/>
        </main>
    );
}