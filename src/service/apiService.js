import axios from '../utils/axiosCustomize';

const postCreateUser=(email,password,username,role,img)=>{
    
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);

    return  axios.post('api/v1/participant', data);

}

const putUpdateUser=(id,username,role,img)=>{
    
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);

    return  axios.put('api/v1/participant', data);

}
const deleteUser= (userid)=>{
    return axios.delete("api/v1/participant",{data: {id:userid}})
}
const getAllUser= ()=>{
    return axios.get("api/v1/participant/all")
}
const getAllUserPaginate= (page , limit)=>{
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}
export {postCreateUser,getAllUser,putUpdateUser,deleteUser,getAllUserPaginate} 