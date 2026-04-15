import img1 from "../assets/Brand_logo_2.png";
import img2 from "../assets/Facebook.png";
import img3 from "../assets/Instagram.png";
import img4 from "../assets/LinkedIn.png";
import img5 from "../assets/YouTube.png";

function Footer (){
    return(
        <div className=" flex items-center justify-between mb-[25vh]  mx-[6.5vh] text-black">

            <div>
                <div className="flex items-center">
                    <img src={img1} className="w-[8vw]"></img>
                    <h1 className="text-[7vh] font-bold">Havenly</h1>
                </div>
                <p className="ml-[2vh] text-[1.7vw] text-gray-500 mt-[3vh] font-medium">Home with heart, guidance with clarity.</p>
            </div>

            <div>
                <div className="flex items-center justify-between bg-white mx-[1vh] mb-[3.2vw] mt-[2.8vw]">
                    <img src={img2} className="ml-[30vh] w-[3.5vw]"></img>
                    <img src={img3} className="w-[3.5vw]"></img>
                    <img src={img4} className="w-[3.5vw]"></img>
                    <img src={img5} className="bg-black rounded-[4vh] w-[3vw] p-[1vh]"></img>
                </div>
                <p className="ml-[3vh] text-[1.7vw] text-gray-500 mt-[3vh] font-medium">Legal: @ 2025 Havenly. All Rights Reserved.</p>
            </div>

        </div>
    );
}

export default Footer;