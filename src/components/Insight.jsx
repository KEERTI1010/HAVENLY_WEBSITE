import img1 from "../assets/1st.png";
import img2 from "../assets/2nd.png";
import img3 from "../assets/3rd.png";
import img4 from "../assets/Go Back.png";


function Insight(){
    return(
        <div className="text-black ml-13  mr-13 mt-40">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[80px] font-semibold leading-4">Latest</h1>
                    <h1 className="text-[80px] font-semibold"> Insights</h1>
                </div>
                <button className="bg-black text-white px-8 py-3 rounded-3xl text-[15px]">View All Properties</button>
            </div>

            <div className="mt-15 flex items-center justify-between">
                <div>
                    <img src={img1} className="w-[450px] mb-6"></img>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[22px] font-medium leading-6">How to know When it's the Right </p>
                            <p className="text-[22px] font-medium">Time to Buy a Home</p>
                        </div>
                        <img src={img4} className=" bg-gray-400 rounded-full"></img>
                    </div>
                </div>

                <div>
                    <img src={img2} className="w-[450px] mb-6"></img>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[22px] font-medium leading-6">How to know When it's the Right </p>
                            <p className="text-[22px] font-medium">Time to Buy a Home</p>
                        </div>
                        <img src={img4} className=" bg-gray-400 rounded-full" ></img>
                    </div>
                </div>

                <div>
                    <img src={img3} className="w-[450px] mb-6"></img>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[22px] font-medium leading-6">How to know When it's the Right </p>
                            <p className="text-[22px] font-medium">Time to Buy a Home</p>
                        </div>
                        <img src={img4} className=" bg-gray-400 rounded-full"></img>
                    </div>
                </div>

            </div>
            
            <div className="border-1 border-gray-400 w- mt-25 mb-30"></div>

        </div>
    );
}

export default Insight;