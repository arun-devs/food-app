const MenuItem=({menuitm,setCartCount,setCartItems,cartItems})=>{
    function addToCart(){
        setCartCount(prev=>prev+1)
        const isCartContain=cartItems.find((itm)=>itm.id===menuitm.id)
        if (isCartContain){
            setCartItems(prev=>(prev.map((item)=>
                item.id===menuitm.id?{...item,qty:item.qty+1}:
                item
            )))
        }
        else {
            setCartItems(prev=>[...prev,{...menuitm ,qty:1}])
        }
    }
    return (
                <>

                <div className="flex justify-between mb-3">
                    <h2>{menuitm.name}</h2>
                    <div className=" flex gap-2">
                    <h2 className="text-orange-700">₹{menuitm.price}</h2>
                    <button className="text-gray-950 " onClick={addToCart}>Add to Cart</button>
                    </div>
                    
                </div>
                </>
    )
}

export default MenuItem