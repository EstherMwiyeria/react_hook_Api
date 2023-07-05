// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

 import Login from './login';
import Navbar from './navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Products from './Products'
import ProductDetailsPage from './productdetails';
import AddProductForm from './AddProduct';
function App() {
  return (
    <div >
      <Navbar/>
<BrowserRouter>
<Routes>
  { <Route path='/login' element ={<Login/>}></Route> }
  { <Route path='productdetails' element={<ProductDetailsPage/>}/> }
  { <Route path='/product/:productId' element ={<ProductDetailsPage/>}/> }
  {<Route path='/products' element ={<Products/>}/> }
  { <Route path ='/AddProduct' element={<AddProductForm/>}/> }
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;





