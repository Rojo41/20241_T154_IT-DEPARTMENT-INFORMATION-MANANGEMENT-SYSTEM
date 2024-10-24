import {BrowserRouter, Routes,Route} from "react-router-dom"
import LandingPage from "./pages/landingpage"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
     <div className="app">
        <BrowserRouter>
          <Routes>
{/*           <Route path="/T" element={<LandingPage/>}/> */}
          <Route path="/" element={<Navbar/>}/>
          </Routes>

        </BrowserRouter>
     </div>
    </>
  )
}

export default App
