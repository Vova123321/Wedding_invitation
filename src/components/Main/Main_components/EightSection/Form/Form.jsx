import React from 'react';
import guest from '../../../../../assets/img/guest.png';
import './Form.css';

const Form = () => {
    return (
        <form className='question_form' action="#">
            <div className="logo_form">
                <img src={guest} alt=""/>
            </div>
            <label htmlFor="">НАПИШИТЕ СВОЁ ФИО</label>
            <input type="text" placeholder="ФИО"/>
            <label htmlFor="">ЕСЛИ БУДЕТЕ С ПАРОЙ,ПОЖАЛУЙСТА <br/> НАПИШИТЕ ИМЯ</label>
            <input type="text" placeholder='ФИО ПАРЫ'/>
            <label htmlFor="">СМОЖЕТЕ ЛИ ВЫ ПРИСУТСТВОВАТЬ НА <br/>НАШЕМ ТОРЖЕСТВЕ?</label>
            <div className="presence_select">
                <div className="presente_item">
                        <input type="radio" name="presence" id="radio-1" value='all' />
                        <label htmlFor="radio-1">БУДУ В ЗАГСЕ И В РЕСТОРАНЕ</label>
                </div>

                <div className="presente_item">
                    <input type="radio" name="presence" id="radio-2" value='registry-office-only'/>
                    <label htmlFor="radio-2">БУДУ В ЗАГСЕ,НО НЕ БУДУ В РЕСТОРАНЕ</label>
                </div>

                <div className="presente_item">
                    <input type="radio" name="presence" id="radio-3" value='restaurant-office-only'/>
                    <label htmlFor="radio-3">НЕ БУДУ В ЗАГСЕ,НО БУДУ В РЕСТОРАНЕ</label>
                </div>

                <div className="presente_item">
                    <input type="radio" name="presence" id="radio-4" value="no-all"/>
                    <label htmlFor="radio-4">К СОЖАЛЕНИЮ,НЕ СМОГУ ПРИСУТСТВОВАТЬ</label>
                </div>
            </div>

            <label htmlFor="">ЧТО ПРЕДПОЧИТАЕТЕ ИЗ АЛКОГОЛЯ?</label>
            <div className="alcohol_select">
                <div className="aclcoho_item">
                    <input type="checkbox" name="alcohol" id="checkbox-1" value='vodka'/>
                    <label htmlFor="checkbox-1">ВОДКА</label>
                </div>

                <div className="aclcoho_item">
                    <input type="checkbox" name="alcohol" id="checkbox-2" value='whisky'/>
                    <label htmlFor="checkbox-2">КОНЬЯК</label>
                </div>

                <div className="aclcoho_item">
                    <input type="checkbox" name="alcohol" id="checkbox-3" value='wine'/>
                    <label htmlFor="checkbox-3">ВИНО</label>
                </div>

                <div className="aclcoho_item">
                    <input type="checkbox" name="alcohol" id="checkbox-4" value='shamp'/>
                    <label htmlFor="checkbox-4">ШАМПАНСКОЕ</label>
                </div>

                <div className="aclcoho_item">
                    <input type="checkbox" name="alcohol" id="checkbox-5" value='none'/>
                    <label htmlFor="checkbox-5">НЕ ПЬЮ АЛКОГОЛЬ</label>
                </div>
            </div>

            <label htmlFor="">ЧТО ПРЕДПОЧИТАЕТЕ НА ГОРЯЧЕЕ?</label>
            <div className="hot_select">
                <div className="hot_item">
                    <input type="radio" name="hot" id="hot-radio-1" value='chicken'/>
                    <label htmlFor="hot-radio-1">КУРИЦА</label>
                </div>
                <div className="hot_item">
                    <input type="radio" name="hot" id="hot-radio-2" value='fish'/>
                    <label htmlFor="hot-radio-2">РЫБА</label>
                </div>
                <div className="hot_item">
                    <input type="radio" name="hot" id="hot-radio-3" value='beef'/>
                    <label htmlFor="hot-radio-3">СВИНИНА</label>
                </div>
            </div>

            <label htmlFor="">НУЖЕН ЛИ ТРАНСФЕР?</label>
            <div className="trans">
                <div className="trans_item">
                    <input type="radio" name="trans" id="transfer-radio-1" value='yes'/>
                    <label htmlFor="transfer-radio-1">ДА</label>
                </div>
                <div className="trans_item">
                    <input type="radio" name="trans" id="transfer-radio-2" value='no'/>
                    <label htmlFor="transfer-radio-2">НЕТ</label>
                </div>
            </div>
            <div className="btn">
                <button className='submit_btn' type={"submit"}>ОТПРАВИТЬ</button>
            </div>

        </form>
    );
};

export default Form;