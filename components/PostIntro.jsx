import Image from "next/image"
import Link from "next/link"
//{ title, time, shortIntro, image }
export default function PostIntro(){
	return(
		<div className="bg-[#222121] py-[3%] pt-[3%] px-[1%] rounded-md text-white md:py-[3%] " >
y			<div className=" flex flex-col justify-center md:flex-row md:justify-between md:items-center " >
				<div className="pl-4" >
					<h3 className="font-extrabold md:w-[100%]" >Django the used Lord for Backend</h3>
					<span className="font-bold" >December 10, 2022</span>
				</div>
				<div className="flex items-center gap-2 px-[20px] md:mt-[-20px] " >
					<div className="relative w-[40px] h-[40px] overflow-hidden rounded-full " >
						<Image
							className="absolute rounded-t-md "
							blurDataURL="/post4.jpg"
							src="/post3.jpg"
							fill
							alt="Post Image"
						/>
					</div>
					<div>
						<span className="font-bold text-[15px]" >Code Craftmen </span>
						<p className="pr-[1%] text-[10px] " >learn to code with code craftsmen worldwide</p>
					</div>
				</div>
			</div>
			
			<div className="relative py-[1%] pb-[16%] md:py-[2%] " >
				<p className='px-[2%] mt-3 ' >Little bit of intro for the post to read for the user and book details for the gaming to join Little bit of intro for the post to read for the user and book details for the gaming to join Little bit of intro for the post to read for the user and book details for the gaming to join Little bit of intro for the post to read for the user and book details for the gaming to join  </p>
				<div className="flex justify-around items-center w-[100%]  absolute bottom-0 md:right-12 md:gap-5 md:bottom-[-20px] md:w-[20%] " >
					<Link href="/"  className="bg-[#323130] p-2 font-bold text-white px-[20px] rounded-md " >Sponsor</Link>
					<Link href="/" className="bg-[#323130] p-2 font-bold text-white px-[20px] rounded-md " >Newsletter</Link>
				</div>
			</div>
		</div>
	)
}
