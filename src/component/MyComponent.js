import React from 'react';
import UserInfor from './UserInfo';
import List from './List'


class MyComponent extends React.Component {
    listUser =[
        {id:1, name: "trang thoi", age:16},
        {id:2,name: "jakie", age:18},
        {id:3,name: "quynh", age:21},
        
    ]

    render() {
        return (
            <div>
                <UserInfor/>
                <hr/>
                <List listUser={this.listUser}></List>
            </div>
            
            
        )
    }
}
export default MyComponent;