import React from 'react'
import Quotation from '../../assets/images/SVG/CEO/Quotation.svg'
import CEO from '../../assets/images/SVG/CEO/ceo.svg'

export default function Component() {
  return (
    <div className="w-full sticky top-0  max-w-full min-h-[100vh] flex flex-col items-center justify-center mx-auto p-10 rounded-t-[50px] bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] text-white">
      <h2 className="text-4xl font-light mb-8">From the CEO's Desk</h2>
      <div className="flex flex-col md:flex-row w-4/6 items-center md:items-start gap-8">
        <div className="w-66 h-[30vh] sm:h-[40vh] lg:h-[60vh]  rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src= {`${CEO}?height=256&width=256`}
            alt="CEO Madhava Kota"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow p-6 flex flex-col justify-center"> {/* Added flex and justify-center */}
          <div className="text-7xl text-purple-300 opacity-50 mb-4"><img src={Quotation} className="h-6 lg:h-full" alt="Quotation" /></div>
          <p className="text-lg mb-6 lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div>
            <p className="text-2xl font-semibold">- Madhava Kota</p>
            <p className="text-xl">President & CEO</p>
          </div>
        </div>
      </div>
    </div>
  )
}