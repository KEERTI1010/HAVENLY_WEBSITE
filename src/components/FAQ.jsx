import img1 from "../assets/Expand_Arrow.png";

function FAQ (){
    return(
        <div className=" flex items-center justify-between mt-[20vh] text-black ml-[6.5vh] mr-[6.5vh] gap-[9vh]">

            <div className="bg-gray-300 w-[410vw] rounded-[3vh] h-[50vw]">
                <button className="bg-[#C9E513] mx-[6vh] my-[6vh] p-[1vh] w-[4vw] h-[2.5vw] text-[1vw] rounded-[1vh]">FAQ</button>
                <h1 className="mx-[5vh] text-[6vw] font-semibold leading-[6vw] w-[29vw] h-[15vw]"> Everthing you need to know</h1>
                <p className="text-gray-500 text-[1.5vw] mt-[20vh] ml-14 font-medium w-[18vw] h-[2vw]">Have a custom question?</p>
                <p className="text-gray-500 text-[1.5vw] ml-[7vh] font-medium w-[18vw] h-[2vw]">Contact us anytime.</p>
                <button className="bg-black text-white ml-[7vh] w-[11vw] h-[4vw] px-[4vh] py-[2vh] rounded-[4vh] mt-[3.5vh] text-[1.1vw]">Contact Now</button>
            </div>

            <div>
                <div className="flex items-center justify-between mb-[2.5vh] mr-[8vh]">
                    <p className="text-[1.8vw] font-medium text-gray-400 w-[38vw] h-[2.5vw]">1. How do I know which home is right for me?</p>
                    <img src={img1} className="w-[2vw] h-[2vw]"></img>
                </div>
                <p className="text-[1.2vw] mb-[4.5vh] w-[51vw]">We start by learning about your lifestyle, budget, and what "home"
                    feels like you. From there, we guide you through options that 
                    genuinely fit your need.No pressure. No confustion. Just clarity.
                </p>
                <div className="border border-gray-400 w-[51vw]"></div>

                <div className="flex items-center justify-between mr-[8vh]">
                    <p className="text-[1.8vw] font-medium my-[4vh]">2.Do you charge for the first consultation?</p>
                    <img src={img1}  className="w-[2vw] h-[2vw]"></img>
                </div>
                <div className="border border-gray-400 w-[51vw]"></div>


                <div  className="flex items-center justify-between mr-[8vh]">
                    <p className="text-[1.8vw] font-medium my-[4vh]">3.Can you help first-time homebuyers?</p>
                    <img src={img1} className="w-[2vw] h-[2vw]"></img>
                </div>
                <div className="border border-gray-400 w-[51vw]"></div>


                <div  className="flex items-center justify-between mr-[8vh]">
                    <p className="text-[1.8vw] font-medium my-[4vh]">4.What areas do you work in?</p>
                    <img src={img1} className="w-[2vw] h-[2vw]"></img>
                </div>
                <div className="border border-gray-400 w-[51vw]"></div>


                <div  className="flex items-center justify-between mr-[8vh]">
                    <p className="text-[1.8vw] font-medium my-[4vh] ">5.How long does the home-buying process usually take?</p>
                    <img src={img1} className="w-[2vw] h-[2vw]"></img>
                </div>
                <div className="border border-gray-400 w-[51vw]"></div>


                <div  className="flex items-center justify-between mr-[8vh]">
                    <p className="text-[1.8vw] font-medium my-[4vh]">6.Can I sell my current home through you too?</p>
                    <img src={img1} className="w-[2vw] "></img>
                </div>
                <div className="border border-gray-400 w-[51vw]"></div>


            </div>
        </div>
    );
}

export default FAQ;