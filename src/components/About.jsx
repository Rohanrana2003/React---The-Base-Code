import User from "./User";
import UserClass from "./UserClass";

const About = () =>{

    return(
        <div className='about'>
            <h1>About</h1>

            <User name='Rohan (Function)'/>

            <UserClass name='Rohan (Class)'/>

        </div>
    )

}

export default About;