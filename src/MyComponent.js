import React from 'react';

class MyComponent extends React.Component{
    state ={
        name:"jaki",
        address:"hn",
        age:26
    };
    handleClick(){
        console.log("clivk")
    }
    render(){
        return(
            <div>
                My name is {this.state.name} i am from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>

            </div>
        )
    }
}
export default MyComponent;