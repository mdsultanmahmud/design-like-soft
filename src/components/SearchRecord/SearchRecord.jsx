import { BiSearchAlt2 } from 'react-icons/bi'
const SearchRecord = () => {
    return (
        <div className="h-full p-2 border border-2 border-white">
            <h1 className='my-1 text-lg capitalize font-semibold'>search record</h1>
            <div className='flex justify-between items-center my-3'>
                <div>
                    <div className='flex justify-between items-center gap-5 mb-2'>
                        <label htmlFor="form">
                            Form
                        </label>
                        <input type="date" className='p-2' id="form" />
                    </div>
                    <div className='flex justify-between items-center gap-5 mb-2'>
                        <label htmlFor="to">
                            To
                        </label>
                        <input type="date" className='p-2' id="to" />
                    </div>
                </div>
                <div className='border border-2 border-white'>
                    <BiSearchAlt2 className='text-red-600 -skew-y-12' size={80}/>
                </div>
            </div>
            <div className='flex justify-between items-center my-2'>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="search">Search</label>
                    <input type="text" className='py-2'/>
                </div>
                <h3 className='text-green-600 text-lg'>Total: 0</h3>
            </div>
            <textarea className='w-full h-3/4 text-lg text-black border border-2 border-black '></textarea>
        </div>
    );
};

export default SearchRecord;