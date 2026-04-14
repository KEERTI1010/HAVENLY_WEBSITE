import img1 from "../assets/1st_one.png";
import img2 from "../assets/2nd_one.png";
import img3 from "../assets/3rd_one.png";
import img4 from "../assets/Location.png";
import img5 from "../assets/Bedroom.png";
import img6 from "../assets/Bathtub.png";
import img7 from "../assets/Rhombus.png";


function Properties (){
    return(
        <div className="bg-white text-white ml-13 mt-40 mr-13">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[80px] font-semibold text-black leading-4">Featured</h1>
                    <h1 className="text-[80px] font-semibold text-black">Properties</h1>
                </div>
                <button className="bg-black text-white p-4 rounded-4xl text-[17px] ">View All Properties</button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-15">
                <div className="h-[650px] rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${img1})` }}>
                        <div className="backdrop-blur-xs mx-6 mt-[450px] border border-white/30 rounded-3xl ">
                            <h1 className="pt-4 pl-5 text-[29px] font-medium">Maple Grove Residence</h1>
                            <div className="flex items-center justify-between  pl-5 ">
                                <img src={img4}></img>
                                <p className="mr-55">Willow Park District</p>
                            </div>
                            <div className="flex items-center justify-between mr-25 pl-5 pt-3">
                                <div className="flex items-center justify-between gap-3">
                                    <img src={img5}></img>
                                    <h3>3 beds</h3>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <img src={img6}></img>
                                    <h3>2 baths</h3>
                                </div>
                                <div className="flex items-center justify-between gap-1">
                                    <img src={img7}></img>
                                    <h3>2 beds</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-5 mb-3">
                                <h2 className="text-[26px] mt-3 font-medium">$12,300</h2>
                                <button className="bg-[#C9E513] rounded-4xl text-black ml-13 py-2 px-4 text-[12px] ">Book Now</button>
                            </div>
                        </div>
                </div>

                <div className="h-[650px] rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${img2})` }}>
                         <div className="backdrop-blur-xs mx-6 mt-[450px] border border-white/30 rounded-3xl ">
                            <h1 className="pt-4 pl-5 text-[29px] font-medium">Maple Grove Residence</h1>
                            <div className="flex items-center justify-between  pl-5 ">
                                <img src={img4}></img>
                                <p className="mr-55">Willow Park District</p>
                            </div>
                            <div className="flex items-center justify-between mr-25 pl-5 pt-3">
                                <div className="flex items-center justify-between gap-3">
                                    <img src={img5}></img>
                                    <h3>3 beds</h3>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <img src={img6}></img>
                                    <h3>2 baths</h3>
                                </div>
                                <div className="flex items-center justify-between gap-1">
                                    <img src={img7}></img>
                                    <h3>2 beds</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-5 mb-3">
                                <h2 className="text-[26px] mt-3 font-medium">$12,300</h2>
                                <button className="bg-[#C9E513] rounded-4xl text-black ml-13 py-2 px-4 text-[12px] ">Book Now</button>
                            </div>
                        </div>
                </div>

                <div className="h-[650px] rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${img3})` }}>
                         <div className="backdrop-blur-xs mx-6 mt-[450px] border border-white/30 rounded-3xl ">
                            <h1 className="pt-4 pl-5 text-[29px] font-medium">Maple Grove Residence</h1>
                            <div className="flex items-center justify-between  pl-5 ">
                                <img src={img4}></img>
                                <p className="mr-55">Willow Park District</p>
                            </div>
                            <div className="flex items-center justify-between mr-25 pl-5 pt-3">
                                <div className="flex items-center justify-between gap-3">
                                    <img src={img5}></img>
                                    <h3>3 beds</h3>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <img src={img6}></img>
                                    <h3>2 baths</h3>
                                </div>
                                <div className="flex items-center justify-between gap-1">
                                    <img src={img7}></img>
                                    <h3>2 beds</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-5 mb-3">
                                <h2 className="text-[26px] mt-3 font-medium">$12,300</h2>
                                <button className="bg-[#C9E513] rounded-4xl text-black ml-13 py-2 px-4 text-[12px] ">Book Now</button>
                            </div>
                        </div>
                </div>

            </div>

        </div>
    );
}

export default Properties;