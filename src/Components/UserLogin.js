import React, { useState } from "react";
import '../App.css';
import { useCrud } from "../context/appContext";

function UserLogin () {
    const { login } = useCrud();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        login({email, password})
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
            <h2>Login</h2>
            <form className="ui form" onSubmit={handleSubmit}>
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
                <button className="ui button blue">LOGIN</button>
                
            </form>
            <p style={{textAlign:"right"}}>Not yet a user? <a href="/register">Register here</a> </p>
        </div>
        </div>
        </>
    );

}

export default UserLogin;