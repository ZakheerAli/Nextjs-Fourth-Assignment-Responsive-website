import 'remixicon/fonts/remixicon.css'
export default function Customers(){
    return(
        <div>
            <div className="w-full md:px-16 md:py-16 xs:px-5 xs:py-9 font-black md:flex md:flex-col gap-10">
                <div><h1 className="xs:mb-6 xs:text-[32px] md:text-[48px] font-extrabold tracking-tighter xs:leading-[36px]">OUR HAPPY CUSTOMERS</h1></div>
                <div className="h-[250px] w-full flex gap-4">
                    <div className="h-full md:w-[33.3%] rounded-[20px] border-2 border-gray-300 px-10 py-8 flex flex-col gap-3">
                        <div className="flex">
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                        </div>
                        <div><p className="text-[20px] font-bold font-satoshi">Sarah M. <i className="ri-checkbox-circle-fill"></i></p></div>
                        <p className="font-satoshi text-sm leading-[22px] font-normal text-[#00000099]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className=" xs:hidden h-full w-[33.3%] border-2 border-gray-300 rounded-[20px] px-10 py-8 md:flex flex-col gap-3">
                    <div className="flex">
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                        </div>
                        <div><p className="text-[20px] font-bold font-satoshi">Alex K.  <i className="ri-checkbox-circle-fill"></i></p></div>
                        <p className="font-satoshi text-sm leading-[22px] font-normal text-[#00000099]">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                    <div className="xs:hidden h-full w-[33.3%] border-2 border-gray-300 rounded-[20px] px-10 py-8 md:flex flex-col gap-3">
                    <div className="flex">
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                            <img src="/Star1.png" alt="" />
                        </div>
                        <div><p className="text-[20px] font-bold font-satoshi">James L.  <i className="ri-checkbox-circle-fill"></i></p></div>
                        <p className="font-satoshi text-sm leading-[22px] font-normal text-[#00000099]">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    </div>

                </div>
            </div>
        </div>
    )
}