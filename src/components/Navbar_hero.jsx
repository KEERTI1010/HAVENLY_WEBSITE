import img1 from "../assets/Hero_Img.png";
import img2 from "../assets/Brand_logo.png";
import img3 from "../assets/Search_Button.png";
import img4 from "../assets/Favorites Shield.png";
import img5 from "../assets/4 dots_2.png";


function Navbar_hero (){
    return(
        <div className="font-sans relative bg-white  text-white">
            <div className="w-[1521.5px] h-[1084px] bg-cover" style={{ backgroundImage:`url(${img1})`}}>
                
                <div className=" flex  items-center justify-between text-white ">

                    <div className="flex items-center gap-3.5 ml-13 pt-2">
                        <img src={img2} className="h-[80px] w-[80px]"></img>
                        <h1 className="text-[40px] font-medium">Havenly</h1>
                    </div>
                    
                    <div className="flex items-center gap-[80px] mt-4 text-[16px] ">
                        <h3 className="">Properties</h3>
                        <h3>About</h3>
                        <h3>Why Heavenly</h3>
                        <h3>Testinomial</h3>
                        <h3>Contact</h3>
                    </div>

                    <div className="flex items-center gap-3.5 mr-11 mt-2 pt-2">
                        <img src={img3}></img>
                        <button className="bg-white rounded-4xl text-black p-3 pl-5 pr-5 text-[18px]">Book Now</button>
                    </div>

                </div>

                <div className="ml-[1040px] rounded-3xl mr-33  backdrop-blur-md p-6 mt-[80px] border-t-2 border-b-2 border-white">
                    <div flex>
                        <h1 className="text-[23px] leading-11">The Skyline Residence</h1>
                        <p className="text-[14px] leading-4">Breath taking Views, smart home features, and spaces designed for your lifestyle</p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button className="bg-white text-black p-2 pl-3 pr-3 text-[14px] rounded-4xl ">Explore This Home</button>
                        <img src={img5} className="w-[46px] mr-2 "></img>
                        </div>
                    </div>

                <div className="ml-13">
                    <div>
                        <h1 className="text-[90px]  font-semibold leading-[0.3]">Find a home that</h1>
                        <h1 className="text-[90px] font-semibold ">feels like Haven</h1>
                    </div>

                    <div className="flex items-center gap-7">
                        <button className="bg-white rounded-4xl text-black p-3 pl-5 pr-5 text-[18px] ">View Available Properties</button>
                        <button className="border-2 rounded-4xl p-3 pl-5 pr-5 border-white text-[18px]">Start Your Home Journey</button>
                    </div>

                    <div className="flex items-center mt-16 gap-3 text-[19.5px]">
                        <img src={img4}></img>
                        <p>Trusted by families , first-time buyers , and professionals across the city.</p>
                    </div>
                </div>

                <h1 className="ml-10 mr-13 text-[330px] font-bold text-[#C9E513] ">Havenlv..</h1>
            </div>

            <div className="flex items-center justify-between text-black ml-13 mr-13 mt-25 mb-25 gap-14">
                <div className="flex items-center gap-2">
                    <h2 className="text-[60px] font-semibold">500+</h2>
                    <h3 className="text-[19px] text-[#6C6868] font-medium leading-5">HOME SOLD & RENTED</h3>
                </div>

                <div className="flex items-center gap-2">
                    <h2 className="text-[60px] font-semibold">98%</h2>
                    <h3 className="text-[19px] text-[#6C6868] font-medium leading-5">CUSTOMER SATISFACTION RATE</h3>
                </div>

                <div className="flex items-center gap-2">
                    <h2 className="text-[60px] font-semibold">10+</h2>
                    <h3 className="text-[19px] text-[#6C6868] font-medium leading-5">YEARS OF LOCAL MARKET EXPERTISE</h3>
                </div>

                <div className="flex items-center gap-2">
                    <h2 className="text-[60px] font-semibold">300+</h2>
                    <h3 className="text-[19px] text-[#6C6868] font-medium leading-5">HAPPY FAMILIES SERVED</h3>
                </div>

            </div>

            <div className="border-1 border-gray-400 mx-13 mt-25 mb-30"></div>
                
        </div>
    );
}

export default Navbar_hero;