import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Detail from './Components/Detail/Detail';
import Loader from './Components/Loader/Loader';


function App() {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setloading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setdata(data);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <div className="App">
      <Header />
      { loading && <Loader/>}
      <Routes>
        <Route path="*" element={
          <div className="cardcontainer">
            {
              data?.map((elem) => {
                return (
                  <Card img={elem.image} title={elem.title} price={elem.price} key={elem.id} id={elem.id}/>
                )
              })
            }
          </div>
        } />
        {
          data.map((items)=>{
            return(
              <Route path={"/product/" + items.id} key={items.id} element={<Detail key={items.id} url={"https://fakestoreapi.com/products/" + items.id}/>} />
            )
          })
        }
       
      </Routes>

    </div>
  );
}

export default App;
