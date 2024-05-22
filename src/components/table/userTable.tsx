import userData from './userData.json'

const UserTable = () => {

      
  return (
  

    
    <div className='bg-blueTable h-screen w-screen p-10'>
        <h1 className='text-white mb-10 text-2xl font-medium'> User Management / User List </h1>
  
           <div className="shadow-white bg-white p-10 flex flex-col rounded-2xl s w-[100%]"> 
             <div className='flex flex-row items-start justify-between'>
                <div className='div1'>
                    <h1 className="text-black font-poppins text-l font-semibold leading-normal tracking-tight"> User Management </h1>
                    <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight mb-10"> Active Members</p>
                </div>
                        <div className='div2 space-x-7'>
                        <button className='
                            rounded-s border-2 border-textG bg-bgG  text-textG px-5 py-1 text-xs
                        '> + Add User
                        </button> 
                        <input
                                type="text"
                                placeholder="Search..."
                                className="px-2 py-1 w-18 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                         <input
                                type="text"
                                placeholder="Sort..."
                                className="px-3 py-1 w-18 prounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />


                 </div>
            </div>
                <div className="flex-col overflow-x-auto inline-block overflow-hidden">
                 <table className="min-w-full text-left text-xs font-light">
                    <thead className="text-violet1">
                    <tr>
                        <th scope="col" className="px-6 py-4">User Name</th>
                        <th scope="col" className="px-6 py-4">Designation</th>
                        <th scope="col" className="px-6 py-4">Phone Number</th>
                        <th scope="col" className="px-20 py-4">Email</th>
                        <th scope="col" className="px-20 py-4 text-center">Region</th>
                        <th scope="col" className="px-6 text-center">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userData.map((user, index) => (
                        <tr key={index} className="border-b bg-white-100">
                        <td className="whitespace-nowrap px-6 py-7">{user.username}</td>
                        <td className="whitespace-nowrap px-6 py-7">{user.designation}</td>
                        <td className="whitespace-nowrap px-6 py-7">{user['phone number']}</td>
                        <td className="whitespace-nowrap px-6 py-7">{user.Email}</td>
                        <td className="whitespace-nowrap px-6 py-7 text-center">{user.Region}</td>
                        <td className="whitespace-nowrap px-6 py-7 text-center">
                            <button className='rounded-md border-2 border-textY bg-bgY text-textY font-bold px-5 py-2 mr-2'> 
                                UPDATE
                            </button>
                            <button className='rounded-md border-2 border-textR bg-bgR text-textR font-bold px-5 py-2'> 
                               DEACTIVATE
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            
            {/* PAGINATION */}
                    <div className="flex items-center gap-4 mt-10 bg-gray-100 text-center">
                                        
                        <button
                            disabled
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
                        </button>
                        <div className="flex items-center gap-2">
                            <button
                                className="h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span>1</span>
                            </button>
                            <button
                                className="h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span>2</span>
                            </button>
                            <button
                                className="h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span>3</span>
                            </button>
                        
                                </div>
                                <button
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    aria-hidden="true" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                    </svg>
                                </button>
                    </div>


            </div>
    </div>
       
  


        

    
  )
}

export default UserTable