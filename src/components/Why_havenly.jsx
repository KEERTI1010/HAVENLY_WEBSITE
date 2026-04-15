import img1 from "../assets/Users.png";
import img2 from "../assets/Brains.png";
import img3 from "../assets/Like.png";
import img4 from "../assets/Handmade.png";

function Why_havenly(){
    return(
        <div className="text-black ml-[6.5vh] mr-[6.5vh] mt-[20vh]">
            <div className="">
                <h1 className="text-[6vw] font-semibold leading-[2vh] text-center">Why homebuvers</h1>
                <h1 className="text-[6vw] font-semibold text-center">trust havenly</h1>
            </div>

            <div className="flex items-center justify-between mt-[7.5vh] gap-[4.5vh]">
                <div className="bg-gray-300 rounded-[3vw] p-[5vh] w-[25%] h-[36vh]">
                    <img src={img1} className="ml-[10.5vh] bg-white rounded-full p-[3vh] w-[6vw] "></img>
                    <h2 className="text-[2vw] leading-[1.8vw] mt-[4vh] text-center  ">Human-First Apporch</h2>
                    <h3 className="text-[1vw] leading-[1.6vh] mt-[2vh] text-center text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>

                <div className="bg-gray-300 rounded-[3vw] p-[5vh] w-[25%] h-[36vh] mr-[43vh]">
                    <img src={img2} className="ml-[10.5vh] bg-white rounded-full p-[3vh] w-[6vw] "></img>
                    <h2 className="text-[2vw] leading-[1.8vw] mt-[4vh] text-center">Neighborhood Knowledge</h2>
                    <h3 className="text-[1vw] leading-[1.6vh] mt-[2vh] text-center text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="bg-gray-300 rounded-[3vw] p-[5vh] w-[25%] h-[36vh] ml-[43vh]">
                    <img src={img3} className="ml-[10.5vh] bg-white rounded-full p-[3vh] w-[6vw] "></img>
                    <h2 className="text-[2vw] leading-[1.8vw] mt-[4vh] text-center ">Clear, Honest information</h2>
                    <h3 className="text-[1vw] leading-[1.6vh] mt-[2vh] text-center text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>
                    
                <div className="bg-gray-300 rounded-[3vw] p-[5vh] w-[25%] h-[36vh]">
                    <img src={img4} className="ml-[10.5vh] bg-white rounded-full p-[3vh] w-[6vw] "></img>
                    <h2 className="text-[2vw] leading-[1.8vw] mt-[4vh] text-center ">Stress--Free Guidance</h2>
                    <h3 className="text-[1vw] leading-[1.6vh] mt-[2vh] text-center text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Why_havenly ;