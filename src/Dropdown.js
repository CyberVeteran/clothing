import { useState, useEffect } from "react";
import axios from "axios";

const Dropdown = () => {
  const [shoes, setShoes] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [hats, setHats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [dropDownState, setdropDownState] = useState(false);
  const [selected, setSelected] = useState();

  const handleClick = async () => {};
//<button onClick={handleClick}>render</button>
  const fetchData = async function () {
    setIsLoading(true);
    try {
      const result = await axios.get("http://localhost:8000/wheels");
      console.log(result);
      setShoes(result.data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const HandleDropdownClick = () => setdropDownState(!dropDownState);
  return (
    <div className="buttons">
      <button onClick={HandleDropdownClick}>show shoes</button>
      {dropDownState && (
        <div className="shoes">
          
          <select
            onChange={(e) => {
              const selectedImage = e.target.value;
              setSelected(selectedImage);
            }}
          >
            <option disabled selected>please select</option>
            {shoes.map((shoe, index) => (
              <option value={shoe.href} key={shoe.id}>
                {shoe.name}
              </option>
            ))}
          </select>
          
          <img src={selected} ></img>
        </div>
      )}
      
    </div>
    
    
  );
};
export default Dropdown;

/*
<div><button onClick={handleClick}>render</button></div>

<h2>chose your shoes</h2>
        <button onClick={handleClick}>show shoes</button>
<h2>chose your pants</h2>
      <button onClick={handleClick}>pants</button>
      <h2>chose your shirts</h2>
      <button onClick={handleClick}>shirt</button>
      <h2>chose your hats</h2>
      <button onClick={handleClick}>hat</button> */
