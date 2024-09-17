import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
    }

    render() {

        return (
            <div className='about'>
                <h1>About</h1>

                <UserClass name='Rohan (Class)' />

            </div>
        )
    }

}

export default About;