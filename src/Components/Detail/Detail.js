import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect , useState } from "react";
import Loader from "../Loader/Loader";
import "./Detail.css";


const Detail = ({ url }) => {
  const [isloading, setisloading] = useState(true)
  const [items, setitems] = useState(
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }
  )

  const updateitem = async ()=> {
    const newurl = url; 
    setisloading(true)
    let data = await fetch(newurl);
    let parsedData = await data.json();
    console.log(parsedData);
    setitems(parsedData);
    setisloading(false);
}
  useEffect(() => {
   
      //  axios.get(url)
      //     .then((response) => {
      //             console.log(response);
      //             setitems(response.data);
      //             setisloading(false);
      //             console.log(items.image);
      //     })
          
      //     .catch(function (error) {
      //           alert(error);
      //     });
      //     }
  
      updateitem();
    }, []);

  return (
    <div className="container">
     {isloading && <Loader/>} 
      <>
       <div className="left">
        <img src={items.image} alt="Image" />
      </div>
      <div className="right">
                  <div className="rating">
                  <div className="rate">
                      <span>{items.rating.rate}</span>
                      <FontAwesomeIcon className="icon" icon={faStar}/>
                  </div>
                    <p>{items.rating.count}</p>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                  </div>
        <div className="head">
          <h1>{items.title}</h1>
          <p>{items.category}</p>
        </div>
        <div className="body">{items.description}</div>
        <div className="btngrp">
          <h1>$ {items.price}</h1>
          <button>Buy Now</button>
        </div>
      </div>
      </> 
    </div>
  );
};

export default Detail;
