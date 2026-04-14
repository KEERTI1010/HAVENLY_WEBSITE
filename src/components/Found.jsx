import img1 from "../assets/bg_2.png";
import img2 from "../assets/1st_sis.png";
import img3 from "../assets/1st_bro.png";
import img4 from "../assets/2nd_sis.png";
import img5 from "../assets/2nd_bro.png";
import img6 from "../assets/Quote Left.png";
import img7 from "../assets/Go Back.png";

function Found (){
    return(
        <div className="text-white ml-13 mr-13 mt-40">

            <div className="text-black font-semibold text-[80px]">
                <h1 className="leading-10 text-center">Words from the</h1>
                <h1 className="text-center mb-15">People who found home</h1>
            </div>

            <div className=" flex items-center justify-between w-[1410px]  h-[650px] bg-cover rounded-3xl" style={{ backgroundImage:`url(${img1})`}}>
                <div><img src={img2} className="ml-12 mt-130"></img></div>
                <div><img src={img3} className="ml-12 mt-115"></img></div>
                <div><img src={img4} className="ml-12 mt-95"></img></div>
                <div><img src={img5} className="ml-12 mt-60"></img></div>
                <div className="backdrop-blur-md w-[550px] h-[550px] m-13 rounded-3xl border-1 border-amber-100 border-y-3">
                    <img src={img6} className="m-8"></img>
                    <p className="m-8 text-[28px] leading-9 font-medium">Havenly didn't just help us buy a house.
                        They helped us understand what we acutally needed.
                        every step felt clear.No pressure. Just honestly.
                        I'd recommend Havenly to anyone buying for the first time.
                    </p>
                    <div className="border-white border-1 w-[500px] m-6"></div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="ml-8 mt-6 text-[20px] font-medium">SAMIR REHAMAN</p>
                            <p  className="ml-8 mb-6 text-[20px]">UIUX DESIGNER</p>
                        </div>
                        <img src={img7} className="mr-8"></img>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Found;