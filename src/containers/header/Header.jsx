import React from 'react';
import './header.css';
import people from '../../assets/people.jpg'
import ai from '../../assets/ai.jpg'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>
            Let's Build Something amazing with GPT-3 OpenAI</h1>
            <p>Discover a revolutionary new way of building websites and UI elements using the power of AI. 
                Use our free AI website generator to create pages and components starting from just a ChatGPT prompt.</p>
            <div className='gpt3__header-content__input'>
                <input type='email' placeholder='Your Email' />
                <button type='button'>Get Started</button>
            </div>
            <div className='gpt3__header-content_people'>
                <img src={people} alt='people' />
                <p>1600 people requested access visit in last 24 hours</p>
            </div>
            <div className='gpt3__header-image'>
                <img src={ ai } alt='ai' />
            </div>
      </div>
    </div>
  )
}

export default Header
