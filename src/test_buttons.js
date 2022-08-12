import { useState, useEffect } from "react";
import axios from "axios";

const Dropdown = () => {
  const [shoes, setShoes] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [hats, setHats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const HandleClick = async () => { 
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
  const [DropdownState, setDropdownState] = useState({ open: false });

  const HandleDropdownClick = () =>
    setDropdownState({ open: !DropdownState.open });
  return (
    <div className="buttons">
      <button onClick={HandleDropdownClick}>show shoes</button>
      {DropdownState.open && (
        <div className="shoes">
          <button onClick={HandleClick}>Fetch data</button>
          <select>
            {shoes.map((shoe, index) => (
              <option key={shoe.id}>{shoe.name}</option>
            ))}
          </select>
          <img src="../src/img/pants0.jpg" ></img>
        </div>
        
      )}
    </div>
  );
};
export default Dropdown;
