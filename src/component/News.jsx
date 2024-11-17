/* eslint-disable react-hooks/rules-of-hooks */
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const singleNews = () => {
    const singleNews = useLoaderData();
    const { data } = singleNews
    console.log(data)
    return (
        <div className="col-span-6">
           {
           data.length===0? <p>No data</p> :
           data.map(singleNews=> <div className="p-3" key={singleNews._id}> 
            <div className="card w-full bg-base-100 shadow-xl">
      {/* Card Header */}
      <div className="flex items-center p-4">
        <img
          src={singleNews.author?.img} // Replace with author image URL
          alt="Author"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold">{singleNews.author.name}</h2>
          <p className="text-xs text-gray-500">{singleNews.author.published_date}</p>
        </div>
        <FaShareAlt className="ml-auto text-gray-500 cursor-pointer" />
      </div>

      {/* Card Body */}
      <div className="px-4">
        <h3 className="text-lg font-semibold mb-2">
         {singleNews.title}
        </h3>
        <img
          src={singleNews.thumbnail_url} // Replace with singleNews image URL
          alt="singleNews"
          className="w-full object-cover p-5 rounded-lg mb-3"
        />
        <p className="text-sm text-gray-500">
           {singleNews.details.slice(0,100)}... <Link to="/" className="text-blue-600 font-medium">Read More</Link>
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="font-semibold text-gray-700">{singleNews.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{singleNews.total_view}</span>
        </div>
      </div>
    </div>
            </div>)
           }
        </div>
    );
};

export default singleNews;