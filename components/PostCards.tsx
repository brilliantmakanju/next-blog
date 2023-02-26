import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function PostCard({ title, shortIntro, longPost, time, id, image, views }){
	return(
		<Link href={`/post/${id}`} >
			<div className=" w-[100%] rounded-md duration-300 ease-in-out hover:shadow-md hover:shadow-gray-900 pb-1  bg-[#222121] overflow-hidden h-auto  " >
				<div className="relative h-[250px] w-full   " >
					<Image
						className="absolute rounded-t-md "
						blurDataURL={image}
						src={image}
						alt={title}
						sizes={1000}
						fill
					/>
					<div className="flex justify-between items-center  px-[5%] absolute left-2 w-[96%] bottom-[-10px] py-4 bg-[#323130] md:py-2  " >
						<span className="text-gray-300" >{time} </span>
						<span className="text-gray-300" >{views} views</span>
					</div>
				</div>
				<div className="px-2 py-3 pt-5 bg-[#222121] text-white rounded-b-md" >
					<h3 className="font-bold  " >{title}</h3>
					<p className="mb-[20px] px-[3%] font-bold text-[14px] " >{shortIntro}</p>
					<Link className="text-white font-bold ml-[3%] p-3 bg-[#323130]  rounded-md md:ml-[1%] " href={`/post/${id}`} >Continue Reading (Arrow Icon ) </Link>
				</div>
			</div>
		</Link>
	)
}
