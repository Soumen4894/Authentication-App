import React, { useState } from 'react'
import './mix.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [passShow, setpassShow] = useState(false);
    const [cpassShow, csetpassShow] = useState(false);
    const [impval, setimpval] = useState({
        name:"",
        email:"",
        password: "",
        cpassword: ""
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
    const adduserData = async (e)=>{
        e.preventDefault();
        const {name, email, password, cpassword} = impval;
        if(name === ""){
            alert("Enter your name");
        }
        else if(email === ""){
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
        else if(cpassword === ""){
            alert("Enter your confirm password");
        }
        else if(cpassword.length < 6){
            alert("Confirm Password must be 6 character");
        }
        else if(password !== cpassword){
            alert("Password and Confirm Password not match");
        }
        else{
            // console.log("user registration Successfully done")

            const data = await fetch("http://localhost:8009/register", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    name, email, password, cpassword
                })
            });
            const res = await data.json();
            console.log(res);
        }
        
    }
  return (
    <>
    <section>
        <div className='form_data'>
            <div className='form_heading'>
                <h1>Sign up</h1>
                <p>Hello, welcome to our page. PLese register</p>
            </div>
            <form>
            <div className='form_input'>
                    <label htmlFor='name'>Name</label>
                    <input onChange={setVal} type='text' value={impval.name} name='name' id='name' placeholder='Enter your name' />
                </div>
                <div className='form_input'>
                    <label htmlFor='email'>Email</label>
                    <input onChange={setVal}  type='email' value={impval.email} name='email' id='email' placeholder='Enter your email' />
                </div>
                <div className='form_input'>
                    <label htmlFor='password'>Password</label>
                    <div className='two'>
                        <input onChange={setVal}  type={!passShow ? "password" : "text"} value={impval.password} name='password' id='password' placeholder='Enter your password' />
                        <div className='showpass' onClick={()=>setpassShow(!passShow)}>{!passShow ? "Show" : "Hide"}</div>
                    </div>
                </div>
                <div className='form_input'>
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <div className='two'>
                        <input onChange={setVal}  type={!cpassShow ? "password" : "text"} value={impval.cpassword} name='cpassword' id='cpassword' placeholder='Confirm password' />
                        <div className='showpass' onClick={()=>csetpassShow(!cpassShow)}>{!cpassShow ? "Show" : "Hide"}</div>
                    </div>
                </div>
                <button className='btn' onClick={adduserData}>Sign up</button>
                <p>Already have an account? <Link to="/">log in</Link></p>
            </form>

        </div>
    </section>
</>
  )
}

export default Register