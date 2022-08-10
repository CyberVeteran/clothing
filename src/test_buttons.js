import { useState } from "react";
import {axios }from 'axios';
const Buttons = () => {
    const [shoes, setShoes] = useState([]);//shoes id:(1-5) localhost http://localhost:8000/wheels
    const [shirts, setShirts] = useState([]);//shoes id:(5-10) localhost http://localhost:8000/shirts
    const [pants, setPants] = useState([]);//shoes id:(10-15) localhost http://localhost:8000/wheels
    const [hats, setHats] = useState([]);//hat id:(15-20) localhost http://localhost:8000/wheels
    // js server axios get 
  const handleClick = () => {
    //  запит для користувача 
    axios
      .get("http://localhost:8000/")
      .then(function (response) {
        
        console.log(response.data);
         shoes = response.data
      })
      .catch(function (error) {
        // обробка помилки
        console.log(error);
      })
      .then(function () {
       
      }); 

    
    console.log("it works");
  };
  return (
    <div className="buttons">
      <div className="shoes">
        <h2>chose your shoes</h2>
      <button onClick={handleClick}>shoes</button>
    
      </div>






      
      <h2>chose your pants</h2>
      <button onClick={handleClick}>pants</button>
      <h2>chose your shirts</h2>
      <button onClick={handleClick}>shirt</button>
      <h2>chose your hats</h2>
      <button onClick={handleClick}>hat</button>
    </div>
  );
};

export default Buttons;
