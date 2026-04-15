import img1 from "../assets/1st.png";
import img2 from "../assets/2nd.png";
import img3 from "../assets/3rd.png";
import img4 from "../assets/Go Back.png";


function Insight(){
    return(
        <div className="text-black ml-[6.5vh]  mr-[6.5vh] mt-[20vh]">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[6vw] font-semibold leading-[2vh]">Latest</h1>
                    <h1 className="text-[6vw] font-semibold"> Insights</h1>
                </div>
                <button className="bg-black text-white px-[2vw] py-[1vw] rounded-[3vh] text-[1vw]">View All Properties</button>
            </div>

            <div className="mt-[7.5vh] flex items-center justify-between gap-[1vh]">
                <div>
                    <img src={img1} className="w-[30vw] mb-[3vh]"></img>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[1.4vw] font-medium leading-[3vh]">How to know When it's the Right </p>
                            <p className="text-[1.4vw] font-medium">Time to Buy a Home</p>
                        </div>
                        <img src={img4} className="w-[3.3vw] bg-gray-400 rounded-[8vw]"></img>
                    </div>
                </div>

                <div>
                    <img src={img2} className="w-[30vw] mb-[3vh]"></img>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[1.4vw] font-medium leading-[3vh]">How to know When it's the Right </p>
                            <p className="text-[1.4vw] font-medium">Time to Buy a Home</p>
                        </div>
                        <img src={img4} className="w-[3.3vw] bg-gray-400 rounded-[8vw]" ></img>
                    </div>
                </div>

                <div>
                    <img src={img3} className="w-[30vw] mb-[3vh]"></img>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[1.4vw] font-medium leading-[3vh]">How to know When it's the Right </p>
                            <p className="text-[1.4vw] font-medium">Time to Buy a Home</p>
                        </div>
                        <img src={img4} className="w-[3.3vw] bg-gray-400 rounded-[8vw]"></img>
                    </div>
                </div>

            </div>
            
            <div className="border border-gray-400  mt-[14.5vh] mb-[15vh]"></div>

        </div>
    );
}

export default Insight;