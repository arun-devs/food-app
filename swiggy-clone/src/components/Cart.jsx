import { useContext } from "react";
import CartContext from "../context/CartContext";
const Cart=()=>{

     const {
        cartItems,
    setCartItems,
    setCartCount
     }=useContext(CartContext)
  const cartTotalAmnt=cartItems.reduce((total,item)=>{
                return total+(item.price * item.qty)
            },0)


    function clearCart(){

        setCartItems([]);
        setCartCount(0);
    }


    if (cartItems.length==0 )return (<div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="text-8xl animate-bounce">🛒</div>

    <h1 className="text-4xl font-bold mt-6">
        Your Cart is Empty
    </h1>

    <p className="text-gray-500 mt-2 text-lg">
        Looks like you haven't added anything yet.
    </p>

    <button
        onClick={() => window.history.back()}
        className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
    >
        🍔 Continue Shopping
    </button>
</div>)


    return (
    <div className="max-w-3xl mx-auto py-8 px-4">

        <h1 className="text-3xl font-bold mb-8 text-center">
            🛒 My Cart
        </h1>

        {cartItems.map((itm) => (
            <div
                key={itm.id}
                className="bg-white shadow-md rounded-xl p-5 mb-5 border"
            >
                <div className="flex justify-between items-center">

                    <div>
                        <h2 className="text-xl font-bold">
                            {itm.name}
                        </h2>

                        <p className="text-gray-500 mt-1">
                            ₹{itm.price} × {itm.qty}
                        </p>
                    </div>

                    <div className="text-xl font-bold text-green-600">
                        ₹{itm.price * itm.qty}
                    </div>

                </div>
            </div>
        ))}

        <div className="bg-gray-100 rounded-xl shadow-md p-5 mt-8 flex justify-between items-center">

            <div>
                <h2 className="text-xl font-bold">
                    Total Amount
                </h2>

                <p className="text-green-600 text-2xl font-bold">
                    ₹{cartTotalAmnt}
                </p>
            </div>

            <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-200 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
            >
                Clear Cart
            </button>

        </div>

    </div>
);
}

export default Cart