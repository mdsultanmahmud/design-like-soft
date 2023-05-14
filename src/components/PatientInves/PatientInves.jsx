
const PatientInves = () => {
    return (
        <div className="">
            <div className="border border-black border-2 p-2 bg-gray-200">
                <h1 className="my-1 text-lg capitalize font-semibold">Patient Info</h1>
                <div className="grid grid-cols-3 gap-2">
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="mrno">MR No</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="number" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="mrdate">MR Date</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="date" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="mryr">MR Year</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="patient-id">Patient Id</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="number" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <option value="option_value">Patient Type</option>
                        <select name="myOption" className="p-1 border border-1 border-black outline-none text-lg w-3/5  ">
                            <option value="option2">NHBD</option>
                            <option value="option1">General</option>
                            <option value="option2">ApnarLab</option>
                            <option value="option3">Close Loop</option>
                            <option value="option3">Pre Test</option>
                        </select>
                    </div>
                    <div className="flex justify-between font-semibold items-center"></div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="name">Name</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="age">Age</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="number" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="dob">DOB</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="date" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="contact-no">Contact No</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="sex">Sex</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="blood">Blood Grp</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="address">Address</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="email">Email</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold items-center">
                        <label htmlFor="email">Report</label>
                        <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-start font-semibold items-center py-4 font-bold text-lg">
                    <label htmlFor="text-number">Test Name</label>
                    <input className="ml-3 p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                </div>
                <textarea name="" className="border border-2 border-black h-[320px] w-full text-lg font-semibold outline-none p-2"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4">
                <div className="flex justify-between font-semibold items-center">
                    <label htmlFor="dr-name">Doctor Name</label>
                    <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                </div>
                <div className="flex justify-between font-semibold items-center">
                    <label htmlFor="disc-by-dr">Disc By Doctor %</label>
                    <input className="p-1 border border-1 border-black outline-none text-lg w-1/5" type="text" />
                </div>
                <div className="flex justify-between font-semibold items-center">
                    <label htmlFor="reference">Referred By</label>
                    <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="text" />
                </div>
                <div className="flex justify-between font-semibold items-center">
                    <label htmlFor="disc-by-ref">Disc By Reference %</label>
                    <input className="p-1 border border-1 border-black outline-none text-lg w-1/5" type="text" />
                </div>
                <div className="flex justify-between font-semibold items-center">
                    <label htmlFor="delivery-date">Delivery Date</label>
                    <input className="p-1 border border-1 border-black outline-none text-lg w-3/5" type="date" />
                </div>
            </div>
        </div>
    );
};

export default PatientInves;