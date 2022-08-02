const Buttons = () => {
    const handleClick = ()=>{
        console.log('it works')
    }
    return ( 
        <div className="buttons">
            <h2>chose your shoes</h2>
            <button onClick={handleClick}>shoes</button>
            <h2>chose your pants</h2>
            <button onClick={handleClick}>pants</button>
            <h2>chose your shirts</h2>
            <button onClick={handleClick}>shirt</button>
            <h2>chose your hats</h2>
            <button onClick={handleClick}>hat</button>
            
        </div>
     );
}
 
export default Buttons;