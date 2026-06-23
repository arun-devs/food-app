import Header from "./components/Header";
import Body from "./components/Body";
import './index.css'
import { useState } from "react"
import { Route,Routes } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";

function App() {
  const[searchText,setSearchText]=useState('')
  const [cartCount, setCartCount] = useState(0)
  const [cartItems,setCartItems]=useState([])

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} cartCount={cartCount} />
      <Routes>
        <Route path="/" element={ <Body searchText={searchText}/>}/>
        <Route path="/restaurants/:id" element={<RestaurantDetails setCartCount={setCartCount} setCartItems={setCartItems}/>}/>
        
      </Routes>
     
    </>
  )
}

export default App
