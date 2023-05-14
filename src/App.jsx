import Navbar from "./components/Navbar/Navbar"
import PatientInves from "./components/PatientInves/PatientInves"
import Payment from "./components/Payment/Payment"
import SearchRecord from "./components/SearchRecord/SearchRecord"

function App() {
  return (
    <div className="bg-gray-300">
      <Navbar />
      <div className="flex gap-4 h-[900px] justify-between p-3">
        <div className="w-[330px]">
          <SearchRecord />
        </div>
        <div className="">
          <div className="flex gap-4">
            <span>Patient Investigation</span>
            <span>MR Report Preview</span>
            <span>Barcode Preview</span>
          </div>
          <div className="flex justify-between">
            <div className="">
              <PatientInves />
            </div>
            <div className="">
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
