import React, {lazy, Suspense, useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Redirect, Navigate, Form } from "react-router-dom";
//AOS
// import PreRegistrationForm from "./components/pages/preRegistrationForm/preRegistrationForm";
import PreRegistrationForm from "./components/pages/Form/PreRegistrationForm";


import AOS from "aos";
import "aos/dist/aos.css";
import FileDataState from "./context/formData/formDataState"
import UnderConstruction from "./components/pages/UnderConstruction/UnderConstruction";
// Importing moduoles
import LazyLoading from "./GlobalStyles/Containers/LazyLoading/LazyLoading";
import Navbar from "./components/GlobalComponents/Navbar/Navbar";
// import HelpandSupport from './components/pages/HelpAndSupport/HelpAndSupport';
import { LandingPage } from './components/pages/LandingPage/LandingPage'; 

// const AboutUs = lazy(() => import("./components/pages/AboutUs/AboutUs").then(module => ({
//   default: module.AboutUs
// })));
// const LandingPage = lazy(()=> import("./components/pages/LandingPage/LandingPage").then(module => ({
//   default: module.LandingPage
// })));
// const BecomeOurTutor = lazy(()=> import("./components/pages/BecomeOurTutor/BecomeOurTutor").then(module => ({
//   default: module.BecomeOurTutor
// })));
// const HelpandSupport = lazy(()=> import("./components/pages/HelpAndSupport/HelpAndSupport").then(module => ({
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
import Footer2 from "./components/GlobalComponents/Footer2/Footer2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
import { AboutUs } from "./components/pages/AboutUs/AboutUs";
import Pricing from './components/pages/Pricing/Pricing'
import HelpAndSupport from "./components/pages/HelpAndSupport/HelpAndSupport";
import NavbarMobile from "./components/GlobalComponents/Navbar/NavbarMobile";
// import Notfoundpage from "./components/GlobalComponents/404page/Notfoundpage";
// App functions
const App = () => {
  //AOS initialisation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // const [closemenu,setCloseMenu]=useState(false);
  const [clicked, setClicked] = useState("");
  const isMobile = window.innerWidth;
  //Funtion handle to close the hamburger menu
  return (
    <div className="app1">
      <Suspense
        fallback={
          <div>
            <LazyLoading />
          </div>
        }
      >
        <Router>
          {/* <NavbarMobile/> */}
          <Navbar/>
          {/* <Footer2/> */}

          <LandingPage/>
         {/* <FileDataState>
             <PreRegistrationForm />
          </FileDataState>  */}

         <FileDataState>
             {/* <PreRegistrationForm /> */}
          </FileDataState> 

          <Routes>
          <Route path="/" exact element={<Navigate to="/LandingPage"/>} />
          <Route path="/LandingPage" exact element={<LandingPage />} />
          {/* <Route path="/LandingPage/BecomeOurTutor" exact element={<BecomeOurTutor/>} /> */}
          {/* <Route path="/TermandConditions" element={<TermsAndConditions />} /> */}
          {/* <Route path="/Privacypolicy" element={<PrivacyPolicy />} /> */}
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/support" element={<HelpAndSupport/>} />
          <Route path="/join" element={<FileDataState>
             <PreRegistrationForm />
          </FileDataState> } />
          {/* <Route path="/underConstruction" element={<UnderConstruction/>} /> */}
          {/* <Route path="/PageNotFound" element={<PaageNotFound/>}/> */}
        </Routes>
          {/* <Footer2 />  */}
          {/* <Navbar/> */}
        </Router>
        {/* <Notfoundpage/> */}
      </Suspense>

      {/* <Navbar closeData={clicked} />
   {/*  */}

      {/* <AboutUs/> */}
      {/* <AboutUs/>  */}
      {/* <Pricing/> */}
      {/* {/* <HelpAndSupport /> */}
{/* <<<<<<< HEAD */}
     {/* <LandingPage/> */}
   {/* <BecomeOurTutor/> */}
   {/* {<PrivacyPolicy/>} */}
   {/* {<TermsAndCondition/>} */}
   {/* <UnderConstruction/> */} 
   {/* <LandingPage /> */}
   {/* <HelpandSupport/> */}
   {/* <FileDataState>
   <PreRegistrationForm />
   </FileDataState> */}
   {/* <FileDataState>
   <PreRegistrationForm/>
   </FileDataState> */}
   <Footer2/>
  </div>
// =======
      // {/*<LandingPage/>*/}
      // {/* <BecomeOurTutor/> */}
      // {/* {<PrivacyPolicy/>} */}
      // {/* {<TermsAndCondition/>} */}
      // {/* <UnderConstruction/> */}
      // {/* <LandingPage /> */}
      // {/* <HelpAndSupport /> */}
  //     {/* <FileDataState>
  //  <PreRegistrationForm />
  //  </FileDataState> */}
    // </div>
// >>>>>>> 55511d00ed33e001d5dcda3d09df7c81cb824860
  );
  }
// };.
   
ReactDOM.render(<App />, document.getElementById("app"));

