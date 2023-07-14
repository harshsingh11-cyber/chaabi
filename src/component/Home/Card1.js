import React from 'react';
import './Card.css';
import f1 from '../../img/aa.png';
import f2 from '../../img/ab.png';

function Card1() {
    return (
        <div className='card_main'>
            <div className="card_first">
           <h5>video watch-time (hrs)</h5>
            </div>
            <div className="second">
                <div className="sec_first">
                    <div className="sec_d1">
                   <h3>2,433</h3>
                    </div>
                    <div className="sec_d2">
                        <div className="sec-1">
                        <div className="ddf">
                            <img src={f2} alt="" />
                        </div>
                        <div className="rf"> 20%</div>
                        </div>
                        <div className="dd"> 435</div>

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

export default Card1
