import Link from "next/link"

 export default function PageNo(){
	return (
		<div className="m-auto gap-6 py-[5%] text-center text-white w-full spacing-x-3  " >
			<Link href="/" className="p-3 bg-[#222121] rounded-md " >Previous</Link>
			<Link href="/" className="p-3 mx-[1%] px-3 bg-[#222121] rounded-md " >3</Link>
			<span className="p-3 px-3 bg-[#222121] mx-[1%] rounded-md " >...</span>
			<Link href="/" className="p-3 px-3 bg-[#222121] mx-[1%] rounded-md " >600</Link>
			<Link href="/" className="p-3 bg-[#222121] rounded-md " >Next</Link>
		</div>
	)
}

