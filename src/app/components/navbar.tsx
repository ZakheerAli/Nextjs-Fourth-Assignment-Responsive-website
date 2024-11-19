import 'remixicon/fonts/remixicon.css'
export default function Navbar() {
    return (
        <div>
            <div className="xs:hidden md:block h-[90px]  px-20 py-4">
                <div className='flex items-center justify-between'>
                    <h1 className="lg:text-[33px] font-integral-cf font-extrabold tracking-tighter">SHOP.CO</h1>
                    <div>
                        <ul className='flex gap-7 text-base font-medium font-satoshi'>
                            <li>SHOP<i className="ri-arrow-down-s-line"></i></li>
                            <li>On Sale</li>
                            <li>New Arrivals</li>
                            <li>Brand</li>
                        </ul>
                    </div>
                  
                    <div className='flex  items-center' >
                    <div className=' text-gray-600 px-2 py-[11.5px] rounded-l-full text-base bg-gray-200'><i className="ri-search-line"></i></div>
                    <input type="text" placeholder='Search for Products...' className='w-[500px] py-3 rounded-r-full bg-gray-200'/>
                    </div>
                    <div className='flex gap-5 text-3xl font-extrabold'>
                        <i className="ri-shopping-cart-line" ></i>
                        <i className="ri-account-circle-line"></i>
                    </div>
                    
                </div>
            </div>
            <div className=' md:hidden py-2 flex items-center justify-between px-4 font-extrabold'>
                <div className='flex gap-4 text-2xl'>
                    <i className="ri-menu-line"></i>
                    <h1 className='font-integral-cf font-extrabold text-xl tracking-tighter'>SHOP.CO</h1></div>
                <div className='flex gap-4 text-2xl'>
                <i className="ri-search-line"></i>
                <i className="ri-shopping-cart-line" ></i>
                <i className="ri-account-circle-line"></i>
                </div>

            </div>
        </div>
    )
}