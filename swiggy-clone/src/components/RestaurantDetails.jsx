import { useParams } from "react-router-dom"
import { restaurants } from "../data/restaurants"
import MenuItem from "./MenuItem"
const RestaurantDetails=({setCartCount})=>{
    const{id}=useParams()

    const rest2RenderAfterGettingID=restaurants.find((ITM)=>ITM.id===Number(id))
    
    return(
        <>

        {rest2RenderAfterGettingID ?
            (<div className="flex justify-center mt-14">
    <div className="w-96">
        <img
            src={rest2RenderAfterGettingID.image}
            className="w-full h-72 object-cover rounded-xl"
        />

        <div className="mt-4">
            <h1 className="text-3xl font-bold">
                {rest2RenderAfterGettingID.name}
            </h1>

            <p className="text-lg">
                ⭐ {rest2RenderAfterGettingID.rating}
            </p>

            <p>{rest2RenderAfterGettingID.location}</p>

            <p className="font-semibold text-green-600">
                {rest2RenderAfterGettingID.offer}
            </p>
        </div>
        <div className="font-extrabold mt-3">
                <h2 className="text-rose-900">Menu</h2>
                {rest2RenderAfterGettingID.menu.map((itm)=>(
                    
                    <div key={itm.id}>
                        <MenuItem menuitm={itm} menuCart={setCartCount}/>
                    </div>
                      ))}
                   

        </div>
    </div>
</div>):<h1>no dta found</h1>

        }
        </>
        
        
    )
}



export default RestaurantDetails