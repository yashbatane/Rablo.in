import React, { useEffect, useState } from "react";
import "./AddStudents.css";
import InviteStudentForm from "./InviteStudentForm/InviteStudentForm";
import BatchInvitePopup from "./BatchInvitePopup/BatchInvitePopup";
import NearMeTab from "./NearMe/NearMeTab";
import OnlineStudentsTable from "./OnlineStudentsTable/OnlineStudentsTable";
import ProposalStudentsTable from "./ProposalStudentsTable/ProposalStudentsTable";
import ProposalSidebar1 from "./ProposalSidebar1/ProposalSidebar1.jsx";
import SearchIcon from "./resource/SearchIcon.svg";
import Logo from "./resource/rablo.png";
import Wallet from "./resource/wallet.png";
import Bell from "./resource/bell.png";
import Lock from "./resource/lock.png";
import Message from "./resource/message.png";
import NavBar from "../Profiledashboard/TutorDashboardSidebar/TutorDashboardSidebar";
import TutorSideBar from "../TutorSidebar/TutorSideBar";
import SideTutor from "./SideTutor/SideTutor";
import RequestStudent from "./RequestStudent/RequestStudent";
import TopBar from "../../../GlobalComponents/TopBar/TopBar";
import SideBar from "../../../GlobalComponents/SideBar/SideBar";

export default function AddStudents() {
    const [currentTab, setCurrentTab] = useState("Near Me");
    const [currentStudent, setCurrentStudent] = useState(null);
    const [currentStudent1, setCurrentStudent1] = useState(null);
    const [isPopupActive, setIsPopupActive] = useState(false);
    const [show, setShow] = useState(true);
    const [lock, setLock] = useState(false);

    useEffect(() => {
        if (show);
    })

    const updateCurrStd = () => {
        setCurrentStudent(null);
    };
    const [minWidth, setMinWidth] = useState(false);
    const [anim, setAnim] = useState(false);
    const handleClick = () => {
        setAnim(!anim);
        setMinWidth(!minWidth);
    };
    return (
        <div className="AddStudentContainer">
            <SideBar show={setShow} />
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    background: "#F8F8F8",
                }}
            >
                <TopBar />
                <main
                    style={{
                        background: "#F8F8F8",
                        height: "90%",
                        boxShadow: "0px 4px 4px rgba(0 0, 0, 0.25)",
                    }}
                >
                    <div className="headerContainer" style={{marginTop: "1rem"}}>
                        <h2>Add Students</h2>
                        <div className="searchContainer">
                            <img src={SearchIcon}></img>
                            <input type="text" placeholder="Search Student"></input>
                        </div>
                    </div>
                    {lock ?
                        <>
                            <div className="modal">
                                <div className="">
                                    <div className="close" onClick={() => setLock(false)}>x</div>
                                    <img src={Lock} alt="" />
                                    <div className="head1">This Option is Temporarily Locked!</div>
                                    <div className="head2">Please Complete Your &nbsp;<b>Profile Verification </b>&nbsp; to &nbsp;<b>Unlock this Feature.</b></div>
                                    <button>Get Verified</button>
                                </div>
                            </div>
                        </> : <></>}
                    <div className="dataContainer">
                        <div className="tabsContainer">
                            {["Online", "Near Me", "Invite", "Request", "Proposal"].map(
                                (tab) => (
                                    <div
                                        key={tab}
                                        className={`tab ${tab == currentTab ? "activeTab" : ""}`}
                                        onClick={() => setCurrentTab(tab)}
                                    >
                                        {tab}
                                    </div>
                                )
                            )}
                        </div>
                        <div className="tableContainer">

                            {currentTab == "Online" ? (
                                <div style={{ display: 'flex' }}>
                                    <OnlineStudentsTable
                                        currentStudent={currentStudent}
                                        setCurrentStudent={setCurrentStudent}
                                        show={show}
                                        setShow={setShow}
                                        lock={lock}
                                        setLock={setLock}
                                    />
                                </div>


                            ) : null}

                            {currentTab == "Near Me" ? <NearMeTab /> : null}
                            {currentTab == "Proposal" ? (
                                <ProposalStudentsTable
                                    currentStudent1={currentStudent1}
                                    setCurrentStudent1={setCurrentStudent1}
                                    lock={lock}
                                    setLock={setLock}
                                />
                            ) : null}

                            {currentTab == "Invite" ? (
                                <InviteStudentForm setIsPopupActive={setIsPopupActive} />
                            ) : null}

                            {currentTab == "Request" ? (
                                <RequestStudent
                                    currentStudent={currentStudent}
                                    setCurrentStudent={setCurrentStudent}
                                />
                            ) : null}

                        </div>
                    </div>
                </main>
            </div>
            {
                show ?
                    <>
                        {currentTab == "Online" ? (
                            <div>
                                {currentStudent ? (
                                    <TutorSideBar
                                        currentStudent={currentStudent}
                                        setCurrentStudent={setCurrentStudent}
                                        show={show}
                                        setShow={setShow}

                                    />
                                ) : <SideTutor sh={show} />}
                            </div>
                        ) : (
                            ""
                        )}

                        {(currentTab == "Request" || currentTab == "Invite" || currentTab == 'Near Me') ? (
                            <div>
                                {/* {currentStudent ? (
            <TutorSideBar
                currentStudent={currentStudent}
                setCurrentStudent={setCurrentStudent}
            />
        ) : ( */}
                                <SideTutor sh={show} />
                                {/* )} */}
                            </div>
                        ) : (
                            // <SideTutor sh={true}/>
                            ""
                        )}

                        {currentTab == "Proposal" ? (
                            <div className="proposalSidebar">
                                {currentStudent1 ? (
                                    // <ProposalSidebar
                                    //     setCurrentStudent1={setCurrentStudent1}
                                    //     student={currentStudent1}
                                    // />
                                    <ProposalSidebar1
                                        setCurrentStudent1={setCurrentStudent1}
                                        student={currentStudent1}
                                    />
                                ) : (
                                    <SideTutor sh={show} />
                                )}
                            </div>
                        ) : (
                            // <SideTutor sh={show}/>
                            ""
                        )}

                        {isPopupActive ? (
                            <BatchInvitePopup setIsPopupActive={setIsPopupActive} />
                        ) : null}
                    </>
                    :
                    <></>
            }
        </div>
    );
}




