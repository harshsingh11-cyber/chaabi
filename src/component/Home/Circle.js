import React from 'react';
import './Circle.css';
import cir from '../../img/cir.png';
import b1 from '../../img/b-1.png';
import b2 from '../../img/b-2.png';
import b3 from '../../img/b-3.png';
import c1 from '../../img/c-1.png';
import c2 from '../../img/c-2.png';

function Circle() {
    return (

        <div className="cir_main">
            <div className="cir_head">
                <h5>chapter wise status</h5>
            </div>


            <div className="cir_im">
                <img src={cir} alt="" />
            </div>


            <div className="cir_d">
                <div className="d_o">
                    <div className="o">
                        <img src={b1} alt="" />
                        <span>finished training</span>
                    </div>
                    <div className="o">
                        <img src={b2} alt="" />
                        <span>chapter b</span>
                    </div>
                    <div className="o">
                        <img src={b3} alt="" />
                        <span>haven’t started yet</span>
                    </div>

                </div>
                <div className="d_s">
                    <div className="o">
                        <img src={c1} alt="" />
                        <span>chapter a</span>
                    </div>
                    <div className="o">
                        <img src={c2} alt="" />
                        <span>chapter c</span>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Circle;
