import img1 from "../assets/Users.png";
import img2 from "../assets/Brains.png";
import img3 from "../assets/Like.png";
import img4 from "../assets/Handmade.png";

function Why_havenly(){
    return(
        <div className="text-black ml-13 mr-13 mt-40">
            <div className="">
                <h1 className="text-[80px] font-semibold leading-4 text-center">Why homebuyers</h1>
                <h1 className="text-[80px] font-semibold text-center">trust havenly</h1>
            </div>

            <div className="flex items-center justify-between mt-15 gap-9">
                <div className="bg-gray-300 rounded-4xl p-10 w-[340px] h-[300px]">
                    <img src={img1} className="ml-21 bg-white rounded-full p-6 "></img>
                    <h2 className="text-[28px] leading-6 mt-8 text-center  ">Human-First Apporch</h2>
                    <h3 className="text-[16px] leading-4 mt-4 text-center text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>

                <div className="bg-gray-300 rounded-4xl p-10 w-[340px] h-[300px] mr-90">
                    <img src={img2} className="ml-21 bg-white rounded-full p-6 "></img>
                    <h2 className="text-[28px] leading-6 mt-8 text-center">Neighborhood Knowledge</h2>
                    <h3 className="text-[16px] leading-4 mt-4 text-center  text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="bg-gray-300 rounded-4xl p-10 w-[340px] h-[300px] ml-90">
                    <img src={img3} className="ml-21 bg-white rounded-full p-6 "></img>
                    <h2 className="text-[28px] leading-6 mt-8 text-center ">Clear, Honest information</h2>
                    <h3 className="text-[16px] leading-4 mt-4 text-center  text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>
                    
                <div className="bg-gray-300 rounded-4xl p-10 w-[340px] h-[300px]">
                    <img src={img4} className="ml-21 bg-white rounded-full p-6 "></img>
                    <h2 className="text-[28px] leading-6 mt-8 text-center ">Stress--Free Guidance</h2>
                    <h3 className="text-[16px] leading-4 mt-4 text-center  text-gray-800">We Listen before we recommend.
                        Your comfort guides every step.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Why_havenly ;