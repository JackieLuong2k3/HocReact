import React from "react";
class AddUserInfor extends React.Component {
    state = {
        id: 12,
        name: "jaki",
        age: 26
    };

    handleInputName = (event) => {
        this.setState({
            name: event.target.value,
        })

    }
    handleInputAge = (event) => {
        this.setState({
            age: event.target.value
        })

    }
    handldeSubmit = (event) => {
        event.preventDefault();
        this.props.AddUserInfor({
            id: Math.floor(Math.random() * 100) + 1 + "id",
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                <div>
                    My name is {this.state.name}, im {this.state.age}
                    <form onSubmit={(event) => this.handldeSubmit(event)}>
                        <input type='text' onChange={(event) => this.handleInputName(event)} />
                        <input type='text' onChange={(event) => this.handleInputAge(event)} />
                        <button type='submit'>submit</button>
                    </form>
                </div>
            </div>
        )
    }

}
export default AddUserInfor;