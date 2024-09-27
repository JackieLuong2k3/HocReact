import React from "react";

class List extends React.Component {
    render() {
        const {listUser} =this.props
        return (
            <div>
                {
                    listUser.map(
                        (item)=>{
                            return(
                                <div>
                                    <div>My name is {item.name} </div>
                                    <div>My age is {item.age}</div>
                                    <hr/>
                                </div>

                            )
                        }
                    )
                }
            </div>

        )
    }
}
export default List