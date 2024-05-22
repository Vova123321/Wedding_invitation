import React, { useState, useEffect } from 'react';
import './Calendar.css'
import CalendarIcon from '../../../../../../assets/img/calendar_icon.png'

export default function Calendar() {

    const [showRightDecorate, setShowRightDecorate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const calendarMounth = document.querySelector('.calendar__mounth');
    
            if (calendarMounth) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const elementTop = calendarMounth.getBoundingClientRect().top;
    
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
        <div className="calendar" >
            <div className={`calendar__mounth ${showRightDecorate ? 'show' : ''}`}>
                <p>August 2024</p>
            </div>
            <div className="calendar_item">
                <div className={`date_colum ${showRightDecorate ? 'show' : ''}`}>
                    <span className='mouth'>S</span>
                    <span>-</span>
                    <span>4</span>
                    <span>11</span>
                    <span>18</span>
                    <span>25</span>
                </div>
                <div className={`date_colum2 ${showRightDecorate ? 'show' : ''}`}>
                    <span className='mouth'>M</span>
                    <span>-</span>
                    <span>5</span>
                    <span>12</span>
                    <span>19</span>
                    <span>30</span>
                </div>
                <div className={`date_colum3 ${showRightDecorate ? 'show' : ''}`}>
                    <span className='mouth'>T</span>
                    <span>-</span>
                    <span>6</span>
                    <span>13</span>
                    <span>20</span>
                    <span>27</span>
                </div>
                <div className={`date_colum4 ${showRightDecorate ? 'show' : ''}`}>
                    <span className='mouth'>W</span>
                    <span>-</span>
                    <span>7</span>
                    <span>14</span>
                    <span className='absolut'>21 <img className='img_absolut' src={CalendarIcon} alt="" /></span>
                    <span>28</span>
                </div>
                <div className={`date_colum5 ${showRightDecorate ? 'show' : ''}`}>
                    <span className='mouth'>T</span>
                    <span>1</span>
                    <span>8</span>
                    <span>15</span>
                    <span>22</span>
                    <span>29</span>
                </div>
                <div className={`date_colum6 ${showRightDecorate ? 'show' : ''}`}>
                    <span className='mouth'>F</span>
                    <span>2</span>
                    <span>9</span>
                    <span>16</span>
                    <span>23</span>
                    <span>30</span>

                   
                </div>
                <div className={`date_colum7 ${showRightDecorate ? 'show' : ''}`}>
                    <span className='mouth'>S</span>
                    <span>3</span>
                    <span>10</span>
                    <span>17</span>
                    <span>24</span>
                    <span>31</span>
                </div>
            </div>
        </div>
    );
}