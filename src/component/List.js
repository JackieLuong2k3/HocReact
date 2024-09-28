import React from "react";

class List extends React.Component {
    state={
        status:true
    }
    
    handleShowHide =()=>{
        this.setState({
            status : !this.state.status}
        )    
    }
    
    render() {
        const { listUser } = this.props
        var x = +"1000";
        var y = 10;
        console.log(x, y)
        return (
            <div>
                <div onClick={this.handleShowHide}> {this.state.status===true?"hide":"show"}</div>
                {this.state.status&& 
                
                listUser.map(
                        (item) => {
                                return (
                                    <div key={item.id} className={item.age>18?"green":"red"}>
                                        <div>My name is {item.name} </div>
                                        <div>My age is {item.age}</div>
                                        <hr />
                                    </div>
                                )
                        }
                    )}
            </div>

        )
    }
}
export default List