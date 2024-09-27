import React from 'react';
import UserInfor from './UserInfo';
import List from './List'


class MyComponent extends React.Component {
    listUser =[
        {name: "trang thoi", age:18},
        {name: "jakie", age:18},
        {name: "quynh", age:22},
        
    ]

    render() {
        return (
            <div>
                <UserInfor/>
                <hr/>
                <List listUser={this.listUser}></List>
                <hr/>
            </div>
            
            
        )
    }
}
export default MyComponent;