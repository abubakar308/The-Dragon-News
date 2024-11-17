
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaE } from "react-icons/fa6";
const Login = () => {
   const { loginUser } = useContext(AuthContext)
   const [login,setLogin] = useState(false)
   const [togglepass,setTogglepass] = useState(false)
    const navigate = useNavigate()
 
 

    const handleLogin = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
         loginUser(email,password)
        .then((data)=>{
          toast.success('Operation successful! 🎉');
          console.log(data.user);
          setLogin(true);
          navigate('/home')
        })
        .catch(Error =>{
          console.log(Error)

        })
    }
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              {
                login &&  toast.success('Operation successful! 🎉')
              }
        <form onSubmit={handleLogin} className="card-body">
            <h3 className="text-2xl">Login You Account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={togglepass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
            <label className="label"> 
              <span onClick={()=>setTogglepass(!togglepass)} className="absolute top-[45%] right-4"> {togglepass? <FaEyeSlash />: <FaEye />} </span>
            </label>
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center"> Dont&lsquo;t Have An Account?  <Link to="/register" className="text-red-500"> Register</Link></p>
      </div>
  
        </div>
    );
};

export default Login;