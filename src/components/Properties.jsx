import img1 from "../assets/1st_one.png";
import img2 from "../assets/2nd_one.png";
import img3 from "../assets/3rd_one.png";
import img4 from "../assets/Location.png";
import img5 from "../assets/Bedroom.png";
import img6 from "../assets/Bathtub.png";
import img7 from "../assets/Rhombus.png";


function Properties (){
    return(
        <div className="bg-white text-white ml-[6.5vh] mt-[20vh] mr-[6.5vh]">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[6vw] font-semibold text-black leading-[2vh]">Featured</h1>
                    <h1 className="text-[6vw] font-semibold text-black">Properties</h1>
                </div>
                <button className="bg-black text-white p-[2vh] rounded-[4vw] text-[1.1vw] ">View All Properties</button>
            </div>

            <div className="grid grid-cols-3 gap-[3vh] px-[2vh]  mt-[7.5vh]">
                <div className="h-[42vw]  rounded-[2vw] bg-cover bg-center"
                    style={{ backgroundImage: `url(${img1})` }}>
                        <div className="backdrop-blur-[0.5vh] w-[25.6vw] h-[12vw] mx-[3vh] mt-[28vw] border border-white/30 rounded-[2vw] ">
                            <h1 className="pt-[1.5vw] pl-[1.5vw] text-[1.6vw] font-medium">Maple Grove Residence</h1>
                            <div className="flex items-center w-[34vw] h-[1.4vw] gap-[0.2vw]  pl-[1.5vw] ">
                                <img src={img4} className="w-[2.5vh] h-[1.3vw]"></img>
                                <p className="mr-[25vh] text-[1vw]">Willow Park District</p>
                            </div>
                            <div className="flex items-center justify-between mr-[12.5vh] pl-[2.5vh] pt-[1.5vh]">
                                <div className="flex items-center justify-between w-[5.3vw] h-[1vw] gap-[1.5vh]">
                                    <img src={img5} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">3 beds</h3>
                                </div>
                                <div className="flex items-center justify-between gap-[1.5vh]">
                                    <img src={img6} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">2 baths</h3>
                                </div>
                                <div className="flex items-center justify-between gap-[0.5vh]">
                                    <img src={img7} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">2 beds</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-[2vh] w-[25vw] h-[3vw] mb-[1.5vh]">
                                <h2 className="text-[1.6vw] mt-[1.5vh] font-medium">$12,300</h2>
                                <button className="bg-[#C9E513] rounded-[3vw] text-black ml-[6.5vh] py-[1vh] px-[2vh] w-[6vw] h-[2.5vw] text-[1.5vh] ">Book Now</button>
                            </div>
                        </div>
                </div>

                <div className="h-[42vw] rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${img2})` }}>
                        <div className="backdrop-blur-[0.5vh] w-[25.6vw] h-[12vw] mx-[3vh] mt-[28vw] border border-white/30 rounded-[2vw] ">
                            <h1 className="pt-[1.5vw] pl-[1.5vw] text-[1.6vw] font-medium">Maple Grove Residence</h1>
                            <div className="flex items-center  gap-[0.2vw] w-[34vw] h-[1.4vw] pl-[1.5vw] ">
                                <img src={img4} className="w-[2.5vh] h-[1.3vw]"></img>
                                <p className="mr-[25vh] text-[1vw]">Willow Park District</p>
                            </div>
                            <div className="flex items-center justify-between mr-[12.5vh] pl-[2.5vh] pt-[1.5vh]">
                                <div className="flex items-center justify-between w-[5.3vw] h-[1vw] gap-[1.5vh]">
                                    <img src={img5} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">3 beds</h3>
                                </div>
                                <div className="flex items-center justify-between gap-[1.5vh]">
                                    <img src={img6} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">2 baths</h3>
                                </div>
                                <div className="flex items-center justify-between gap-[0.5vh]">
                                    <img src={img7} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">2 beds</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-[2vh] w-[25vw] h-[3vw] mb-[1.5vh]">
                                <h2 className="text-[1.6vw] mt-[1.5vh] font-medium">$12,300</h2>
                                <button className="bg-[#C9E513] rounded-[3vw] text-black ml-[6.5vh] py-[1vh] px-[2vh] w-[6vw] h-[2.5vw] text-[1.5vh] ">Book Now</button>
                            </div>
                        </div>
                </div>

                <div className="h-[42vw]  rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${img3})` }}>
                         <div className="backdrop-blur-[0.5vh] w-[25.6vw] h-[12vw] mx-[3vh] mt-[28vw] border border-white/30 rounded-[2vw] ">
                            <h1 className="pt-[1.5vw] pl-[1.5vw] text-[1.6vw] font-medium">Maple Grove Residence</h1>
                            <div className="flex items-center  gap-[0.2vw] w-[34vw] h-[1.4vw] pl-[1.5vw] ">
                                <img src={img4} className="w-[2.5vh] h-[1.3vw]"></img>
                                <p className="mr-[25vh] text-[1vw]">Willow Park District</p>
                            </div>
                            <div className="flex items-center justify-between mr-[12.5vh] pl-[2.5vh] pt-[1.5vh]">
                                <div className="flex items-center justify-between w-[5.3vw] h-[1vw] gap-[1.5vh]">
                                    <img src={img5} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">3 beds</h3>
                                </div>
                                <div className="flex items-center justify-between gap-[1.5vh]">
                                    <img src={img6} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">2 baths</h3>
                                </div>
                                <div className="flex items-center justify-between gap-[0.5vh]">
                                    <img src={img7} className="w-[2.5vh] h-[1.3vw]"></img>
                                    <h3 className="text-[1vw]">2 beds</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-[2vh] w-[25vw] h-[3vw] mb-[1.5vh]">
                                <h2 className="text-[1.6vw] mt-[1.5vh] font-medium">$12,300</h2>
                                <button className="bg-[#C9E513] rounded-[3vw] text-black ml-[6.5vh] py-[1vh] px-[2vh] w-[6vw] h-[2.5vw] text-[1.5vh] ">Book Now</button>
                            </div>
                        </div>
                </div>

            </div>
w-[6vw] h-[2.5vw]
        </div>
    );
}

export default Properties;