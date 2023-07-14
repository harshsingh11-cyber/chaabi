import React from 'react';
import './Card.css';
import f1 from '../../img/c1.jpg';
import f2 from '../../img/d1.jpg';

function Card() {
    return (
        <div className='card_main'>
            <div className="card_first">
           <h5>% workers passing quiz</h5>
            </div>
            <div className="second">
                <div className="sec_first">
                    <div className="sec_d1">
                   <h3>95%</h3>
                    </div>
                    <div className="sec_d2">
                        <div className="sec-1">
                        <div className="ddf">
                            <img src={f2} alt="" />
                        </div>
                        <div className="ddf"> 20%</div>
                        </div>
                        <div className="dd"> 24%</div>

                    </div>
                </div>
                <div className="sec_sec">
                    <div className="sec_f">
                    <img src={f1} alt="" />
                    </div>
                    <div className="sec_s">
                        <div className="poi"> M</div>
                        <div className="poi">T</div>
                        <div className="poi">W</div>
                        <div className="poi">T</div>
                        <div className="poi">F</div>
                        <div className="poi">S</div>
                        <div className="poi">S</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
