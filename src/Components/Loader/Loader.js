import React from 'react';
import './Loader.css';
import loading from './loading.gif'

const Loader = () => {
  return (
    <div className='spinner'>
      <img src={loading} alt={loading}/>
    </div>
  )
}

export default Loader