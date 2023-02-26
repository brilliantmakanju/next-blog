export default function Contact(){
	return(
		<section className="flex justify-center items-center py-[2%] pb-[8%]  px-[3%] lg:px-[5%] lg:pb-[3%] " >
			<div className='col-span-3 w-full lg:w-[60%] bg-[#222121] text-white font-bold rounded-xl lg:p-4'>
            	<div className='p-4' >
                	<form  >
                    	<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        	<div className='flex flex-col'>
                             	<label className='uppercase text-sm py-2 '>Name</label>
                            	<input type="text"  name="user_name" className='border-2 rounded-xl p-3 flex border-gray-300 outline-black text-black  ' required />
                            </div>
                         	<div className='flex flex-col'>
                                <label className='uppercase text-sm w-full py-2 '>Email</label>
                            	<input type="email"  name="email" className=' outline-black  text-black border-2 rounded-xl p-3 flex border-gray-300' required />
                        	</div>
                       	</div>
                      	<div className='flex flex-col py-2'>
                            <label className='uppercase text-sm w-full py-2 '>Subject</label>
                        	<input type="text" className='border-2 outline-black rounded-xl p-3 text-black flex border-gray-300' required />
                       	</div>
                       	<div className='flex flex-col py-2'>
                       		<label className='uppercase text-sm w-full py-2 '>Message</label>
                        	<textarea  className='border-2 text-black outline-black rounded-lg p-3 border-gray-400 ' name='message' rows='10' required />
                    	</div>
						<input type="submit" className=' w-full md:w-[25%] rounded-xl text-white  bg-[#323130] font-bold cursor-pointer text-center p-4 mt-4 ' value="Send" />
                 	</form>
            	 </div>
       		</div>
		</section>
	)
}
