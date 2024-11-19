export default function Styles(){
    return(
        <div>
            <div className="w-full md:h-[896px] xs:h-[1000px] flex items-center justify-center">
                <div className=" xs:h-[995px] xs:w-[358px] md:w-[1239px] md:h-[866px] bg-[#F0F0F0] font-black text-center rounded-[40px] flex flex-col xs:gap-4  md:gap-8 overflow-hidden md:px-12 md:py-14 xs:py-6 xs:px-6">
                    <div className="xs:w-[286px] xs:h-[72px] xs:ml-6 md:w-full "><h1 className="xs:leading-[36px] xs:text-[32px] md:text-[48px] font-extrabold font-integral-cf tracking-tighter">BROWSE BY DRESS STYLE</h1></div>
                    <div className="md:flex-row md:h-[290px] w-full flex gap-4 xs:flex-col">
                        <div className="xs:w-full md:w-[40%] h-full rounded-[20px]">
                            <img src="/casual.png" alt="Casual Shirts" className="md:w-full md:h-full xs:h-[200px] w-[310px]"/>
                        </div>
                        <div className="xs:w-full md:w-[60%] h-full rounded-[20px]">
                            <img src="/formal.png" alt="Formal Shirts" className="md:h-full md:w-full xs:h-[200px] xs:w-[310px]"/>
                        </div>
                    </div>
                    <div className="h-[290px] w-full flex gap-4 xs:flex-col md:flex-row">
                        <div className="md:w-[60%] h-full">
                            <img src="/party.png" alt="Party" className="md:h-full md:w-full xs:h-[200px] w-[310px]"/>
                        </div>
                        <div className="md:w-[40%] h-full">
                            <img src="/gym.png" alt="Sports" className="md:w-full md:h-full  xs:h-[200px] w-[310px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}