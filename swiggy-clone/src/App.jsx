import Header from "./components/Header";
import Body from "./components/Body";
import './index.css'
import { useState } from "react"
function App() {
  const[searchText,setSearchText]=useState('')

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Body searchText={searchText}/>
    </>
  )
}

export default App
