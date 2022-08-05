import Buttons from "./buttons";
import Login from "./login";
import Logout from "./logout";


function App() {
  const title = 'Clothing recommendation'
  return (
    <div className="App">
      <Login/>
      <Logout/>
     <h1>{title}</h1> 
     <Buttons/>
    </div>
  );
}

export default App;
