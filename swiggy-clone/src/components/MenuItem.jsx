const MenuItem=({menuitm,setCartCount,setCartItems,cartItems})=>{
    function addToCart(){
        setCartCount(prev=>prev+1)
        const availableiItem=cartItems.find((itm)=>itm.id===menuitm.id)
        if (availableiItem){
            setCartItems(prev=>(prev.map((item)=>
                item.id===menuitm.id?{...item,qty:item.qty+1}:
                item
            )))
        }
        else {
            setCartItems(prev=>[...prev,{...menuitm ,qty:1}])
        }
    }
    function removeFromCart(){
        const availableiItem=cartItems.find((itm)=>itm.id===menuitm.id)
        if (availableiItem){
            if (availableiItem.qty>1){
                setCartItems(temp=>temp.map((itm)=>(itm.id===menuitm.id)?{...itm,qty:itm.qty-1}:itm))
                setCartCount(prev =>{console.log("Previous Count:", prev);
                 return prev - 1})
            }
            else{ 
                  setCartItems(temp=>temp.filter((itm)=>itm.id!==menuitm.id))  
                  setCartCount(prev => prev - 1)
            }
        }

     
    }
    const cartItem=cartItems.find((itm)=>itm.id==menuitm.id)
    return (
                <>

                <div className="flex justify-between mb-3">
                    <h2>{menuitm.name}</h2>
                    <div className=" flex gap-2">
                    <h2 className="text-orange-700">₹{menuitm.price}</h2>
                     {cartItem?(
                        <>
                        <button className="text-gray-950 " onClick={removeFromCart}>-</button>
                            <span>{cartItem.qty}</span>
                      <button className="text-gray-950 " onClick={addToCart}>+</button>
                        </>
                      
                     )
                     
                      :
                    (<button className="text-gray-950 " onClick={addToCart}>Add to cart</button>)
                     } 
                    </div>
                    
                </div>
                </>
    )
}

export default MenuItem