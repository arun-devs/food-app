import Header from "./components/Header";
import Body from "./components/Body";
import './index.css'
import { useState } from "react"
function App() {
  const[searchText,setSearchext]=useState('')

  return (
    <>
      <Header searchText={searchText} setSearchext={setSearchext} />
      <Body searchText={searchText}/>
    </>
  )
}

export default App
