import Gallery from "./component/Gallery/Gallery"
import Home from "./component/Home/Home"
import Navbar from "./component/Navbar/Navbar"
import Offer from "./component/Offer/Offer"
import Testimonials from "./component/Testimonials/Testimonials"

function App() {

  return (
    <>
    <div className="pg-1">
    <Navbar/>
    <Home/>
    </div>
    <Offer/>
    <Gallery/>
    <Testimonials/>
    </>
   
  )
}

export default App
