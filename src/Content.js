import { useState } from "react";


const Content = () => {
  const[name , setName] = useState('Aditya');
const[count , setCount] = useState(0);


const handleNameChange = () =>{
  const names = ['Aditya','Shubham'];
  const int = Math.floor(Math.random() * 2);
  setName(names[int]);
}
const handleClick = () => {
  console.log(0);
}
const handleClick2 = (name) => {
  console.log('{name} you clicked it');
}
const handleClick3 = (e) => {
  console.log(e.target.innerText);
}

  return (  
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>

      <button onClick={handleNameChange}>Click it</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
    
  )
}
export default Content;