import { delay } from 'lodash';
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
const postLogin= (email,password)=>{
    return axios.post(`api/v1/login`,
        {
        email: email,
        password: password,
        delay: 5000
    })
}
const postRegister=(email,username,password)=>{
    return axios.post(`api/v1/register`,
        {
            email:email,
            username:username,
            password:password
        }
    )
}
const getQuizbyUser= ()=>{
    return axios.get("api/v1/quiz-by-participant")
}
const getQuizUserbyId= (id)=>{
    return axios.get(`api/v1/questions-by-quiz?quizId=${id}`)
}
const postSubmitQuiz= (data)=>{
    return axios.post(`api/v1/quiz-submit`,{...data})
}
export {postCreateUser,getAllUser,putUpdateUser,deleteUser,getAllUserPaginate,
    postLogin,postRegister,getQuizbyUser,getQuizUserbyId,postSubmitQuiz} 