import img1 from "../assets/Expand_Arrow.png";

function FAQ (){
    return(
        <div className=" flex items-center justify-between mt-40 text-black ml-13 mr-13 gap-18">

            <div className="bg-gray-300 w-[650px] rounded-3xl h-[790px]">
                <button className="bg-[#C9E513] mx-12 my-14 p-1.5 rounded-xl">FAQ</button>
                <h1 className="mx-10 text-8xl font-semibold"> Everthing you need to know</h1>
                <p className="text-gray-500 text-[18px] mt-40 ml-14 font-medium">Have a custom question?</p>
                <p className="text-gray-500 text-[18px] ml-14 font-medium">Contact us anytime.</p>
                <button className="bg-black text-white ml-14  px-8.5 py-3.5 rounded-4xl mt-7">Contact Now</button>
            </div>

            <div>
                <div className="flex items-center justify-between mb-5 mr-10">
                    <p className="text-[25px] font-medium text-gray-400">1. How do I know which home is right for me?</p>
                    <img src={img1}></img>
                </div>
                <p className="text-[20px] mb-9 ">We start by learning about your lifestyle, budget, and what "home"
                    feels like you. From there, we guide you through options that 
                    genuinely fit your need.No pressure. No confustion. Just clarity.
                </p>
                <div className="border-1 border-gray-400 w-[830px]"></div>

                <div className="flex items-center justify-between mr-10">
                    <p className="text-[25px] font-medium my-8">2.Do you charge for the first consultation?</p>
                    <img src={img1}></img>
                </div>
                <div className="border-1 border-gray-400 w-[830px]"></div>


                <div  className="flex items-center justify-between mr-10">
                    <p className="text-[25px] font-medium my-8">3.Can you help first-time homebuyers?</p>
                    <img src={img1}></img>
                </div>
                <div className="border-1 border-gray-400 w-[830px]"></div>


                <div  className="flex items-center justify-between mr-10">
                    <p className="text-[25px] font-medium my-8">4.What areas do you work in?</p>
                    <img src={img1}></img>
                </div>
                <div className="border-1 border-gray-400 w-[830px]"></div>


                <div  className="flex items-center justify-between mr-10">
                    <p className="text-[25px] font-medium my-8 ">5.How long does the home-buying process usually take?</p>
                    <img src={img1}></img>
                </div>
                <div className="border-1 border-gray-400 w-[830px]"></div>


                <div  className="flex items-center justify-between mr-10">
                    <p className="text-[25px] font-medium my-8">6.Can I sell my current home through you too?</p>
                    <img src={img1}></img>
                </div>
                <div className="border-1 border-gray-400 w-[830px]"></div>


            </div>
        </div>
    );
}

export default FAQ;