import React from 'react';
import './Donut.css';
import donut from '../../img/donut.png';
import green from '../../img/green.png';
import red from '../../img/red.png';

function Donut() {
    return (
        <div className='donut'>
            <div className="do_first">
                <h5>quiz passing %</h5>
                <div className='doimg'>
                    <img src={donut} alt="" />
                </div>
            </div>
            <div className="do_sec">
                <div className="do1">
                    <div className="cir">
                        <img src={green} alt="" />
                    </div>
                    <div className="cir_data">
                        <h5>passed</h5>
                        <p>1423 workers</p>
                    </div>
                </div>
                <div className="do1">
                    <div className="cir">
                        <img src={red} alt="" />
                    </div>
                    <div className="cir_data">
                        <h5>failed</h5>
                        <p>134 workers</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Donut
