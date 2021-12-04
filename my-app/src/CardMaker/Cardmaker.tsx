import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas/Canvas';
import './CardMaker.css'
import TopMenu from './TopMenu/TopMenu';
import {testCanvas} from '../TestData';

function CardMaker() {
    return(
        <div className='page'>
            <TopMenu />
            <Canvas canvas={testCanvas}/>
        </div>    
    );
}

export default CardMaker;