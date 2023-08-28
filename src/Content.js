


const Content = () => {
const handleNameChange = () =>{
  const names = ['Aditya','Shubham'];
  const int = Math.floor(Math.random() * 2);
  return names[int];
}

  return (
    <main>
      Hello {handleNameChange()}!
    </main>
  )
}
export default Content;