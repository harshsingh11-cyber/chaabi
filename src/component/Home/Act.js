import React from 'react';
import './Act.css';
import arw from '../../img/arrow.png';

function Act() {
  return (
    <div className='act_main'>

        <div className="act_first">
            <h5>monthly training activity </h5>
            <p className='pboth'>
                <img src={arw} alt="" />
                <span>16% more enrollees this month</span>
            </p>
        </div>
<div className="act_main_o">


        <div className="act_sec">
            <div className="sec1">
            </div>
            <div className="sec2">
                <h5> course a</h5>
                <p> 23 workers took this course this week</p>
            </div>
        </div>

        <div className="act_sec">
            <div className="sec1">
            </div>
            <div className="sec2">
                <h5> course b</h5>
                <p> 253 workers took this course this week</p>
            </div>
        </div>

        <div className="act_sec">
            <div className="sec1">
            </div>
            <div className="sec2">
                <h5> course c</h5>
                <p> 253 workers took this course this week</p>
            </div>
        </div>

        <div className="act_sec">
            <div className="sec1">
            </div>
            <div className="sec2">
                <h5> course d</h5>
                <p> 253 workers took this course this week</p>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Act
