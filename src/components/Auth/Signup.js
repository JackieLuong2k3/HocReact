import "../Auth/Signup.scss"
import { FaEye,FaEyeSlash } from 'react-icons/fa'

const Signup=()=>{
    return(
        <div>
            <div className="container-login">  
            <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-class">
                    <input type="text" placeholder="Email"></input>
                </div>
                <div className="input-class">
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="input-class">
                    <input type="password" placeholder="Password"></input>
                    <FaEye className="icon"/>
                    <FaEyeSlash className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="">Forgot Password</a>
                </div>
                <button>Login</button>
                <div className='register'>
                <p>Dont have an account? <a href="">Sign Up</a></p>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}
export default Signup