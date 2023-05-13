import Navbar from "./components/Navbar/Navbar"
import PatientInves from "./components/PatientInves/PatientInves"
import Payment from "./components/Payment/Payment"
import SearchRecord from "./components/SearchRecord/SearchRecord"

function App() {
  return (
    <div className="max-w-[1400px]">
      <Navbar />
      <div className="flex gap-5 flex-wrap">
        <SearchRecord />
        <PatientInves />
        <Payment />
      </div>
    </div>
  )
}

export default App
