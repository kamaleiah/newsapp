import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCrud } from "../context/appContext";

function Register () {
    const { handleRegister } = useCrud();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const register = (e) => {
        e.preventDefault();
        
        handleRegister({email,username,password})
        navigate("/newsapp/")
        
    }

    const cStyle = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 228, 196, 0.7)',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)', 
        padding: '20px', 
        marginTop: '50px',
        width: '500px',
    }

    return (
        <>
        <h1 style={{textAlign:'center', marginTop:'50px', color:'white', fontSize:'40px',
            textShadow:'1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(0, 0, 0, 0.5), 1px -1px 2px rgba(0, 0, 0, 0.25), -1px 1px 2px rgba(0, 0, 0, 0.25)'
        }}>Find My News</h1>
        <div className='ui container center' style={{display: 'flex', justifyContent: 'center'}}>
            
        <div style={cStyle}>
            <h2>User Registration</h2>
            <form className="ui form" onSubmit={register}>
                <div className="field" >
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername( e.target.value )}
                    />
                </div>
                <div className="field" >
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail( e.target.value )}
                    />
                </div>
                <div className="field" >
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword( e.target.value )}
                    />                    
                </div>
                <button className="ui button blue">REGISTER</button>
            </form>
        </div>
        </div>
        </>
    );

}

export default Register;