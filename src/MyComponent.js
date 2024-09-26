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
    handleOver(event){
        console.log(event.pageY)
    }
    render(){
        return(
            <div>
                My name is {this.state.name} i am from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOver}>Hover Me</button>
            </div>
        )
    }
}
export default MyComponent;