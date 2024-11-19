export default function TopSelling(){
    return(
        <div>
            
             <div className="w-full text-black pt-10  font-black md:pl-20 pb-12 ">
                <hr />
                <h1 className="font-integral-cf tracking-tighter font-extrabold md:text-[48px] xs:text-[34px] text-center">TOP SELLING</h1>
                <div className="w-[100%] md:h-[460px] mt-10 flex gap-2 xs:px-2">
                    <div className=" xs:w-[50%] md:w-[25%] h-full flex flex-col md:gap-3 xs:gap-2">
                        <div><img src="/Frame5.png" alt="Shirt" className="xs:h-[210px] md:h-full" /></div>
                        <div><p  className="font-satoshi md:text-xl font-bold xs:text-sm">Vertical Striped Shirt</p></div>
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
                        <div className="flex items-center gap-3">
                        <p className="md:text-2xl xs:text-xl font-bold font-satoshi">$212 <span className=" text-[#00000066] line-through">$232</span></p>
                            <div className="w-[38px] h-[18px] bg-red-300 rounded-2xl"><p className="text-red-600 text-xs font-medium px-1">-20%</p></div>
                            </div>
                    </div>
                    <div className=" xs:w-[50%] md:w-[25%] h-full flex flex-col md:gap-3 xs:gap-2">
                        <div><img src="/Frame6.png" alt="Paint" className="xs:h-[210px] md:h-full" /></div>
                        <div><p  className="font-satoshi md:text-xl font-bold xs:text-sm">Courage Graphic T-shirt</p></div>
                        <div className="w-[147px] h-[19px] flex xs:gap-1 md:gap-2">
                        <div className="w-[120px] flex  overflow-hidden xs:gap-1 md:gap-2">
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            </div>
                            <div className="w-[33px]"><p className="font-satoshi font-normal text-sm">4.5/<span className="opacity-60">5</span></p></div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <p className="md:text-2xl xs:text-xl font-bold font-satoshi">$145 </p>
                            
                            </div>
                        
                    </div>
                    <div className=" xs:hidden w-[25%] h-full md:flex flex-col gap-3">
                        <div><img src="/Frame7.png" alt="Check Shirt" /></div>
                        <div><p  className="font-satoshi text-xl font-bold">Loose Fit Bermuda Shorts</p></div>
                        <div className="w-[150px] h-[19px] flex gap-2">
                        <div className="w-[120px] flex  overflow-hidden gap-2">
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            
                           
                            </div>
                            <div className="w-[33px]"><p className="font-satoshi font-normal text-sm">4.5/<span className="opacity-60">5</span></p></div>
                        </div>
                        <div><p className="text-2xl font-bold font-satoshi">$80</p></div>
                    </div>
                    <div className=" xs:hidden w-[25%] h-full md:flex flex-col gap-3">
                        <div><img src="/Frame8.png" alt="Polo" /></div>
                        <div><p  className="font-satoshi text-xl font-bold">Faded Skinny Jeans</p></div>
                        <div className="w-[150px] h-[19px] flex gap-2">
                        <div className="w-[150px] flex  overflow-hidden gap-2">
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            <img src="/Star1.png" alt="star" />
                            
                            </div>
                            <div className="w-[33px]"><p className="font-satoshi font-normal text-sm">4.5/<span className="opacity-60">5</span></p></div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <p className="text-2xl font-bold font-satoshi">$210</p>
                            
                            </div>
                    </div>
                </div>
                <div className="text-center xs:mt-6"><button className="text-base xs:w-[90%] md:w-[20%] md:px-20 rounded-full  xs:py-1 md:py-4 font-normal border-gray-300 border-2 ">View All</button></div>
            </div>
        </div>
    )
}