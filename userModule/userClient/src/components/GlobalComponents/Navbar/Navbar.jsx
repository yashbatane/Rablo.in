// // Developed By -> Dhanush

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import logo from ".../pages/images/logo.png";
import logo from "./logo1.png";

import { NavLink, Link } from "react-router-dom";
// const Navbar = ({ closeData }) => {
//   const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
//   const [menuClass, setMenuClass] = useState("menu hidden");
//   const [isMenuClicked, setIsMenuClicked] = useState(false);
//   const [count, setCount] = useState(0);
//   const [clicked,setClicked]=useState("");
//   const [mobile, setMobileCss] = useState("");
//   console.log(closeData);
//   // if (closeData || !closeData){
//   //   setClicked("clicked");
//   // }

//   const closeDataFunction = () => {
//     // if (closeData>2){
//       let rem=closeData%2;
//       if (rem===0) return "close"
//     // }
//     return "open"

//     if (isMenuClicked===true && closeData===true){
//     //   if (count>1){

//       return false;
//     //   return false;
//     // }
//     // else{ return true;}
//     };
//     if (isMenuClicked===true && closeData===false){
//       return true;
//     }
//     return false;
//     // return false;
//   };
//   console.log(`${closeDataFunction()}toogle`);

//   // toggle burger menu change
//   const updateMenu = () => {
//     setCount((prev)=>prev+1);
//     if (!isMenuClicked) {
//       setBurgerClass("burgerBbar clicked");
//       setMenuClass("menu visible");
//     } else {
//       setBurgerClass("burgerBar unclicked");
//       setMenuClass("menu hidden");
//     }
//     setIsMenuClicked(!isMenuClicked);

//   };
//   const [width, setWidth] = useState(window.innerWidth);

//   function handleWindowSizeChange() {
//     setWidth(window.innerWidth);
//   }

//   // Get the size of the screen
//   useEffect(() => {
//     window.addEventListener("resize", handleWindowSizeChange);
//     return () => {
//       window.removeEventListener("resize", handleWindowSizeChange);
//     };
//   }, []);

//   const isMobile = width <= 1280;
//   const hideLogin = width <= 500;
//   // console.log(isMobile);

//   console.log(mobile);
//   return (
//     <div className="navContainer">
//       <div className="navWrapper">
//         <div className="startDiv">
//           {isMobile && (
//             <div className="dashIconDiv" onClick={updateMenu}>
//               <i
//                 className="fa fa-bars fa-2x"
//                 aria-hidden="true"
//                 style={{ fontSize: "25px" }}
//               ></i>
//               <div></div>
//             </div>
//           )}
//           <NavLink to="/LandingPage">
//             <img src={logo} />
//           </NavLink>
//         </div>
//         {!isMobile && (
//           <div className="centerDiv">
//             <div className="centerDivInner">
//               <NavLink to="/" className="hoverLine">
//                 Home
//               </NavLink>

//               <Link to="/LandingPage/AboutUs" className="hoverLine">
//                 About Us
//               </Link>
//             </div>

//           </div>
//         )}

//         <div className="endDiv">
//           <div className="endDivInner">
//             {!hideLogin && (
//               <a href="#" className="hoverLine">
//                 Login
//               </a>
//             )}
//             <div className="userName">
//               {/* <h3>User</h3> */}
//               <div className="nameHoverDiv">
//                 <div className="nameHoverDivInner">
//                   {" "}
//                   <a href="#">Dashboard</a>
//                 </div>
//                 <div className="nameHoverDivInner">
//                   {" "}
//                   <a href="#">Logout</a>
//                 </div>
//               </div>
//             </div>

//             <button className="registerButton">
//               <NavLink to="/LandingPage/BecomeOurTutor" id="navLink">
//                 Become our tutor
//               </NavLink>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div style={{backgroundColor:"red"}}>
//       {isMenuClicked ? (

//           <div className="menuList" id={`${isMobile}toogle`}>
//             <div className="menuListInner">
//               {" "}
//               <a href="#">Home</a>
//             </div>

//             <div className="menuListInner">
//               {" "}
//               <a href="#">About Us</a>
//             </div>
//             {hideLogin && <a href="#">Login</a>}
//           </div>

//       ) : null}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
import "./Navbar.css";
// import 'bootstrap/js/dist/dropdown';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  // Get the size of the screen
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1300;
  const hideLogin = width <= 500;
  return (
    <div className="navbarContainer">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div
          className="container-fluid"
          style={{ width: isMobile ? "100vw" : "95vw" }}
        >
          <NavLink to="/LandingPage" className="navbar-brand" >
            <img src={logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">



            <div className="endDiv">
                <div className="endDivInner">
                  {/* <NavLink to="/" className="hoverLine">
               Home
               </NavLink>
               <a></a>

               <Link to="/LandingPage/AboutUs" className="hoverLine">
                 About Us
              </Link> */}
                  <NavLink to="/pricing" className="hoverLine">
                    Pricing
                  </NavLink>
                  <NavLink to="/support" className="hoverLine">
                   Support  {/*about us*/}
                  </NavLink>
                {/* </div>
              </div>
            

            <div className="endDiv">
              <div className="endDivInner"> */}
                {!hideLogin && (
                  <NavLink to="/AboutUs" className="hoverLine">
                    About us {/*login*/}
                  </NavLink>
                )}
                <button className="forStudentsButton">
                  {/* <NavLink to="/LandingPage/BecomeOurTutor" id="navLink"> */}
                   <NavLink className="NavLinkButton" to="/">For Students</NavLink>
                  {/* </NavLink> */}
                </button>
              </div>
            </div>


            {/* </div> */}

            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>

      {/* <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link with href
      </a>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Button with data-bs-target
      </button> */}

      <div
        className="offcanvas offcanvas-start"
        style={{ height: "50vh", backgroundColor: "#BAC5FD" }}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            
          </h5> */}
          <img src={logo} />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div></div>
          <div className="dropdown mt-3 menuList">
            <NavLink to="/LandingPage" className="dropdown-item" href="#" style={{ color: "white" }}>
              Home
            </NavLink>

            <NavLink to="/AboutUs" className="dropdown-item" href="#" style={{ color: "white" }}>
              About Us
            </NavLink>

            <a className="dropdown-item" href="#" style={{ color: "white" }}>
              Login{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
