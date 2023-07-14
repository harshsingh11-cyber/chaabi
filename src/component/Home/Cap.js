import React from 'react';
import './Cap.css';
import half from '../../img/half-1.png';
import halO from '../../img/hal.png';

function Cap() {
  return (
    <div className='main_cap'>
        <h5>Chapter Wise Status</h5>
        <div className="main_two">
            <div className="elips-1">
                <img src={half} alt="" />
            </div>
            <div className="elips-2">
            <img src={halO} alt="" />
            </div>
            <div className="elips-3"></div>
            <div className="elips-4"></div>
            <div className="elips-5"></div>
        </div>
        <div className="main_third">

        </div>
    </div>
  )
}

export default Cap
