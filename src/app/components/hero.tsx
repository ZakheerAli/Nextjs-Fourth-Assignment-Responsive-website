export default function Hero(){
    return(
        <div>
            <div className="xs:hidden md:flex w-full h-[660px] bg-[#F2F0F1] flex  md:flex-row   ">
                <div id="left-part" className="w-3/6 h-full py-20 pl-16 flex flex-col gap-6 text-black font-black">
                <div>
                    <h1 className="font-integral-cf font-extrabold text-[66px] leading-[64px] tracking-tighter">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                </div>
                <div>
                    <p className="font-satoshi text-[#00000099] text-base font-normal leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                </div>
                <div>
                    <button className="px-[85px] rounded-full py-4 font-medium bg-black text-white">Shop Now</button>
                </div>
                <div className="w-full  flex">
                    <div className="flex flex-col w-[33.33%] py-3 pl-5">
                        <h1 className="text-[40px] font-satoshi font-bold">200+</h1>
                        <p className="text-base font-normal text-[#00000099]">International Brands</p>
                        </div>
                    <div className="flex flex-col  w-[33.33%] py-3 pl-5">
                        <h1 className="text-[40px] font-satoshi font-bold">2,000+</h1>
                        <p className="text-base font-normal text-[#00000099]">High-Quality Products</p>
                        </div>
                    <div className="flex flex-col w-[33.33%] py-3 pl-5">
                        <h1 className="text-[40px] font-satoshi font-bold">30,000+</h1>
                        <p className="text-base font-normal text-[#00000099]">Happy Customers</p>
                        </div>
                </div>
                </div>
                <div id="right-part" className="w-3/6 h-[600px] pl-20 relative">
                <img src="/hero-image.png" alt="Hero_image" className="absolute top-[10%] h-[600px] "/>
                <img src="/star.png" alt="Star" className="absolute z-10 top-[50%] w-12"/>
                <img src="/star.png" alt="Star" className="relative z-10 left-[60%] top-[20%] w-20" />
                </div>


            </div>
            <div className="md:hidden w-full h-[1053px]  bg-[#F2F0F1] flex flex-col text-black font-black">
                <div id="left-part" className="w-full h-[653px] pt-12 px-6 flex flex-col gap-5">
                <div>
                    <h1 className="font-integral-cf font-extrabold text-[40px] leading-[40px] tracking-tighter w-full">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                </div>
                <div>
                    <p className="font-satoshi text-[#00000099] text-base font-normal leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                </div>
                <div>
                    <button className="px-12 w-full rounded-full py-2 font-medium bg-black text-white">Shop Now</button>
                </div>
                <div className="w-full grid grid-cols-2 pl-12">
                    <div className="flex flex-col w-[50%] py-2 ">
                        <h1 className="text-[24px] font-satoshi font-bold">200+</h1>
                        <p className="text-xs font-normal font-satoshi text-[#00000099]">International Brands</p>
                        </div>
                    <div className="flex flex-col  w-[50%] py-2">
                        <h1 className="text-[24px] font-satoshi font-bold">2,000+</h1>
                        <p className="text-xs font-normal font-satoshi text-[#00000099]">High-Quality Products</p>
                        </div>
                    <div className="flex flex-col w-full py-2 pl-[70px]">
                        <h1 className="text-[24px] font-satoshi font-bold">30,000+</h1>
                        <p className="text-xs font-normal font-satoshi text-[#00000099]">Happy Customers</p>
                        </div>
                </div>
                </div>
                <div id="right-part" className="w-full h-[448px] relative">
                <img src="/hero-image.png" alt="Hero_image" className="relative  h-[448px] "/>
                <img src="/star.png" alt="Star" className="absolute z-10 top-[40%] w-12 left-[7%]"/>
                <img src="/star.png" alt="Star" className="absolute z-10 left-[75%] top-[10%] w-16" />
                </div>


            </div>
        </div>
    )
}


// 
// bg-[#F2F0F1]