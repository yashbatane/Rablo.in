import React, {lazy, Suspense, useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Redirect, Navigate } from "react-router-dom";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";

import UnderConstruction from "./components/pages/UnderConstruction/UnderConstruction";
// Importing moduoles
import LazyLoading from "./GlobalStyles/Containers/LazyLoading/LazyLoading";
import Navbar from "./components/GlobalComponents/Navbar/Navbar";
import HelpandSupport from './components/pages/HelpAndSupport/HelpAndSupport';

// const AboutUs = lazy(() => import("./components/pages/AboutUs/AboutUs").then(module => ({
//   default: module.AboutUs
// })));
// const LandingPage = lazy(()=> import("./components/pages/LandingPage/LandingPage").then(module => ({
//   default: module.LandingPage
// })));
// const BecomeOurTutor = lazy(()=> import("./components/pages/BecomeOurTutor/BecomeOurTutor").then(module => ({
//   default: module.BecomeOurTutor
// })));
// const HelpAndSupport = lazy(()=> import("./components/pages/HelpAndSupport/HelpAndSupport").then(module => ({
//   default: module.HelpAndSupport
// })));
// const PrivacyPolicy = lazy(()=> import("./components/pages/PrivacyPolicy/PrivacyPolicy").then(module => ({
//   default: module.PrivacyPolicy
// })));
// const TermsAndConditions = lazy(()=> import("./components/pages/TermsAndConditions/TermsAndConditions").then(module => ({
//   default: module.TermsAndConditions
// })));
// const PageNotFound = lazy(()=> import("./components/GlobalComponents/404page/Notfoundpage").then(modue=>({
//   default:module.PgaeNotFound
// })));


// Importing css
import "./GlobalStyles/Containers/Containers.style.css";
import "./index.css";
import Footer from "./components/GlobalComponents/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
import { AboutUs } from "./components/pages/AboutUs/AboutUs";
// import Notfoundpage from "./components/GlobalComponents/404page/Notfoundpage";
// App functions
const App = () => {
  //AOS initialisation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // const [closemenu,setCloseMenu]=useState(false);
  const [clicked,setClicked]=useState("");
  //Funtion handle to close the hamburger menu


  return(
  <div className="app1">
      {/* <Suspense
        fallback={
          <div>
            <LazyLoading />
          </div>
        }
      >
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Navigate to="/LandingPage"/>} />
          <Route path="/LandingPage" exact element={<LandingPage />} />
          <Route path="/LandingPage/BecomeOurTutor" exact element={<BecomeOurTutor/>} />
          <Route path="/TermandConditions" element={<TermsAndConditions />} />
          <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/LandingPage/AboutUs" element={<AboutUs/>} />
          <Route path="/underConstruction" element={<UnderConstruction/>} />
          <Route path="/PageNotFound" element={<PaageNotFound/>}/>
        </Routes>
        <Footer />
    </Router>
    <Notfoundpage/>
    </Suspense>  */}

    {/* <Navbar closeData={clicked} />
   {/*  */}
   
   <AboutUs/>
  </div> 
  )
  // }
};
ReactDOM.render(<App />, document.getElementById("app"));
