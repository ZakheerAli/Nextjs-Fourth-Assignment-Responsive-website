import 'remixicon/fonts/remixicon.css'
export default function Footer(){
    return(
        <div>
            <div className="w-full md:px-16 xs:h-[950px] md:h-[750px]  bg-[#F0F0F0] flex flex-col gap-7 ">
                <div  id="black-sec" className=" xs:h-[310px] xs:w-[360px] xs:ml-2 xs:flex-col md:flex-row md:w-full bg-black md:h-[200px] rounded-2xl flex xs:gap-5 md:gap-10">
                    <div className=" xs:w-full md:w-[50%] xs:px-6 xs:py-4 md:px-6 md:py-12">
                        <h1 className="xs:text-[32px] md:text-[42px] text-white font-extrabold tracking-tighter  xs:leading-[35px] md:leading-[45px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    </div>
                    <div className="w-[50%] xs:px-5 md:px-6 md:py-12 flex flex-col gap-3">
                        <div className='flex items-center'><i className="ri-mail-line text-gray-600 text-xl bg-white rounded-l-3xl px-2 py-[10px]"></i><input type="text" placeholder='Enter your email address' className='xs:px-10 xs:py-3 rounded-r-3xl md:px-24 md:py-3'/></div>
                        <button className=' xs:w-[320px] md:w-[420px] py-3 rounded-3xl bg-white'>Subscribe to Newsletter</button>
                    </div>
                </div>
                <div className=' xs:h-[750px] md:h-[499px] w-full bg-[#F0F0F0]'>
                    <div className='h-[190px] w-full flex  md:flex-row xs:flex-col'>
                        <div className=' xs:w-full xs:px-6 md:w-[20%] h-full text-black font-black flex flex-col gap-3'>
                            <h1 className='font-integral-cf tracking-tighter text-[33px] font-extrabold'>SHOP.CO</h1>
                            <p className='text-sm font-normal font-satoshi  text-[#00000099] w-[90%] leading-[19px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div className='flex gap-2 text-xl '>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-facebook-circle-fill"></i>
                                <i className="ri-instagram-line"></i>
                                <i className="ri-github-fill"></i>
                            </div>
                        </div>
                        <div className=' xs:hidden md:w-[20%] h-full md:flex flex-col items-start gap-3 py-3 px-5'>
                            <h2 className='text-base font-semibold font-satoshi'>COMPANY</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>About</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Features </p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Works </p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Career</p>
                        </div>
                        <div className=' xs:hidden md:w-[20%] h-full md:flex flex-col gap-3 py-3 px-5'>
                        <h2 className='text-base font-semibold font-satoshi'> HELP</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Customer Support</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'> Delivery Details</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Terms & Conditions </p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Privacy Policy</p>
                        </div>
                        <div className='xs:hidden md:w-[20%] h-full md:flex flex-col items-start gap-3 py-3 px-5'>
                        <h2 className='text-base font-semibold font-satoshi'>FAQ</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Account</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Manage Deliveries</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Orders</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Payments</p>
                        </div>
                        <div className='xs:hidden md:w-[20%] h-full md:flex flex-col items-start gap-3 py-3 px-5'>
                        <h2 className='text-base font-semibold font-satoshi'>RESOURCES</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Free eBooks</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Development tutorials</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>How to Blog</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Youtube Playlist</p>
                        </div>
                        <div className=' md:hidden xs:w-full xs:flex '>
                        <div className=' xs:w-[50%] md:w-[20%] h-full flex flex-col items-start gap-3 py-3 px-5'>
                            <h2 className='text-base font-semibold font-satoshi'>COMPANY</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>About</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Features </p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Works </p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Career</p>
                        </div>
                        <div className=' xs:w-[50%] md:w-[20%] h-full flex flex-col gap-3 py-3 px-5'>
                        <h2 className='text-base font-semibold font-satoshi'> HELP</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Customer Support</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'> Delivery Details</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Terms & Conditions </p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Privacy Policy</p>
                        </div>
                        </div>
                        <div className=' md:hidden xs:w-full xs:flex'>
                        <div className='xs:w-[50%] md:w-[20%] h-full flex flex-col items-start gap-3 py-3 px-5'>
                        <h2 className='text-base font-semibold font-satoshi'>FAQ</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Account</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Manage Deliveries</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Orders</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Payments</p>
                        </div>
                        <div className=' xs:w-[50%] md:w-[20%] h-full flex flex-col items-start gap-3 py-3 px-5'>
                        <h2 className='text-base font-semibold font-satoshi'>RESOURCES</h2>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Free eBooks</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Development tutorials</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>How to Blog</p>
                            <p className='text-sm text-[#00000099] font-normal font-satoshi'>Youtube Playlist</p>
                        </div>
                        </div>
                         
                    </div>
                    <br /><br /><br />
                    <hr />
                    <div className='flex justify-between px-7 py-7 md:flex-row xs:flex-col xs:relative xs:top-[40%] md:top-[0%]'>
                        <p>Shop.co © 2000-2023, All Rights Reserved</p>
                        <div className='h-[32px] w-[285px] flex items-center gap-3'>
                            <div className='h-[30px] w-[46px] bg-white flex items-center justify-center rounded-md'><img src="/visa.png" alt=""/></div>
                            <div className='h-[30px] w-[46px] bg-white flex items-center justify-center rounded-md'><img src="/mastercard.png" alt="" /></div>
                            <div className='h-[30px] w-[46px] bg-white flex items-center justify-center rounded-md'><img src="epay.png" alt="" /></div>
                            <div className='h-[30px] w-[46px] bg-white flex items-center justify-center rounded-md'><img src="gpay.png" alt="" /></div>
                            <div className='h-[30px] w-[46px] bg-white flex items-center justify-center rounded-md'><img src="/Paypal.png" alt="" /></div>

                            
                            
                           
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}