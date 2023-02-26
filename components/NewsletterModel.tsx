'use client'
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Newsletter(){

	const [news, setNews] = useState(false)

	
	return(
		<>
			<button className="bg-[#323130] font-bold text-white p-2 rounded-md md:p-3 " href="/" onClick={() => setNews(!news)} >Join Newsletter</button>
			{
				news 
				?
					<>
						<div className="w-full h-[100vh] bg-[#141313b2] fixed left-0 z-[20] top-0 bottom-0 flex flex-col gap-4 justify-center items-center px-[5%] duration-300 ease-in-out transition " >
							
							
							<form style={{backgroundImage:"url(/post6.jpg)", backgroundSize:"object-fit"}} className=" bg-[#323130] p-5 w-auto md:w-[50%] lg:w-[30%] relative flex flex-col gap-4 rounded-md duration-300 ease-in-out justify-center items-center transition " >
								<span className="text-2xl text-white absolute right-3 top-3 cursor-pointer  bg-[#222121] rounded-full h-[55px] w-[55px] flex items-center justify-center overflow-hidden p-4 text-center pt-5 " onClick={() => setNews(!news)} >X</span>
								<h3 className='text-left text-white text-xl font-bold font-serif p-2 mt-[14%] ' >
									Join Code Craftsmen Newsletter and get updated anytime we have a new and exciting post also question for you and problem solving to help  you be  better programmer
								</h3>
								<input type="email" placeholder="Email  " required className="w-full h-[2.5em] px-[2%] rounded-md outline-[black] placeholder:text-[#141313b2] placeholder:font-bold  "  />
								<button className="w-[80%] bg-[#222121]  p-[3%] rounded-md outline-[black] font-bold text-white " >Join Newsletter </button>
							</form>
						</div>
					</>
				:
				
					<>
					</>
			}
			
			
		</>
	)
}
