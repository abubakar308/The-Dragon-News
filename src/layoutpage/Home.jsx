import { Outlet } from "react-router-dom";
import Category from "../component/Category";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Right from "../component/Right";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto my-5">
           <Header></Header>
           
           <Navbar></Navbar>
           <div className="grid grid-cols-12">
            <Category></Category>
        <Outlet></Outlet>
            <Right></Right>
           </div>
        </div>
    );
};

export default Home;