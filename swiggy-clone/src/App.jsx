import Header from "./components/Header";
import Body from "./components/Body";
import './index.css'
import { useState } from "react"
import { Route,Routes } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import Cart from "./components/Cart";
import { useEffect } from "react";

function App() {
  const[searchText,setSearchText]=useState('')
  const [cartCount, setCartCount] = useState(0)
  const [cartItems,setCartItems]=useState([])
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(()=>{
  
      const fetchData=async ()=>{
        setLoading(true);
        try{

           const resp=await fetch("https://6a4daf1be1cf82a4a17e7d79.mockapi.io/foodapp/restaurants")
          const restaurantData=await resp.json()
         setRestaurants(restaurantData)
         
        }
        catch(error){
            setError("Unable to load restaurants.");
            console.log(error);
        }
        finally{
            setLoading(false);
              }
         
      } 
      fetchData();
     
      
  },[])

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} cartCount={cartCount} />
      <Routes>
        <Route path="/" element={ <Body searchText={searchText}   restaurants={restaurants} loading={loading} />}/>
        <Route path="/restaurants/:id" element={<RestaurantDetails setCartCount={setCartCount} 
                          setCartItems={setCartItems} cartItems={cartItems} restaurants={restaurants}/>}/>
        <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} setCartCount={setCartCount} />}/>
        
      </Routes>
     
    </>
  )
}

export default App
