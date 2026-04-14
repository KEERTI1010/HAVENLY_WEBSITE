import img1 from "../assets/SunSet_img.png";

function About (){
    return(
            <div>
                 <button className="bg-[#C9E513] rounded-4xl text-black ml-13 p-1 pl-4 pr-4 text-[16px] ">ABOUT US</button>
                    <div className="ml-96 text-[30px] font-medium ">
                        <p className="text-black">At Haven, we Believe a home is more than just walls-it's where lifestyle</p>
                        <p className="text-gray-800">happens.Our team blends passion, market insight, and a</p>
                        <p className="text-gray-600">personal touch to help every client feel confident and cared </p>
                        <p className="text-gray-400">for.From first-time buyers to seasoned investors, we make </p>
                        <p className="text-gray-200">property journeys simple and exciting.</p>
                    </div>

                <button className=" ml-96 mt-16 bg-black text-white p-3 pl-6 pr-6 rounded-4xl text-[18px]">Learn More</button>
                <img src={img1} className="ml-96 mt-24 mr-13"></img>
            </div>
    );
}

export default About;