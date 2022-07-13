import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='HeaderContainer'>
        
    <div className='HeaderLeft'>
        <FontAwesomeIcon icon={faStore} style={{"color": "var(--primary)"}}/>
        <Link to={"*"} className="title">FakeStore</Link>
    </div>
    
    <div className='HeaderCenter'>
        <li><a href="">Buy</a></li>
        <li><a href="">Sell</a></li>
        <li> <a href="">Resources</a> </li>
        <li><a href="">Wallet</a></li>
        <li><a href="">Rewards</a></li>
    </div>
    
    <div className='HeaderSearch'>

        <input type="text" placeholder='Enter Keyword' />
        <button> Search </button>
        </div>
    </div>
  )
}

export default Header