import React from "react";
class UserInfor extends React.Component{
    state = {
        name: "jaki",
        address: "hn",
        age: 26
    };
    
    handleInput = (event) => {
        this.setState({
            name: event.target.value
        })
        
    }
    handldeSubmit = (event)=>{
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <div>
                My name is {this.state.name} i am from {this.state.address} im {this.state.age}
                <form onSubmit={(event)=> this.handldeSubmit(event)}>
                    <input type='text' onChange={(event) => this.handleInput(event)} />
                    <button type='submit'>submit</button>
                </form>
                </div>
            </div>
        )
    }

}
export default UserInfor;