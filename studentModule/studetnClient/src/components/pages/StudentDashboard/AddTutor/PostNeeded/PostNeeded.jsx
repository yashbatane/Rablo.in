import React from 'react';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import "./PostNeeded.css";

let onlineStudents = Array.from({ length: 5 }, (_, index) => {
  return {
    name: "Zack Smith",
    id: `SC400${index}`,
    gender: "male",
    matchRate: "87%",
    subjects: ["Mathematics"],
    Rank: "verified",
  };
});


const PostNeeded = ({ currentStudent, setCurrentStudent }) => {
  return (
    <div className="postneeded_container">
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
          {onlineStudents.map((student) => (
            <tr
              key={student.id}
              className={`${
                student.id == `${currentStudent ? currentStudent.id : ""}`
                  ? "activeStudent"
                  : ""
              }`}
              onClick={() => setCurrentStudent(student)}
            >
              <td className="flex">
                <div className="circle"></div>
              </td>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.gender}</td>
              <td>{student.matchRate}</td>
              <td>
                <b>{student.subjects}</b>
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
                <button className="okRequestTab">
                  <CheckCircleIcon style={{ color: "#4DB75E" }} />
                </button>
                <button className="cross-requesttab">
                  <CancelOutlinedIcon style={{ color: "#B74D65" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostNeeded