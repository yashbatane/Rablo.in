import React, { useEffect } from "react";
import "./RequestTab.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../../../../store/slices/requestSlice";
import { acceptRequset } from "../../../../../store/slices/acceptRequest";

let onlineStudents = Array.from({ length: 22 }, (_, index) => {
  return {
    name: "Zack Smith",
    ID: `SC400${index}`,
    gender: "male",
    matchRate: "87%",
    subjects: ["Mathematics"],
    Rank: "verified",
  };
});

const RequestTab = ({ currentStudent, setCurrentStudent }) => {
  const data = useSelector((state) => state.getRequset);
  const tutorDetail = data.RequestSlice.result;
  console.log(tutorDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  return (
    <div className="requesttab_container">
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
            {tutorDetail &&
              tutorDetail.length > 0 &&
              tutorDetail.map((student) => (
                <tr
                  key={student._id}
                  className={`${
                    student.ID === (currentStudent ? currentStudent.ID : "")
                      ? "activeStudent"
                      : ""
                  }`}
                  onClick={() => setCurrentStudent(student)}
                >
                  <td className="flex">
                    <div className="circle"></div>
                  </td>
                  <td>{student.name}</td>
                  <td>{student.studentId}</td>
                  <td>{student.gender}</td>
                  <td>{student.profileMatch}</td>
                  <td>
                    <b>{student.subjects}</b>
                  </td>
                  <td className="rank-container-tab">
                    <div className="rank-requestTab">
                      {student.Rank === "verified" ? (
                        <>
                          <StarsRoundedIcon className="starsrounded" />
                          Veteran
                        </>
                      ) : null}
                    </div>
                  </td>
                  <td className="requesttab-buttons">
                    <button
                      className="okRequestTab"
                      onClick={dispatch(acceptRequset._id)}
                    >
                      <CheckCircleIcon style={{ color: "#4DB75E" }} />
                    </button>
                    <button
                      className="cross-requesttab"
                      onClick={dispatch(acceptRequset(acceptRequset._id))}
                    >
                      <CancelOutlinedIcon style={{ color: "#B74D65" }} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RequestTab;
