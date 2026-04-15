import img1 from "../assets/SunSet_img.png";

function About (){
    return(
            <div className="mx-[6.5vh] ">
                 <button className="bg-[#C9E513] rounded-[4vw] text-black p-[0.5vw] pl-[2vw] pr-[2vw] text-[1vw] ">ABOUT US</button>
                    <div className="ml-[47vh] text-[2.2vw] font-medium ">
                        <span className="text-black">At Haven, we Believe a home is more than just walls-it's where life</span>
                        <span className="text-gray-800">happens.Our team blends passion, market insight, and a </span>
                        <span className="text-gray-600">personal touch to help every client feel confident and cared   </span>
                        <span className="text-gray-400">for. From first-time buyers to seasoned investors, we make</span>
                        <span className="text-gray-200">property journey were memorable,  simple and exciting.</span>
                    </div>

                <button className=" ml-[47vh] mt-[8vh] bg-black text-white p-[1vw] pl-[2vw] pr-[2vw] rounded-[4vw] text-[1.2vw]">Learn More</button>
                <img src={img1} className="ml-[47vh] w-[66vw] mt-[13vh] h-[18vw] mr-[6.5vh]"></img>
            </div>
    );
}

export default About;