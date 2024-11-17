import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=> setCategories(data.data.news_category))
    },[])
    console.log(categories)
    return (
        <div className="col-span-3 space-y-3">
            <p className="text-xl font-semibold">All Category</p>
{
    categories.map(category => <div className="py-2" key={category.category_id}> <NavLink className='bg-gray-400 rounded-2xl p-2' to={`${category.category_id}`}> {category.category_name}</NavLink> </div>)
}
        </div>
    );
};

export default Category;