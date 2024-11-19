import 'remixicon/fonts/remixicon.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Brands from './components/brandlogo'
import Arrivals from './components/newarrivals'
import TopSelling from './components/topselling'
import Styles from './components/styles'
import Customers from './components/customer'
import Footer from './components/footer'
export default function Home(){
  return(
    <div>
      <div className="bg-black text-white text-center py-1 md:py-3  md:text-lg  font-[satoshi] md:flex md:items-center md:justify-evenly">
        <p className="font-light text-xs">Sign up and get 20% off to your first order. <span className="font-normal underline">Sign Up Now</span></p>
        <p className="xs:hidden md:font-normal md:text-xl font-[satoshi]">Sign up and get 20% off to your first order. <span className="md:font-medium underline">Sign Up Now</span></p>
        
        <div className='xs:hidden text-white md:cursor-pointer font-bold'>
          <i className="ri-close-line" ></i>
          </div>
      </div>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Arrivals/>
      <TopSelling/>
      <Styles/>
      <Customers/>
      <Footer/>
    </div>
  )
}