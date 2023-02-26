"use client"

import { useState, useEffect } from "react"
import Newsletter from "./NewsletterModel"
import Image from "next/image"
import Link from "next/link"

 export default function Nav(){
 	const [mobile, setMobile] = useState(false)


    const handleMobile = () => {
        setMobile(!mobile)
    }

    const [fixed, setFixed] = useState(false)

    const FixedChange = () => {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", FixedChange)
    }, [])
 
	return (
		<>
			<nav className={`${ fixed ? "fixed top-0 left-0 w-full z-[19] " : "" } flex justify-between items-center flex-wrap px-[3%] py-[3%]  bg-[#222121] shadow-md shadow-[#242121] md:px-[2%] md:py-[1%] `} >
				<div>
					<Link href="/"  className=" gap-3 items-center flex " >
						<div className=" gap-3 justify-start items-center hidden md:flex " >
							<div className="relative w-[60px] h-[60px] overflow-hidden rounded-full " >
								<Image
									className="absolute rounded-t-md "
									blurDataURL="/post4.jpg"
									src="/post3.jpg"
									fill
									alt="Post Image"
								/>
							</div>
							<h2 className="text-3xl text-white font-bold tracking-wide flex items-center  " >Code Craftsmen  </h2>
						</div>
						<h1 className="font-extrabold text-white text-2xl  md:text-[30px] md:hidden flex items-center  " >Code Craftsmen </h1>
					</Link>
				</div>
				<div>
					<Newsletter />
				</div>
			</nav>
			<header className="w-full py-[3%] px-[3%] lg:py-[1%] " >
				<form className="flex gap-1" >
					<input className="w-[100%] h-[2.7em] md:h-[2.7em] border-none outline-none rounded-b-md text-white p-[2%] bg-[#222121]  placeholder:text-white placeholder:font-bold " placeholder="Search........" required />
					<button className="bg-[#222121] font-bold text-white p-[1%]  px-[5%] rounded-b-md lg:p-[1%] " >Search</button>
				</form>
			</header>
		</>
	)
}

