import React, { useState } from 'react'
import "./mix.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const [passShow, setpassShow] = useState(false);
    const [impval, setimpval] = useState({
        email:"",
        password: ""
    })
    const setVal = (e)=>{
        const {name, value} = e.target;
        setimpval(()=>{
            return{
                ...impval,
                [name]:value
            }
        })
    }
    const adduserData = (e)=>{
        e.preventDefault();
        const {email, password} = impval;
        if(email === ""){
            alert("Enter your email");
        }
        else if(!email.includes("@")){
            alert("Enter valid email address")
        }
        else if(password === ""){
            alert("Enter your password");
        }
        else if(password.length < 6){
            alert("Password must be 6 character");
        }
        else{
            console.log("user login Successfully done")
        }
    }
    return (
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>Welcome back, Log in</h1>
                        <p>Hello, welcome to our page. Plese Log in</p>
                    </div>
                    <form>
                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input onChange={setVal} type='email' value={impval.email} name='email' id='email' placeholder='Enter your email' />
                        </div>
                        <div className='form_input'>
                            <label htmlFor='password'>Password</label>
                            <div className='two'>
                                <input onChange={setVal} type={!passShow ? "password" : "text"} value={impval.password} name='password' id='password' placeholder='Enter your password' />
                                <div className='showpass' onClick={()=>setpassShow(!passShow)}>{!passShow ? "Show" : "Hide"}</div>
                            </div>
                        </div>
                        <button className='btn' onClick={adduserData}>login</button>
                        <p>Don't have an account?<Link to="/register">Sign up</Link> </p>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Login