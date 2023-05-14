
import { AiFillPrinter, AiOutlineFileSearch } from 'react-icons/ai'
import { FaBarcode } from 'react-icons/fa'
import { GrCopy } from 'react-icons/gr'
const Payment = () => {
    return (
        <div className="min-h-screen">
            <div className="border border-black border-2 p-2 bg-gray-200">
                <h1 className="my-1 text-lg capitalize font-semibold">Payment Option</h1>
                <div className="flex p-3">
                    <div>
                        <div>
                            <div className="grid grid-cols-2 mb-1">
                                <div className="flex gap-3 font-semibold items-center">
                                    <label htmlFor="sub-total">Sub Total</label>
                                    <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="number" />
                                </div>
                                <div></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex gap-3 font-semibold items-center mb-1">
                                    <label htmlFor="sub-total">Discount %</label>
                                    <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="number" />
                                </div>
                                <div className="flex gap-3 font-semibold items-center mb-1">
                                    <label htmlFor="amount">Amount</label>
                                    <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 font-semibold mb-1">
                            <label htmlFor="discby">Disc by</label>
                            <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                        </div>
                    </div>
                    <div className="font-bold ml-4">
                        <h1 className="text-red-600">Total discount</h1>
                        <div>
                            <div className="flex justify-between text-red-600">
                                <span>Discount</span>
                                <span>0</span>
                            </div>
                            <div className="flex justify-between text-red-600">
                                <span>Amount</span>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center font-semibold gap-2">
                        <label htmlFor="other-crg">Other charge</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="number" />
                    </div>
                    <div className="flex items-center font-semibold gap-2">
                        <label htmlFor="purpose">Purpose</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="text" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <div className="flex items-center font-semibold gap-2 justify-between mb-1">
                            <label htmlFor="net-bill" className="text-blue-800 font-bold text-lg">Net Bill</label>
                            <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="number" />
                        </div>
                        <div className="flex items-center font-semibold gap-2 justify-between mb-1">
                            <label htmlFor="paid" className="font-bold text-green-500 text-lg">PAID</label>
                            <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="number" />
                        </div>
                    </div>
                    <div >
                        <div className="flex items-center font-semibold gap-2 justify-between mb-1">
                            <option value="option_value">Pay Option</option>
                            <select className='p-1 border border-1 border-black outline-none text-lg w-1/2'>
                                <option value="option1">CASH</option>
                                <option value="option2">CARD</option>
                                <option value="option3">BKASH</option>
                            </select>
                        </div>
                        <div className="flex items-center font-semibold gap-2 justify-between mb-1">
                            <label htmlFor="due" className="font-bold text-red-500 text-lg">DUE</label>
                            <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="number" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex mb-1">
                            <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="checkbox" id="cus" />
                            <label htmlFor="cus" className='text-blue-700'>Customer Copy</label>
                        </div>
                        <div className="flex mb-1">
                            <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="checkbox" id="bill-copy" />
                            <label htmlFor="bill-copy" className='text-blue-700'>Bill Copy</label>
                        </div>
                        <div className="flex mb-1">
                            <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="checkbox" id="lab-copy" />
                            <label htmlFor="lab-copy" className='text-blue-700'>Lab Copy</label>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 my-6 ml-4'>
                    <GrCopy size={50} className='cursor-pointer' />
                    <AiFillPrinter size={50} className='text-red-500 cursor-pointer' />
                    <AiOutlineFileSearch size={50} className='text-blue-500 cursor-pointer' />
                    <FaBarcode size={50} className='text-green-500 cursor-pointer' />
                </div>
            </div>

            <div className="p-2">
                <div className="flex justify-between py-4">
                    <div className="flex items-center font-bold gap-4">
                        <label htmlFor="appointment">Appointment Code</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="text" name="" id="appointment" />
                    </div>
                    <div className="flex items-center font-bold gap-4">
                        <label htmlFor="token">Token No</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-1/2" type="text" name="" id="token" />
                    </div>
                </div>
                <textarea name="" className="w-full h-[320px] text-lg text-black border border-2 border-black outline-none p-2 font-semibold"></textarea>
            </div>
        </div>
    );
};

export default Payment;