import img1 from "../assets/bg_2.png";
import img2 from "../assets/1st_sis.png";
import img3 from "../assets/1st_bro.png";
import img4 from "../assets/2nd_sis.png";
import img5 from "../assets/2nd_bro.png";
import img6 from "../assets/Quote Left.png";
import img7 from "../assets/Go Back.png";

function Found (){
    return(
        <div className="text-white ml-[6.5vh] mr-[6.5vh] mt-[20vh]">

            <div className="text-black font-semibold text-[6vw]">
                <h1 className="leading-[2vh] text-center">Words from the</h1>
                <h1 className="text-center mb-[7.5vh]">People who found home</h1>
            </div>

            <div className=" flex items-center justify-between w-[92vw]  h-[40vw] bg-cover rounded-[3vh]" style={{ backgroundImage:`url(${img1})`}}>
                <div><img src={img2} className="ml-[6vh] mt-[65vh] w-[5vh] h-[3vw]"></img></div>
                <div><img src={img3} className="ml-[6vh] mt-[56vh] w-[10vh] h-[7vw]"></img></div>
                <div><img src={img4} className="ml-[6vh] mt-[46vh] w-[14vh] h-[11vw]"></img></div>
                <div><img src={img5} className="ml-[6vh] mt-[30vh] w-[28vh] h-[19vw]"></img></div>
                <div className="backdrop-blur-md w-[60vh] h-[65vh] m-[6.5vh] rounded-[3vh] border border-amber-100 border-y-3">
                    <img src={img6} className="m-[4vh] w-[4vw] h-[4vw]"></img>
                    <p className="m-[4vh] text-[1.8vw] leading-[4vh] font-medium">Havenly didn't just help us buy a house.
                        They helped us understand what we acutally needed.
                        every step felt clear.No pressure. Just honestly.
                        I'd recommend Havenly to anyone buying for the first time.
                    </p>
                    <div className="border-white border w-[54vh] m-[3vh]"></div>
                    <div className="flex items-center justify-between">
                        <div className="w-[26vw] h-[8vw]">
                            <p className="ml-[4vh] mt-[3vh] text-[1.3vw] font-medium">SAMIR REHAMAN</p>
                            <p  className="ml-[4vh] mb-[3vh] text-[1.3vw]">UIUX DESIGNER</p>
                        </div>
                        <img src={img7} className="mr-[4vh] w-[4vw] h-[4vw]"></img>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Found;