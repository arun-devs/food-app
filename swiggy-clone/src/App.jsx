import Header from "./components/Header";
import Body from "./components/Body";
import './index.css'
import { useState } from "react"
import { Route,Routes } from "react-router-dom";
// import RestaurantDetails from "./components/RestaurantDetails";
// import Cart from "./components/Cart";
import { useEffect } from "react";
import { lazy,Suspense } from "react";
import CartContext from "./context/CartContext";
const Cart=lazy(()=>import("./components/Cart"))
  const RestaurantDetails=lazy(()=>import("./components/RestaurantDetails"))

function App() {
  const[searchText,setSearchText]=useState('')
  const [cartCount, setCartCount] = useState(0)
  const [cartItems,setCartItems]=useState([])
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(()=>{
  
      const fetchData=async ()=>{
         setError("");
        setLoading(true);
        try{

           const resp=await fetch("https://6a4daf1be1cf82a4a17e7d79.mockapi.io/foodapp/restaurants")
            if (!resp.ok) {
          throw new Error("Unable to load restaurants");
                          }          
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
    <CartContext.Provider 
      value={{
         cartItems,
        setCartItems,
        cartCount,
        setCartCount
            }}>
      <Header searchText={searchText} setSearchText={setSearchText} cartCount={cartCount} />
      <Suspense fallback={<h1>loading.......</h1>}>
      <Routes>
        <Route path="/" element={ <Body searchText={searchText}   restaurants={restaurants} loading={loading} error={error}/>}/>
        <Route path="/restaurants/:id" element={<RestaurantDetails  restaurants={restaurants}/>}/>
        <Route path="/Cart" element={<Cart  />}/>
        
      </Routes>
      </Suspense>
      
     
    </CartContext.Provider>
  )
}

export default App
