import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data:{
                id:0,
                name:'Name',
                location:"location",
                avatar_url:"dummy",
                bio:'Null'
            },
        }
        console.log('constructed');   
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/Rohanrana2003');
        const json = await data.json();
        this.setState({
            data:{
                id:json.id,
                name:json.name,
                location:json.location,
                avatar_url:json.avatar_url,
                bio:json.bio
            }
        }) 
        console.log('mount')

    }

    componentDidUpdate(){
        console.log('update')
    }

    render() {
        const {id, name, location, avatar_url, bio} = this.state.data;
        console.log('rendered');

        return (
            <div className='user-info'>
                <div className="user-details">
                    <h3>Id: <span>{id}</span></h3>
                    <h3>Name: <span>{name}</span></h3>
                    <h3>Location: <span>{location}</span></h3>
                    <h3>Contact: <span>rohanrana33042@gmail.com, 8307893660</span></h3>
                    <h3>Bio: <span>{bio}</span></h3>
                </div>

                <div className="user-pic">
                    <img src={avatar_url} alt="user_pic" />
                </div>
                
            </div>
        )
    }
}

export default UserClass