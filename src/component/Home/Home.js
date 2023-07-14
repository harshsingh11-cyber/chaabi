import React from 'react'
import Card from './Card'
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './Home.css';
import Circle from './Circle';
import Graph from './Graph';
import Act from './Act';
import Donut from './Donut';
import Sgraph from './Sgraph';

function Home() {
  return (
    <div className='home'>
       <div className="first-home">
        <Card />
        <Card1/>
        <Card2/>
        <Card3/>
       </div>
       <div className="sec-home">
        <Circle/>
        <Graph/>
       </div>
       <div className="third-home">
        <Act/>
        <Donut/>
        <Sgraph/>
       </div>
    </div>
  )
}

export default Home
