import { useState } from "react";

const User =({name})=>{
    const [count1] = useState(1)
    const [count2] = useState(2)


    return(
        <div className='user-info'> 
            <h1>Count1: {count1}</h1>


            <h2>Name: {name}</h2>
            <h3>Location: Yamuna Nagar</h3>
            <h4>Contact: @RohanRana</h4>
        </div>
    )

}

export default User;