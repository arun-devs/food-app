import { Link } from "react-router-dom"
const Header=({searchText,setSearchText,cartCount})=>{
   
    // const filterSearch=
    return(
        <div className="flex gap-5 items-center justify-between px-9 py-4">
            <div className="flex gap-5 items-center">
                <Link to="/">
                  <div className="text-3xl ">
                    <img src="https://ninjapng.com/public/storage/front-png/png-clipartshopee-food-bag-logo-e-commerce-food-delivery-app-icon-png3537822-thumbnail.webp"
                    className="w-15"
                    />
                </div>
                </Link>
              
                
                <div className="flex items-center justify-between border-b-2 border-orange-400 pb-2 mb-5">
                    <h2 className="text-2xl font-bold text-gray-800">
                    Other 
                </h2>

                 <span className="text-orange-500 text-xl">
                     ▼
                 </span>
</div>
            </div>

            <div className="flex gap-5">
                <span>Swiggy Coorporate</span>
                <span><input type="text" className="bg-amber-50" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/><button></button></span>
                <span>Offers</span>
                <span>Help</span>
                <span>Sign In</span>
                <Link to="/Cart">
                     <span>Cart ({cartCount})</span>
                </Link>
               
            </div>
        </div>
    )
}

export default Header