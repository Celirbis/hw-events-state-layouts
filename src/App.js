import './App.css';
import Store from './components/Store';

function App() {
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "./i/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "./i/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "./i/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "./i/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "./i/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "./i/5.jpg"
  }];
  return (
    <div className="App">
      <Store products={products} />
    </div>
  );
}

export default App;
