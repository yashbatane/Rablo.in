import React from "react";
import WelcomePage from "./components/pages/PhoneVerification/welcomePage/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import StudentDashboard from "./components/pages/StudentDashboard/StudentDashboard";
import StudentRegistration from "./components/pages/StudentRegistration/StudentRegistration";
import YourTutor from "./components/pages/YourTutor/YourTutor";
import FindTutorPage from "./components/pages/FindTutor/FindTutorPage";
import SearchAndLocateOffline from "./components/pages/FindTutorNew/SearchAndLocateOffline";
import StudRegForm from "./components/pages/TutorRegForm/StudRegForm";
import "./GlobalStyles/Form/Form.style.css";
import "./GlobalStyles/Containers/Containers.style.css";
import "./index.css";
import StudentHomeTab from "./components/pages/StudentDashboard/StudentDashboardTabs/StudentHomeTab/StudentHomeTab";
import phoneVerification from "./components/pages/PhoneVerification/PhoneVerification";
import ViewTutor from "./components/pages/StudentDashboard/StudentDashboardTabs/FindYourTutor/components/ViewTutor/ViewTutor";
import TutorFilter from "./components/pages/StudentDashboard/StudentDashboardTabs/FindYourTutor/components/TutorFilter/TutorFilter";
import FindYourTutor from "./components/pages/StudentDashboard/StudentDashboardTabs/FindYourTutor/FindYourTutor";
import AddTutor from "./components/pages/StudentDashboard/AddTutor/AddTutor";
import Otp from "./components/pages/PhoneVerification/Step2/Step2";
import FirstStep from "./components/pages/StudentRegForm/Steps/FirstStep/FirstStep";
import SecondStep from "./components/pages/StudentRegForm/Steps/SecondStep/SecondStep";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Notications from "./components/pages/StudentDashboard/Notifiaction/Notications";
import PhoneVerification from "./components/pages/PhoneVerification/Step1/Step1";
const App = () => (
  <div className="container">
    {/* <div>Name: studetnClient</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}
    {/* <YourTutor /> */}
    {/* <SearchAndLocateOffline/> */}
    {/* <StudentHomeTab/> */}
    {/* <StudentRegistration /> */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<WelcomePage />} />
          <Route path="/verification" element={<PhoneVerification />} />
          <Route path="/verification/otp" element={<Otp />} />
          <Route
            path="/verification/otp/presonal-details"
            element={<FirstStep />}
          />
          <Route
            path="/verification/otp/presonal-details/sign-up"
            element={<SecondStep />}
          />
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/find-tutor" element={<FindYourTutor />} />
          <Route path="/ViewTutor" element={<ViewTutor />} />
          <Route path="/find-tutor/filter" element={<TutorFilter />} />
          <Route path="/addtutor" element={<AddTutor />} />

          <Route path="/notification" element={<Notications />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
