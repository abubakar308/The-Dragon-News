import moment from "moment";
import Marquee from "react-fast-marquee";
const Header = () => {
    const date = moment().format('dddd DD MM YYYY');
    return (
        <div>
            <div className="text-center">
           <h2>The Dragon News</h2>
            <p>Journalism without fear of favour</p>
            <p>{date}</p>
           </div>
   <div className="bg-gray-300 flex gap-3 p-2">
    <button className="bg-red-400 p-2">Latest</button>
    <Marquee>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consequuntur corporis asperiores veniam est corrupti suscipit assumenda odit quidem eveniet!</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consequuntur corporis asperiores veniam est corrupti suscipit assumenda odit quidem eveniet!</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consequuntur corporis asperiores veniam est corrupti suscipit assumenda odit quidem eveniet!</p>
        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consequuntur corporis asperiores veniam est corrupti suscipit assumenda odit quidem eveniet!</p>
    </Marquee>
   </div>
        </div>
    );
};

export default Header;