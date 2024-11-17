import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
  const handleLogOut = () =>{
    logOut()
    .then(res=>{
        navigate('/')
        console.log(res)
        return toast.success("Success Notification !")
    })
    .catch(Error=>console.log(Error))
  }
    return (
        <div className='flex justify-between items-center py-3'>
            <ToastContainer></ToastContainer>
            <div>{user?.email}</div>
            <ul className='flex gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Careeer</li>
            </ul>
           <div className="flex items-center gap-3"> <FaUser></FaUser>
           <button onClick={handleLogOut} className="bg-gray-300 p-2 font-semibold"> Logout</button>
           </div>
           
        </div>
    );
};

export default Navbar;