import React from 'react';
import AddUserInfor from './AddUserInfo';
import List from './List'


class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "trang thoi", age: 16 },
            { id: 2, name: "jakie", age: 18 },
            { id: 3, name: "quynh", age: 21 },

        ]
    }
    AddUserInfor = (user) => {
        this.setState({
            listUser: [user, ...this.state.listUser]
        })
    }

    render() {
        return (
            <div>
                <AddUserInfor AddUserInfor={this.AddUserInfor} />
                <hr />
                <List listUser={this.state.listUser} />
            </div>


        )
    }
}
export default MyComponent;