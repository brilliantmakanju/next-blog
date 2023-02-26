import Image from "next/image"
import Link from "next/link"

 export default function Footer(){
	return (
		<footer className="font-serif flex justify-between items-center gap-5 flex-wrap pt-[5%] pb-[18.5%]  bg-[#222121] shadow-md shadow-[#242121] relative md:py-[2%] " >
			<div className="font-serif flex justify-between items-center gap-5 flex-wrap px-[6%] py-[4%]   bg-[#222121] shadow-md shadow-[#242121] md:grid md:grid-cols-2 md:gap-10 md:px-[4%] lg:grid-cols-3 " >
				<div className="grid grid-cols-1 gap-2 m-auto text-white font-bold " >
					<div className="flex gap-3 justify-start items-center md:hidden mb-[10%] " >
						<div className="relative w-[60px] h-[60px] overflow-hidden rounded-full " >
							<Image
								className="absolute rounded-t-md "
								blurDataURL="/post4.jpg"
								src="/post3.jpg"
								fill
								alt="Post Image"
							/>
						</div>
						<h2 className="text-3xl text-white font-bold tracking-wide " >Code Craftsmen  </h2>
					</div>
					<h3 className="text-center text-3xl font-bold " >About Us</h3>
					<span><span className="text-[30px] font-serif tracking-tight font-extrabold text-zinc-400 " > We are here </span>  to help developer be in line with the latest technologies and how to apply it to there day to day activities , trust me its a great place to be if you are a developer or aspiring to become a developer</span>
				</div>
				
				<form className="grid grid-cols-1 gap-2 m-auto " >
					<div className="gap-3 justify-start items-center mb-[10%] hidden md:flex " >
						<div className="relative w-[60px] h-[60px] overflow-hidden rounded-full " >
							<Image
								className="absolute rounded-t-md "
								blurDataURL="/post4.jpg"
								src="/post3.jpg"
								fill
								alt="Post Image"
							/>
						</div>
						<h2 className="text-3xl text-white font-bold tracking-wide " >Code Craftsmen  </h2>
					</div>
					<input type="email" required className="w-[15em] h-[2.5em] rounded-md pl-[5px] pr-[5px] font-bold md:w-[110%] lg:w-[50vh] rounded-md outline-[black] placeholder:text-[#141313b2] placeholder:font-bold " placeholder="Email" />
					<button className="bg-[#323130] p-3 text-white font-bold rounded-md hover:shadow-md hover:shadow-[#323150] duration-300 ease-in-out md:w-[110%] lg:w-[50vh] " >Join Newsletter </button>
				</form>
				
				
				
				<div className="grid grid-cols-1 gap-2 m-auto w-full ml-[10px] text-white font-bold  " >
					<h3>Helpful Links</h3>
					<div className=" grid grid-cols-1 gap-5 md:grid md:grid-cols-1 md:gap-6 text-white font-bold " >
						<ul>
							<li><Link href="/" >Home</Link></li>
							<li><Link href="/" >About</Link></li>
							<li><Link href="/contact" >Contact</Link></li>
						</ul>
						<ul  className="grid grid-cols-5 gap-2 " >
							<li className="bg-[#323130] p-2 h-[40px] w-[40px] flex items-center justify-center rounded-full " ><Link href="/"  >T</Link></li>
							<li className="bg-[#323130] p-2 h-[40px] w-[40px] flex items-center justify-center rounded-full " ><Link href="/" >F</Link></li>
							<li className="bg-[#323130] p-2 h-[40px] w-[40px] flex items-center justify-center rounded-full " ><Link href="/" >Y</Link></li>
							<li className="bg-[#323130] p-2 h-[40px] w-[40px] flex items-center justify-center rounded-full " ><Link href="/" >G</Link></li>
							<li className="bg-[#323130] p-2 h-[40px] w-[40px] flex items-center justify-center rounded-full " ><Link href="/" >I</Link></li>
						</ul>
					</div>
				</div>
			</div>
			
			<span className="absolute bottom-0 p-3 py-1 text-left bg-[#323130] text-white w-full font-bold tracking-tight lg:text-center " > Copyright © 2023 Code-Craftsmen. All Rights Reserved. </span>
		</footer>	
	)
}
