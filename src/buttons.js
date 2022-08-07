const axios = require("axios");
const Buttons = () => {
    let shoes = []
    // js server axios get 
  const handleClick = () => {
    // Робимо запит для користувача з даним ID
    axios
      .get("http://localhost:3003/clothing/")
      .then(function (response) {
        // обробка успішного запиту
        console.log(response.data);
         shoes = response.data
      })
      .catch(function (error) {
        // обробка помилки
        console.log(error);
      })
      .then(function () {
       
      }); // виконується завжд

    // За бажанням вищевказаний запит також можна виконати так
    console.log("it works");
  };
  return (
    <div className="buttons">
      <h2>chose your shoes</h2>
      <button onClick={handleClick}>shoes</button>
      {shoes.map((item) => { 
      return (<span>{item}</span>)
      })}
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
