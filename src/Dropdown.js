import { useState, useEffect } from "react";
import { axios } from "axios";

const Dropdown = () => {
  const [shoes, setShoes] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [hats, setHats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const HandleClick = async () => {
    setIsLoading(true);
     try {
       shoes = await axios.get("http://localhost:8000/")
      
      .  setData(shoes);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  const [DropdownState, setDropdownState] = useState({ open: false });

  const HandleDropdownClick = () =>
    setDropdownState({ open: !DropdownState.open });
  return (
    <div className="buttons">
      <button onClick={HandleDropdownClick}>show shoes</button>
      {DropdownState.open && (
        <div className="shoes">
          <button onClick={HandleClick}>Fetch data</button>
          {shoes.map((shoe, index) => {
            <div className="shoes-prewiev" key={shoe.id}>
              <ul>
                <li>{shoe.name}</li>
              </ul>
            </div>;
          })}
        </div>
      )}
    </div>
  );
;
}
export default Dropdown;

/*

<h2>chose your shoes</h2>
        <button onClick={handleClick}>show shoes</button>
<h2>chose your pants</h2>
      <button onClick={handleClick}>pants</button>
      <h2>chose your shirts</h2>
      <button onClick={handleClick}>shirt</button>
      <h2>chose your hats</h2>
      <button onClick={handleClick}>hat</button> */
