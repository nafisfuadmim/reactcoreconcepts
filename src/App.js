import logo from './logo.svg';
import './App.css';

function App() {
  const productList = [
    {name:"Sazna", price:"23"},
    {name:"BorBoti", price:"45"},
    {name:"Shim", price:"54"}
  ]


  const advanced = ['Murad','Maksim']
  return (
    <div className="App">
      <Product sobzi={productList[0]}></Product>
      <Product sobzi={productList[1]}></Product>
      
      <Player pukar="Afridi" jaiga="1B"></Player>
      <Player pukar="Nafis" jaiga="2B"></Player>
      <Player pukar={advanced[1]} jaiga="3B"></Player>
      <Player pukar={advanced[0]} jaiga="4B"></Player>
      
    </div>
  );
  }

function Product (props) {
  const {name,price} = props.sobzi;
  console.log(props)
  const ProductStyle = {
    border:'3px solid gray'
  }
  return(
    <div style={ProductStyle}>
        <h1>Name: {name}</h1>
        <h3>Price:{price}</h3>
    </div>
  )
}

function Player (props) {
  return(
    <div>
      <h1>Name: {props.pukar}</h1>
      <h2>Position: {props.jaiga}</h2>
      

    </div>
  )
}

export default App;
