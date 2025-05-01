import { useState } from 'react'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-0 flex justify-center items-center h-[79px] w-full bg-[#FFB22C]">
        <div className='flex justify-center items-center'>
          <div className='flex flex-1 justify-center items-center'>
            <ul className="flex flex-1 space-x-50 text-white text-[16px] font-bold">
              <li><a href="/">Home</a></li>
              <li><a href="/about">Products</a></li>
            </ul>
          </div>
        </div>

      <div className="flex justify-center items-center basis-[450px]">
        <a href="/">
          <img
            src="/logo_yfj.jpg"
            alt="YFJ Logo"
            className="h-[79px]" 
          />
        </a>
      </div>

        <div className='flex justify-center items-center'>
          <div className='flex flex-1 justify-center items-center'>
            <ul className="flex flex-1 space-x-50 text-white text-[16px] font-bold">
              <li><a href="/">About</a></li>
              <li><a href="/about">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
