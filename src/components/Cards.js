import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout my projects!</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem 
                src='Images/js.jpeg'
                text='📌 JavaScript Project'
                label='Project'
                path='https://maymes-bakery-timeline.netlify.app/' 
                /> 
                <CardItem 
                src='Images/react.jpeg'
                text='📌 React Project'
                label='Project'
                path='https://courageous-banoffee-abaa65.netlify.app/' 
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src='Images/pproject.jpeg'
                text='📌 Personal Project'
                label='Project'
                path='/projects' 
                />
                <CardItem 
                src='Images/tictactoe.jpeg'
                text='📌  Personal Project'
                label='Project'
                path='https://github.com/Ikraan/Tic-Tac-Toe-Game-/' 
                />
                 <CardItem 
                src='Images/node.png'
                text=' 📌 Node Js'
                label='Project'
                path='https://github.com/Ikraan/Node-assignment' 
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
