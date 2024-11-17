import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault();
      const email = e.target.email.value;
      const password =e.target.password.value;

      createNewUser(email,password)
      .then(result =>{
        const user = result.user
        setUser(user);
        navigate('/home')
      })
      .catch(Error => console.log(Error))
    }

    const [toggle,setToggle] = useState(false);
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
            <h3 className="text-2xl">Register You Account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input type="photo" placeholder="PhonoURl" name="photo" className="input input-bordered" required />
          </div>
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
            <input type={toggle ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
            <span onClick={()=>setToggle(!toggle)} className="absolute top-[60%] right-4">{toggle  ? <FaRegEyeSlash /> : <FaEye /> }</span>
          </div>
          <div className="form-control flex-row items-center gap-3">
  <label className="cursor-pointer label">
    <input type="checkbox" name="checkbox" className="checkbox checkbox-success" required/>
  </label><p className="label-text">Accept Terms and Conditions</p>
</div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">Already Have An Account  <Link to="/" className="text-red-500"> Login</Link></p>
      </div>
  
        </div>
    );
};

export default Register;