import PostCard from "../components/PostCards"
import IntroCard from "../components/IntroCard"
import {  BlogPost  } from "./blog"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

 export default function Page(){
	return (
		<main>
			<IntroCard />
			<div className="grid grid-cols-1 px-[5%] py-5 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:grid-cols-3 " >
				
				{
					BlogPost.map((value, index) => (
						<PostCard title={value.title} time={value.time} shortIntro={value.shortIntro} longPost={value.longPost} id={value.id} key={index} image={value.image} views={value.views}   />
					))
				}
				
			</div>
		</main>
	)
}

