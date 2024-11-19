export default function Brands() {
    return (
        <div>
             <div className="md:hidden xs:flex flex-col items-center justify-center gap-5 bg-black h-[146px] w-full">
                <div className="w-full flex items-center justify-around">
                <img src="/versace.png" alt="Versace logo" className="w-[117px] h-[24px]" />
                <img src="/zara.png" alt="Zara Logo" className="w-[100px] h-[24px]"/>
                <img src="/gucci.png" alt="Gucci logo" className="w-[117px] h-[24px]"/>
                </div>
                <div className="w-full flex items-center justify-around">
                <img src="/prada.png" alt="Prada Logo" className="w-[117px] h-[24px]"/>
                <img src="/ck.png" alt="Calvin kein Logo" className="w-[117px] h-[24px]"/>
                </div>
                
            </div>
            <div className="xs:hidden bg-black h-[122px] w-full md:flex items-center justify-around ">
                <img src="/versace.png" alt="Versace logo" />
                <img src="/zara.png" alt="Zara Logo" />
                <img src="/gucci.png" alt="Gucci logo" />
                <img src="/prada.png" alt="Prada Logo" />
                <img src="/ck.png" alt="Calvin kein Logo" />
            </div>
           
        </div>
    )
}