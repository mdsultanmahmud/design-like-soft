import { BiSearchAlt2 } from 'react-icons/bi'
const SearchRecord = () => {
    return (
        <div className="h-full p-2 border border-2 border-r-4">
            <h1 className='my-1 text-lg capitalize font-semibold'>search record</h1>
            <div className='flex justify-between items-center my-3'>
                <div>
                    <div className='flex justify-between items-center gap-5 mb-2 font-semibold'>
                        <label htmlFor="form">
                            Form
                        </label>
                        <input type="date" className='border border-1 border-black outline-none p-2' id="form" />
                    </div>
                    <div className='flex justify-between items-center gap-5 mb-2 font-semibold'>
                        <label htmlFor="to">
                            To
                        </label>
                        <input type="date" className='border border-1 border-black outline-none p-2' id="to" />
                    </div>
                </div>
                <div className='border border-2 border-white'>
                    <BiSearchAlt2 className='text-red-600 -skew-y-12' size={80}/>
                </div>
            </div>
            <div className='flex justify-between items-center my-2'>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="search" className='font-semibold'>Search</label>
                    <input type="text" className='border border-1 border-black outline-none py-2 w-4/5'/>
                </div>
                <h3 className='text-green-600 text-lg'>Total: 0</h3>
            </div>
            <textarea className='w-full h-3/4 text-lg text-black border border-2 border-black outline-none p-2 font-semibold'></textarea>
        </div>
    );
};

export default SearchRecord;