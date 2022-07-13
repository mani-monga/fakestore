import React from 'react';
import './Card.css';
import { Link } from "react-router-dom";

const Card = (props) => {


  return (
    <div className='card'>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="bottom">
        <h4>$ {props.price}</h4>
        <Link to={"/product/" + props.id}>Buy Now</Link>
      </div>
    </div>
  )
}

export default Card