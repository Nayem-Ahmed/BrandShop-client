
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const [registererror,setRegistererror] = useState('')
    const navigate = useNavigate()
    const handlesignup = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setRegistererror('Password should be at least 6 characters ');
            return
            
        }   
        else if(!/[A-Z]/.test(password)){
            setRegistererror("Password must contain at least one uppercase letter.")
            return

        }else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setRegistererror('Password must contain at least one special character')
            return

        }
        setRegistererror('')
        createUser(email,password)
        .then((result) => {
          console.log(result.user)
          const user = {email,name,password,photo};
          fetch('https://food-server-mu.vercel.app/details/users',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>{
            if (data.insertedId) {
                swal("Create user success!", "You clicked the button!", "success");
                navigate('/')
                
            }
          })
          updateProfile(result.user,{
            displayName: name,
            photoURL: photo,
          })
          .then(()=> console.log('profile upload'))
          .catch()

        })
        .catch((error) => {
          console.error(error)
          setRegistererror(error.message)
        });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Url" name='photo' className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Siguup</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
            {
                registererror && <p className="text-red-500 text-sm text-center">{registererror}</p>
            }
         <ToastContainer />

        </div>
    );
};

export default SignUp;