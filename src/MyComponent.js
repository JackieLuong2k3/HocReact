import React from 'react';


class MyComponent extends React.Component {
    state = {
        name: "jaki",
        address: "hn",
        age: 26
    };
    handleClick = (event) => {
        this.setState({
            name: "nekko",
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOver = (event) => {
        console.log(event.pageY)
    }
    handleInput = (event) => {
        this.setState({
            name: event.target.value
        })
        
    }
    handldeSubmit = (event)=>{
        event.preventDefault();
    }
    render() {
        return (
            <div md="12">
                <div md="8">
                My name is {this.state.name} i am from {this.state.address} im {this.state.age}
                <button  onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOver}>Hover Me</button>
                <form onSubmit={(event)=> this.handldeSubmit(event)}>
                    <input type='text' onChange={(event) => this.handleInput(event)} />
                    <button type='submit'>submit</button>
                </form>
                </div>
                <div md="4">
                    <h2>List state</h2>
                </div>
            </div>
        )
    }
}
export default MyComponent;