import React from 'react';
import './Grapg.css';
import o from '../../img/one.png';
import oo from '../../img/one-1.png';
import two from '../../img/two.png';
import four from '../../img/four.png';
import slast from '../../img/slast.png';
import tlast from '../../img/tlast.png';
import sev from '../../img/seven.png';
import eig from '../../img/eight.png';
import nine from '../../img/nine.png';
import last from '../../img/last.png';

function Graph() {
    return (
        <div className="main_g">
            <div className="main_head">
                <h5>last 14 days active workers in training</h5>
                <p>last 14 days</p>
            </div>
            <div className="main_con">
                <div className="con_first">
                    <div className="allp">400
                    </div>
                    <div className="allp">300
                    </div>
                    <div className="allp">200
                    </div>
                    <div className="allp">100
                    </div>
                    <div className="allp">0
                    </div>
                </div>
                <div className="con_sec">
                        <div className="sec_g">
                            <div className="graph">
                                <img src={oo} className='twow' alt="" />
                                <img className='onew' src={o} alt="" />
                            </div>
                            <div className="graph">
                           
                            <img src={oo}  className='twow' alt="" />
                            <img src={two} className='o-1' alt="" />
                            </div>
                            <div className="graph">
                           
                            <img src={oo} className='twow' alt="" />
                            <img src={two} className='o-1' alt="" />
                            </div>

                            <div className="graph">
                          
                            <img src={oo} className='twow' alt="" />
                            <img src={four} className='o-2' alt="" />
                            
                            </div>
                            <div className="graph">
                           
                            <img src={oo} className='twow' alt="" />
                            <img src={sev} className='o-2' alt="" />
                            </div>
                            <div className="graph">
                          
                            <img src={oo} className='twow' alt="" />
                            <img src={eig}  className='o-2' alt="" />
                            </div>
                            <div className="graph">
                           
                            <img src={oo} className='twow' alt="" />
                            <img src={nine} className='o-2' alt="" />
                            </div>
                            <div className="graph">
                          
                            <img src={oo} className='twow' alt="" />
                            <img src={o} className='o-2' alt="" />
                            </div>
                            <div className="graph-1">
                          
                            <img src={oo} className='twow' alt="" />
                            <img src={four}  className='o-2' alt="" />
                            </div>
                            <div className="graph-1">
                           
                            <img src={oo} className='twow' alt="" />
                            <img src={tlast} className='o-2' alt="" />
                            </div>
                            <div className="graph-1">
                           
                            <img src={oo} className='twow' alt="" />
                            <img src={slast} className='o-2' alt="" />
                            </div>
                            <div className="graph-1">
                           
                            <img src={oo} className='twow' alt="" />
                            <img src={last} className='o-2' alt="" />
                            </div>

                        </div>
                        <div className="sec_p">
                            <div className="point">3 jun</div>
                            <div className="point">4 jun</div>
                            <div className="point"> 5 jun</div>
                            <div className="point"> 6 jun</div>
                            <div className="point"> 7 jun</div>
                            <div className="point"> 8 jun</div>
                            <div className="point"> 9 jun</div>
                            <div className="point"> 10 jun</div>
                            <div className="point"> 11 jun</div>
                            <div className="point"> 12 jun</div>
                            <div className="point"> 13 jun</div>
                            <div className="point"> 14 jun</div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Graph
