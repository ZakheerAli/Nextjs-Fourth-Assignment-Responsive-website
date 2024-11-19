export default function Arrivals(){
    return(
        <div>
            <div className="w-full text-black pt-10 font-black md:pl-20 pb-12 ">
                <h1 className="font-integral-cf tracking-tighter font-extrabold md:text-[48px] xs:text-[34px] text-center">NEW ARRIVALS</h1>
                <div className="w-[100%] md:h-[460px] mt-10 flex gap-2 xs:px-2">
                    <div className=" xs:w-[50%] md:w-[25%] h-full flex flex-col md:gap-3 xs:gap-2">
                        <div><img src="/Frame1.png" alt="Shirt" className="xs:h-[210px] md:h-full" /></div>
                        <div><p  className="font-satoshi md:text-xl font-bold xs:text-sm">T-shirt with Tape Details</p></div>
                        <div className="w-[160px] h-[22px] flex items-center xs:gap-1 md:gap-2">
                            <div className="w-[120px] flex  overflow-hidden xs:gap-1 md:gap-2">
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            </div>
                            <div className="w-[33px]"><p className="font-satoshi font-normal text-sm">4.5/<span className="opacity-60">5</span></p></div>
                        </div>
                        <div><p className="md:text-2xl xs:text-xl font-bold font-satoshi">$120</p></div>
                    </div>
                    <div className=" xs:w-[50%] md:w-[25%] h-full flex flex-col md:gap-3 xs:gap-2">
                        <div><img src="/Frame2.png" alt="Paint" className="xs:h-[210px] md:h-full" /></div>
                        <div><p  className="font-satoshi md:text-xl font-bold xs:text-sm">Skinny Fit Jeans</p></div>
                        <div className="w-[147px] h-[19px] flex xs:gap-1 md:gap-2">
                        <div className="w-[120px] flex  overflow-hidden xs:gap-1 md:gap-2">
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            </div>
                            <div className="w-[33px]"><p className="font-satoshi font-normal text-sm">3.5/<span className="opacity-60">5</span></p></div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <p className="md:text-2xl xs:text-xl font-bold font-satoshi">$240 <span className=" text-[#00000066] line-through">$260</span></p>
                            <div className="w-[38px] h-[18px] bg-red-300 rounded-2xl"><p className="text-red-600 text-xs font-medium px-1">-20%</p></div>
                            </div>
                        
                    </div>
                    <div className=" xs:hidden w-[25%] h-full md:flex flex-col gap-3">
                        <div><img src="/Frame3.png" alt="Check Shirt" /></div>
                        <div><p  className="font-satoshi text-xl font-bold">Checkered Shirt</p></div>
                        <div className="w-[150px] h-[19px] flex gap-2">
                        <div className="w-[120px] flex  overflow-hidden gap-2">
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            </div>
                            <div className="w-[33px]"><p className="font-satoshi font-normal text-sm">4.5/<span className="opacity-60">5</span></p></div>
                        </div>
                        <div><p className="text-2xl font-bold font-satoshi">$180</p></div>
                    </div>
                    <div className=" xs:hidden w-[25%] h-full md:flex flex-col gap-3">
                        <div><img src="/Frame4.png" alt="Polo" /></div>
                        <div><p  className="font-satoshi text-xl font-bold">Sleeve Striped T-shirt</p></div>
                        <div className="w-[150px] h-[19px] flex gap-2">
                        <div className="w-[120px] flex  overflow-hidden gap-2">
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            </div>
                            <div className="w-[33px]"><p className="font-satoshi font-normal text-sm">4.5/<span className="opacity-60">5</span></p></div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <p className="text-2xl font-bold font-satoshi">$130 <span className=" text-[#00000066] line-through">$160</span></p>
                            <div className="w-[38px] h-[18px] bg-red-300 rounded-2xl"><p className="text-red-600 text-xs font-medium px-1">-30%</p></div>
                            </div>
                    </div>
                </div>
                <div className="text-center xs:mt-6"><button className="text-base xs:w-[90%] md:w-[20%] md:px-20 rounded-full  xs:py-1 md:py-4 font-normal border-gray-300 border-2 ">View All</button></div>
            </div>
        </div>
    )
}