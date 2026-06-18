
const Header=({searchText,setSearchText})=>{
   
    // const filterSearch=
    return(
        <div className="flex gap-5 items-center justify-between px-9 py-4">
            <div className="flex gap-5 items-center">
                <div className="text-3xl ">
                    <img src="https://ninjapng.com/public/storage/front-png/png-clipartshopee-food-bag-logo-e-commerce-food-delivery-app-icon-png3537822-thumbnail.webp"
                    className="w-15"
                    />
                </div>
                
                <div className="font-bold underline">Other▶️</div>
            </div>

            <div className="flex gap-5">
                <span>Swiggy Coorporate</span>
                <span><input type="text" className="bg-amber-50" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/><button></button></span>
                <span>Offers</span>
                <span>Help</span>
                <span>Sign In</span>
                <span>Cart</span>
            </div>
        </div>
    )
}

export default Header