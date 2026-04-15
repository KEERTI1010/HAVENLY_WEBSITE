import img1 from "../assets/Hero_Img.png";
import img2 from "../assets/Brand_logo.png";
import img3 from "../assets/Search_Button.png";
import img4 from "../assets/Favorites Shield.png";
import img5 from "../assets/4 dots_2.png";


function Navbar_hero (){
    return(
        <div className="font-sans relative bg-white  text-white">
            <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage:`url(${img1})`}}>
                
                <div className=" flex  items-center justify-between text-white ">

                    <div className="flex items-center gap-[5%] ml-[6.5vh] pt-[1vw]">
                        <img src={img2} className="w-[5.2vw]"></img>
                        <h1 className="text-[3.5vw] font-medium">Havenly</h1>
                    </div>
                    
                    <div className="flex items-center gap-[6vw] mt-[2vh] text-[1.1vw] ">
                        <h3 className="">Properties</h3>
                        <h3>About</h3>
                        <h3>Why Heavenly</h3>
                        <h3>Testinomial</h3>
                        <h3>Contact</h3>
                    </div>

                    <div className="flex items-center gap-[1vw] mr-[5vh] mt-[1vh] pt-[1vw]">
                        <img src={img3} className="w-[3.5vw]"></img>
                        <button className="bg-white rounded-[4vw] text-black p-[1vw] px-[1.3vw]  text-[1.2vw]">Book Now</button>
                    </div>

                </div>

                <div className="ml-[68vw] rounded-[3vw] mr-[15vh] w-[23vw] h-[15vw] backdrop-blur-md p-[2vw] mt-[7vw] border-t-2 border-b-2 border-white">
                    <div flex>
                        <h1 className="text-[1.5vw] leading-[3vw]">The Skyline Residence</h1>
                        <p className="text-[1vw] leading-[1vw]">Breath taking Views, smart home features, and spaces designed for your lifestyle</p>
                    </div>
                    <div className="flex items-center justify-between mt-[3vh] gap-[2vw]">
                        <button className="bg-white text-black p-[0.5vw] px-[1.1vw] text-[1vw] rounded-[4vw] whitespace-nowrap">Explore This Home</button>
                        <img src={img5} className="w-[20%] mr-[1vh] "></img>
                        </div>
                    </div>

                <div className="ml-[6.5vh]">
                    <div>
                        <h1 className="text-[6.5vw]  font-semibold leading-[1vw]">Find a home that</h1>
                        <h1 className="text-[6.5vw] font-semibold ">feels like Haven</h1>
                    </div>

                    <div className="flex items-center gap-[2vw]">
                        <button className="bg-white rounded-[4vw] text-black p-[1vw] px-[1.5vw] text-[1.2vw] ">View Available Properties</button>
                        <button className="border-2 rounded-[4vw] py-[1vw] px-[1.5vw] border-white text-[1.2vw]">Start Your Home Journey</button>
                    </div>

                    <div className="flex items-center mt-[6vw] gap-[1vw]  text-[1.3vw]">
                        <img src={img4}></img>
                        <p>Trusted by families , first-time buyers , and professionals across the city.</p>
                    </div>
                </div>

                <h1 className="text-[24vw] text-center font-bold text-[#C9E513] ">Havenlv</h1>
            </div>

            <div className="flex items-center justify-between text-black ml-[6.5vh] mr-[6.5vh] mt-[13vh] mb-[13vh] gap-[3vw]">
                <div className="flex items-center gap-[1vw]">
                    <h2 className="text-[4vw] font-semibold">500+</h2>
                    <h3 className="text-[1.2vw] text-[#6C6868] font-medium leading-[1.5vw]">HOME SOLD & RENTED</h3>
                </div>

                <div className="flex items-center gap-[1vw]">
                    <h2 className="text-[4vw] font-semibold">98%</h2>
                    <h3 className="text-[1.2vw] text-[#6C6868] font-medium leading-[1.5vw]">CUSTOMER SATISFACTION RATE</h3>
                </div>

                <div className="flex items-center gap-[1vw]">
                    <h2 className="text-[4vw] font-semibold">10+</h2>
                    <h3 className="text-[1.2vw] text-[#6C6868] font-medium leading-[1.5vw]">YEARS OF LOCAL MARKET EXPERTISE</h3>
                </div>

                <div className="flex items-center gap-[1vw]">
                    <h2 className="text-[4vw] font-semibold">300+</h2>
                    <h3 className="text-[1.2vw] text-[#6C6868] font-medium leading-[1.5vw]">HAPPY FAMILIES SERVED</h3>
                </div>

            </div>

            <div className=" border-gray-400 border  mx-[6.5vh] mt-[14vh] mb-[15vh]"></div>
                
        </div>
    );
}

export default Navbar_hero;