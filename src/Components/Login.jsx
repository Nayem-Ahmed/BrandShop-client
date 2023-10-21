import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const {loginUser,googleLogin} = useContext(AuthContext)
  const [loginerror, setLoginerror] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
    const handlelogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        const user = {email};
        loginUser(email,password)
        .then((result) => {
          console.log(result.user)
          fetch('http://localhost:5000/users',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>{
            if (data.insertedId) {
                swal("Login success!", "You clicked the button!", "success");
                navigate(location?.state ? location.state : '/');
                
            }
          })

        })
        .catch((error) => {
          console.error(error)
          if (setLoginerror) {
            toast('Incorrect password');
            <ToastContainer />

          }
        });

    }
    const handlelogingGoogle =()=>{
      googleLogin()
      .then(result => {
        console.log(result.user);
        if (setLoginsuccess) {
          toast('Login Successful');
          navigate(location?.state ? location.state : '/');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <i className="text-center">or</i>
        </div>
        <button onClick={handlelogingGoogle} className="btn">
                <FcGoogle className="text-xl"></FcGoogle>
                Login With Google
              </button>
        <p>You have no account?<Link className='text-blue-600 underline' to='/signup'>Sign Up</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;