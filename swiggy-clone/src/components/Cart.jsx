const Cart=({cartItems})=>{
  const cartTotalAmnt=cartItems.reduce((total,item)=>{
                return total+(item.price * item.qty)
            },0)
    
    return(
        

<> 
     
     {cartItems.length===0?<h1>your cart is empty</h1>:
     
     cartItems.map((itm)=>
    
       (<ol key={itm.id}>
            <li >{itm.name}</li>
            <li >💰{itm.price}*{itm.qty}={itm.price * itm.qty}</li>
            <li>Total:{cartTotalAmnt}</li>
            
        </ol>) 
    )
    
    }
     
     
            
</>

    )
}
export default Cart