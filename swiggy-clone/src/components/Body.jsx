import Biriyani from '../assets/Biryani.avif'
import Appam from '../assets/Appam.avif'
import Dosa from '../assets/Dosa.avif'
import Idli from '../assets/Idli.avif'
import Poori from '../assets/Poori.avif'
import Pothichoru from '../assets/Pothichoru.avif'
import Puttu from '../assets/Puttu.avif'
import Vada from '../assets/Vada.avif'
// import {restaurants} from '../data/restaurants.js'
import RestaurantCard from './RestaurantCard.jsx'
import { useState ,useEffect} from 'react'


const Body=({searchText,restaurants,loading})=>{
     const  [originalList,setOrginalList]=useState(restaurants)
console.log("arun");
  useEffect(()=>{
    const filterList=restaurants.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()));
    
    setOrginalList(filterList)
    
},[searchText,restaurants])
      
   function handleTopRated(){
    const filterredrateddata=originalList.filter((lst)=>lst.rating>=4.5)
                setOrginalList(filterredrateddata)

   }

function handleAllRestaurant(){
    setOrginalList(restaurants);
}

function handleRestaurantByRating(){
    const sortedRatedRestaurants=[...originalList].sort((a,b)=>b.rating-a.rating);
       setOrginalList(sortedRatedRestaurants)


}


     const catogories = [ {   
        
        image:Pothichoru

    },
    
    {   
        
        image:Dosa

    },
     {   
        
        image:Idli

    },
    {
       
        image:Vada
    },
    
    {  
        
        image:Poori

    },
    {
        
        image:Appam

    },
    {
       
        image:Biriyani

    },
    {
       
        image:Puttu

    },
    ]
   console.log("restaurants:", restaurants);
console.log("originalList:", originalList);
if (loading) {
        return <h1 className="text-2xl text-center mt-10">Loading...</h1>;;
    }

    return(
        <>
        <div className="px-10 py-6">
             <h1 className="text-2xl font-bold mb-8">What's on your mind?</h1>
         <div className="flex gap-5 justify-center ">
                      {catogories.map((itm)=>
        <ul key={itm.image}>
            <li className=" px-4 py-2 "><img src={itm.image}/></li>
        </ul>
        )}
        </div>
      </div>
      <div >
        <div>
            <h2 className="text-2xl font-bold mb-6 mx-10">
            Top restaurant chains in Thiruvananthapuram
        </h2>
      </div>
      <div className='flex justify-between'>
        <div>
             <button className='bg-amber-400 text-2xl font-bold mb-6 mx-10' onClick={()=>{handleTopRated()}} >Top Rated</button>
       <button className='bg-amber-400 text-2xl font-bold mb-6 mx-10' onClick={()=>{handleAllRestaurant()}} >All Restaurants</button>
        </div>
       
        <button className='bg-amber-400 text-2xl font-bold mb-6 mx-10' onClick={()=>{handleRestaurantByRating()}} >Sort By Rating</button>
      </div>
        </div>
        
      <div className='flex gap-4 flex-wrap'>
         {originalList.length>0?
         originalList.map((rest)=>(
            <RestaurantCard key={rest.id} res={rest} />
            
        )):<h1 className="text-2xl font-bold mx-auto mt-10">
                No Restaurant Found 😔
                </h1>}
        
      </div>
        </>
       
    )
}

export default Body