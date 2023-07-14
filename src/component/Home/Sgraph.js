import React from 'react';
import './Sgraph.css';
import s1 from '../../img/s-1.png';
import s2 from '../../img/s-2.png';
import s3 from '../../img/s-3.png';
import s4 from '../../img/s-4.png';
import s5 from '../../img/s-5.png';
import s6 from '../../img/s-6.png';

function Sgraph() {
    return (
        <div className='s_main'>
            <div className="s_main-1">
                <div className="head_s">
                    <h5>daily training completions</h5>
                    <p>last 7 days</p>
                </div>
                <div className="con_1">
                    <div className="col-s">
                        <div className="allss">160</div>
                        <div className="allss">120</div>
                        <div className="allss">80</div>
                        <div className="allss">40</div>
                        <div className="allss">0</div>
                    </div>
                    <div className="col-s1">
                        <div className="col-g">

                            <div className="pic-1 pic">
                                <img src={s1} alt="" />
                            </div>

                            <div className="pic-2 pic">
                            <img src={s2} alt="" />
                            </div>

                            <div className="pic-3 pic">
                            <img src={s3} alt="" />
                            </div>

                            <div className="pic-4 pic">
                            <img src={s4} alt="" />
                            </div>

                            <div className="pic-5 pic">
                         <img src={s3} alt="" />
                            </div>
                            <div className="pic-6 pic">
                            <img src={s5} alt="" />
                            </div>

                            <div className="pic-7 pic">
                            <img src={s3} alt="" />
                            </div>


                            <div className="pic-8 pic">
                            <img src={s1} alt="" />
                            </div>

                            <div className="pic-9 pic">
                            <img src={s3} alt="" />
                            </div>

                            <div className="pic-10 pic">
                            <img src={s6} alt="" />
                            </div>
                            

                        </div>
                        <div className="col-p">
                            <div className="day">S</div>
                            <div className="day">M</div>
                            <div className="day">T</div>
                            <div className="day">W</div>
                            <div className="day">T</div>
                            <div className="day">F</div>
                            <div className="day">S</div>
                            <div className="day">M</div>
                            <div className="day">T</div>
                            <div className="day">W</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sgraph
