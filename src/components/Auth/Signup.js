import { useState } from "react"
import "../Auth/Signup.scss"
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { postRegister } from "../../service/apiService";
import { toast } from "react-toastify";

const Signup=()=>{
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleBtnSignup = async()=>{
        const checkEmail =validateEmail(email)
        console.log(password);
        
        if(checkEmail){
        let data = await postRegister(email,username,password);
            if(data && data.EC === 0){
                console.log(data);
                toast.success('ok')
            }
    }      
    }
    return(
        <div>
            <div className="container-login" style={{background:'#2b2b44'}}>  
            <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-class">
                    <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className="input-class">
                    <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                </div>
                <div className="input-class">
                    <input type="password" placeholder="Password"onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <FaEye className="icon"/>
                    <FaEyeSlash className="icon"/>
                </div>
                
                <button onClick={()=>{handleBtnSignup()}}>Register</button>
                <div className='register'>
                <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}
export default Signup