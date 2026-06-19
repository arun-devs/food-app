import Header from "./components/Header";
import Body from "./components/Body";
import './index.css'
import { useState } from "react"
import { Route,Routes } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";

function App() {
  const[searchText,setSearchText]=useState('')

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={ <Body searchText={searchText}/>}/>

        <Route path="/restaurant" element={<RestaurantDetails/>}/>
        
      </Routes>
     
    </>
  )
}

export default App
