import img1 from "../assets/Brand_logo_2.png";
import img2 from "../assets/Facebook.png";
import img3 from "../assets/Instagram.png";
import img4 from "../assets/Linkedin.png";
import img5 from "../assets/YouTube.png";

function Footer (){
    return(
        <div className=" flex items-center justify-between mb-50  mx-13 text-black">

            <div>
                <div className="flex items-center">
                    <img src={img1}></img>
                    <h1 className="text-6xl font-bold">Havenly</h1>
                </div>
                <p className="ml-6 text-[22px] text-gray-500 mt-6 font-medium">Home with heart, guidance with clarity.</p>
            </div>

            <div>
                <div className="flex items-center justify-between bg-white mx-2">
                    <img src={img2} className="ml-60"></img>
                    <img src={img3}></img>
                    <img src={img4}></img>
                    <img src={img5} className="bg-black rounded-4xl p-2"></img>
                </div>
                <p className="ml-6 text-[22px] text-gray-500 mt-6 font-medium">Legal: @ 2025 Havenly. All Rights Reserved.</p>
            </div>

        </div>
    );
}

export default Footer;