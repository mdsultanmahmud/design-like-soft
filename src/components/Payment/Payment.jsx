
const Payment = () => {
    return (
        <div className="min-h-screen">
            <h1>Payment Option</h1>
            <div className="flex">
                <div>
                    <div>
                        <div className="grid grid-cols-2">

                            <div className="flex gap-2">
                                <label htmlFor="sub-total">Sub Total</label>
                                <input type="number" className="w-3/4" />
                            </div>
                            <div></div>
                        </div>
                        <div className="flex">
                            <div className="flex gap-2">
                                <label htmlFor="sub-total">Discount</label>
                                <input type="number" className="w-3/4" />
                            </div>
                            <div className="flex gap-2">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" className="w-3/4" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="discby">Disc by</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <h1 className="text-red-600">Total discount</h1>
                    <div>
                        <div className="flex justify-between text-red-600">
                            <span>Discount %</span>
                            <span>0</span>
                        </div>
                        <div className="flex justify-between text-red-600">
                            <span>Amount</span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex">
                    <label htmlFor="other-crg">Other charge</label>
                    <input type="number" />
                </div>
                <div className="flex">
                    <label htmlFor="purpose">Purpose</label>
                    <input type="text" />
                </div>
            </div>
            <div className="flex">
                <div>
                    <div className="flex">
                        <label htmlFor="net-bill">Net Bill</label>
                        <input type="number" />
                    </div>
                    <div className="flex">
                        <label htmlFor="paid">PAID</label>
                        <input type="number" />
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <label htmlFor="pay-opt">Pay Option</label>
                        <input type="number" />
                    </div>
                    <div className="flex">
                        <label htmlFor="due">DUE</label>
                        <input type="number" />
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <input type="checkbox" id="cus"/>
                        <label htmlFor="cus">Customer Copy</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox"  id="bill-copy"/>
                        <label htmlFor="bill-copy">Bill Copy</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" id="lab-copy"/>
                        <label htmlFor="lab-copy">Lab Copy</label>
                    </div>
                </div>
            </div>

            <div className="p-3">
                <div className="flex justify-between">
                    <div className="flex">
                        <label htmlFor="appointment">Appointment Code</label>
                        <input type="text" name="" id="appointment" />
                    </div>
                    <div className="flex">
                        <label htmlFor="token">Token No</label>
                        <input type="text" name="" id="token" />
                    </div>
                </div>
                <textarea name="" className="h-full w-full"></textarea>
            </div>
        </div>
    );
};

export default Payment;