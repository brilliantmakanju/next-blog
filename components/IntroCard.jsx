export default function IntroCard(){
	return(
		<div className="text-white px-[5%] py-[1%] flex justify-between items-center flex-wrap  " >
			<div  >
				<h1 className="text-5xl font-extrabold md:text-4xl mb-5 md:mb-2 tracking-tight " >
					Code Craftsmen Daily Blog
				</h1>
				<span>Welcome to <span className="" >Every Developer</span> favourite blog </span>
			</div>
			<div className="grid grid-cols-1 gap-1 w-[98%] mt-3 md:mt-0 md:w-[28%] " >
				<span className="text-gray-400" >New Product features | The latest in Tech | Web Development </span>
			</div>
		</div>
	)
}
