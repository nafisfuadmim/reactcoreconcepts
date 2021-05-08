import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name:"mahfuz",
    home:"bogura"
  }
  const person1 = {
    name:"Nafis",
    home:"setabgonj"
  }
  const style = {
    color:"red"
  }
  return (
    <div className="App">
      <h1 style={style}>{person1.name + " " + person1.home}</h1>
      <h1 style ={{color:"darkBlue", backgroundColor:"black"}}>{person.name + " "+ person.home}</h1>
      <h1>{(34+333)*56+45}</h1>
      <h1>{3+4}</h1>
      <Person10></Person10>
      <Person10></Person10>
      <Person10></Person10>
      <Person10></Person10>
      <Person10></Person10>
    </div>
  );
}

function Person10 () {
  const textStyle = {
    color:"tomato",
    border:"1px solid gray",
    margin:"5px",
    padding:"5px"
  }
return (
      <div style={textStyle}>
        <h1>Name: NaFis Fuad Mim</h1>
        <h3>Home: Bogura</h3>
      </div>
)
}









export default App;
