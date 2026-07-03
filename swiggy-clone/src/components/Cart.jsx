const Cart=({cartItems,setCartCount,setCartItems})=>{
  const cartTotalAmnt=cartItems.reduce((total,item)=>{
                return total+(item.price * item.qty)
            },0)


    function clearCart(){

        setCartItems([]);
        setCartCount(0);
    }
    
    return(
        

<> 
     
     {cartItems.length===0?<h1>your cart is empty</h1>:
     
     cartItems.map((itm)=>
    <div className="flex justify-center mt-5">
         <ol className="mb-7 ml-6 font-semibold" key={itm.id}>
            -----------------------------------------------
            <li >{itm.name}</li>
            <li >💰{itm.price}*{itm.qty}={itm.price * itm.qty}</li>
           
           ------------------------------------------------ 
        </ol>
       
    </div>
      
    )
    
    }
    <div className="flex justify-center mt-5">
        <ol className="mb-7 ml-6 font-semibold"> <li>Total:{cartTotalAmnt}</li></ol>
        <button className="font-extrabold caret-blue-500 bg-amber-700 rounded-2xl mb-3 pl-2-" onClick={clearCart}>clear Cart</button>
    </div>
    
     
     
            
</>

    )
}
export default Cart