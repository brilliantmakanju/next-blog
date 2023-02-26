import PostCard from "../../components/PostCards"
import PageNo from "../../components/PageNo"
import {  BlogPost  } from "../blog"
import Image from "next/image"
import Link from "next/link"

 export default function Result(){
	return (
		<main>
			<div className='flex px-[20px] bg-[#222121] justify-center items-center space-x-5 py-[3%] my-[5px] lg:py-[20px] lg:my-[10px] font-bold   ' >
				<div className={` text-white hover:text-amber-100 duration-300 ease-in-out cursor-pointer `} >
					<Link href={`/result/?genre`} >
						Latest
					</Link>
				</div>
				<div className={` text-white hover:text-amber-100 duration-300 ease-in-out cursor-pointer `} >
					<Link href={`/result/?genre`} >
						Popular
					</Link>
				</div>
				<div className={` text-white hover:text-amber-100 duration-300 ease-in-out cursor-pointer `} >
					<Link href={`/result/?genre`} >
						Oldest
					</Link>
				</div>
			</div>
			<h2 className="text-center text-3xl text-white pt-1 " >Search Result for Bankia </h2>
			<div className="grid grid-cols-1 px-[5%] py-2 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:grid-cols-3 lg:py-5 " >
				
				{
					BlogPost.map((value, index) => (
						<PostCard title={value.title} time={value.time} shortIntro={value.shortIntro} longPost={value.longPost} id={value.id} key={index} image={value.image} views={value.views}   />
					))
				}
				
			</div>
			<PageNo />
		</main>
	)
}

