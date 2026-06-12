const RestaurantCard=({res})=>{
    const {name,rating,time,cuisine,location,offer,image}=res
  
     return(
       

        <div className="bg-cyan-50 w-70 h-90 mx-10">
             
             <img src={image} className="w-full h-44 object-cover rounded-2xl"/>
            <h3>{name}</h3>
             <p>{rating}</p>
            <p>{time}</p>
             <p>{cuisine}</p>
            <p>{location}</p>
            <p>{offer}</p>


        </div>
    )
}

export default RestaurantCard