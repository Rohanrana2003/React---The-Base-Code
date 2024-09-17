import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count1:1,
            count2:2
        }
    }

    render() {
        return (
            <div className='user-info'>
                <h1>Count1: {this.state.count1}</h1>
x                <button 
                    onClick={()=>{
                        this.setState({
                            count1:this.state.count1 + 1
                        })
                    }}
                >Count class update  
                </button>

                <h2>Name: {this.props.name}</h2>
                <h3>Location: Yamuna Nagar</h3>
                <h4>Contact: @RohanRana</h4>
            </div>
        )
    }
}

export default UserClass