
const PatientInves = () => {
    return (
        <div className="border border-4 border-white">
            <h1>Patient Info</h1>
            <div className="grid grid-cols-3 gap-2">
                <div className="flex">
                    <label htmlFor="mrno">MR No</label>
                    <input type="number" />
                </div>
                <div className="flex">
                    <label htmlFor="mrdate">MR Date</label>
                    <input type="date" />
                </div>
                <div className="flex">
                    <label htmlFor="mryr">MR Year</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="patient-id">Patient Id</label>
                    <input type="number" />
                </div>
                <div className="flex">
                    <label htmlFor="patient-type">Patient Type</label>
                    <input type="text" />
                </div>
                <div className="flex"></div>
                <div className="flex">
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="age">Age</label>
                    <input type="number" />
                </div>
                <div className="flex">
                    <label htmlFor="dob">DOB</label>
                    <input type="date" />
                </div>
                <div className="flex">
                    <label htmlFor="contact-no">Contact No</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="sex">Sex</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="blood">Blood Grp</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="address">Address</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="email">Report</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div className="flex">
                    <label htmlFor="text-number">Test Number</label>
                    <input type="text" />
                </div>
                <textarea name="" className="w-full h-full"></textarea>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex">
                    <label htmlFor="dr-name">Doctor Name</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="disc-by-dr">Disc By Doctor %</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="reference">Referred By</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="disc-by-ref">Disc By Reference %</label>
                    <input type="text" />
                </div>
                <div className="flex">
                    <label htmlFor="delivery-date">Delivery Date</label>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default PatientInves;