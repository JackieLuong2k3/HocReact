import { useState } from 'react';
import '../Auth/Login.scss'
import { FaUser, FaLock } from 'react-icons/fa'
import { postLogin } from '../../service/apiService';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()
    const validateEmail = (username) => {
        return String(username)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleBtnLogin = async() => {
        const isInvaliEmail = validateEmail(username);
        if (!isInvaliEmail) {
            console.log("hihi");
            return;
        }
        if(password==null){

        }
        let data = await postLogin(username,password);
        if (data && data.EC === 0) {
            navigate("/")
            
        }
        if (data && data.EC !== 0) {
        }
        
    }
    return (
        <div className="container-login">
            <div className="wrapper">
                <Form>
                    <h1>Login</h1>
                    
                    {/* Email Input */}
                    <Form.Group  controlId="formEmail">
                        <Form.Label></Form.Label>
                        <div className="input-class">
                            <Form.Control
                                type="text"
                                placeholder="Enter your email"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <FaUser className="icon" />
                        </div>
                    </Form.Group>
                    
                    {/* Password Input */}
                    <Form.Group  controlId="formPassword">
                        <Form.Label></Form.Label>
                        <div className="input-class">
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock className="icon" />
                        </div>
                    </Form.Group>

                    {/* Remember Me and Forgot Password */}
                    <div className="remember-forgot">
                        <Form.Check 
                            type="checkbox" 
                            label="Remember me" 
                        />
                        <a href="">Forgot Password?</a>
                    </div>
                    
                    {/* Login Button */}
                    <Button 
                        variant="primary" 
                        className="w-100 mt-3" 
                        onClick={() => handleBtnLogin()}
                    >
                        Login
                    </Button>
                    
                    {/* Sign Up */}
                    <div className="register">
                        <p>
                            Don't have an account? <a href="">Sign Up</a>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Login