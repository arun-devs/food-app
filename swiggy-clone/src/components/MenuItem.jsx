const MenuItem=({menuitm})=>{
    return (
                <>

                <div >
                    <h2>{menuitm.name}</h2>
                    <h2 className="text-orange-700">₹{menuitm.price}</h2>
                </div>
                </>
    )
}

export default MenuItem