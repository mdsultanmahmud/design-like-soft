import { BiSearchAlt2 } from 'react-icons/bi'
const SearchRecord = () => {
    return (
        <div className="h-full p-2">
            <h1>search record</h1>
            <div className='flex'>
                <div>
                    <div>
                        <label htmlFor="form">
                            Form
                        </label>
                        <input type="date" id="form" />
                    </div>
                    <div>
                        <label htmlFor="to">
                            Form
                        </label>
                        <input type="date" id="to" />
                    </div>
                </div>
                <div>
                    <BiSearchAlt2 />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="search">Search</label>
                    <input type="text" />
                </div>
                <h3>Total: 0</h3>
            </div>
            <textarea className='w-full h-full'></textarea>
        </div>
    );
};

export default SearchRecord;