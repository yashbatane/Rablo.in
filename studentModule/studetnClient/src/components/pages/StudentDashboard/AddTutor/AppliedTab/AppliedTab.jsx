import React, { useEffect } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./AppliedTab.css";

let onlineStudents = Array.from({ length: 5 }, (_, index) => {
  return {
    name: "Zack Smith",
    id: `SC400${index}`,
    gender: "male",
    matchRate: "87%",
    subjects: ["Mathematics"],
    Rank: "verified",
    process: "pending",
  };
});
import { useDispatch, useSelector } from "react-redux";
import { getTutorApplied } from "../../../../../store/slices/tutorAppliedSlice";

const AppliedTab = ({ currentStudent, setCurrentStudent }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tutorApplied);
  const student_details = data.tutorApplied.data;
  console.log(student_details);
  useEffect(() => {
    dispatch(getTutorApplied());
  }, []);
  return (
    <div className="postneeded_container">
      {data.loading ? (
        <h1>Loading...</h1>
      ) : data.error !== null ? (
        <h3>{data.error}</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>ID</th>
              <th>Gender</th>
              <th>Match Rate</th>
              <th>Subject</th>
              <th>Rank</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {student_details &&
              student_details.map((student) => {
                return (
                  <tr
                    key={student._id}
                    className={`${
                      student._id ==
                      `${currentStudent ? currentStudent.id : ""}`
                        ? "activeStudent"
                        : ""
                    }`}
                    onClick={() => setCurrentStudent(student)}
                  >
                    <td className="flex">
                      <div className="circle"></div>
                    </td>
                    <td>{student.studentName}</td>
                    <td>{student._id}</td>
                    <td>{student.gender}</td>
                    {/* <td>{student.matchRate}</td> */}
                    <td>
                      <b>{student.subjectName}</b>
                    </td>
                    <td className="rank-container-tab">
                      <div className="rank-requestTab">
                        {student.Rank == "verified" ? (
                          <>
                            <StarsRoundedIcon className="starsrounded" />
                            Veteran
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td className="requesttab-buttons">
                      {/* <button className="okRequestTab">
                  <CheckCircleIcon style={{ color: "#4DB75E" }} />
                </button>
                <button className="cross-requesttab">
                  <CancelOutlinedIcon style={{ color: "#B74D65" }} />
                </button> */}
                      {student.process === "Accepted" ? (
                        <>
                          <div className="accepted-appliedtab">
                            Applied{" "}
                            <CheckCircleRoundedIcon
                              style={{ height: "12px", width: "12px" }}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {student.process === "max limit" ? (
                            <>
                              <div className="max-lim-appTab">
                                Maximum Limit{" "}
                                <InfoOutlinedIcon
                                  style={{ height: "15px", width: "15px" }}
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              {student.process === "pending" ? (
                                <>
                                  <div className="pending-appliedTab">
                                    Pending
                                    <MoreHorizOutlinedIcon
                                      style={{ height: "15px", width: "15px" }}
                                    />
                                  </div>
                                </>
                              ) : null}
                            </>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppliedTab;
