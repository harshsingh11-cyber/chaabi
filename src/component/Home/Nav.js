import React from 'react';
import './Nav.css';
import logo from '../../img/logo.png';
import dash from '../../img/dash.png';
import tt from '../../img/tt.png';
import loca from '../../img/loca.png';
import star from '../../img/star.png';

function Nav() {
    return (
        <div className='main_nav'>
            <div className='nav_first'>
                <img src={logo} alt="" />
            </div>

            <div className="nav_sec">
                <div  className='both'>
                <img src={dash} alt="" />
                <p>Dashboard</p>
            </div>
            </div>


            <div className="nav_third">

                <div className="all_one">
                    <div className="all">
                    <img src={tt} alt="" />
                    <p> Training</p>
                    </div>
                </div>
                

                <div className="all_one">
                <div className="all">
                <img src={star} alt="" />
                    <p> Users</p>
                </div>
                </div>

                <div className="all_one">
                <div className="all">
                <img src={loca} alt="" />
                    <p>Analytics</p>
                </div>
                </div>

                <div className="all_one">
                <div className="all">
                <img src={loca} alt="" />
                    <p> My Account</p>
                </div>
                </div>

                <div className="all_one">
                <div className="all">
                <img src={loca} alt="" />
                    <p> Support </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Nav
