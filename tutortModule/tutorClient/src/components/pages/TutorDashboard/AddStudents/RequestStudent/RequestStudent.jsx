import React from 'react'
import "./RequestStudent.css";

import { BsArrowDownUp } from 'react-icons/bs';
import DemoDates from '../DemoDates/DemoDates';


let onlineStudents = Array.from({ length: 22 }, (_, index) => {
    return {
        name: "Zack Smith",
        id: `SC400${index}`,
        subjects: ["Maths", "Phy", "Chem"],
        mode: "online",
        timing: "4:30",
        plan: "regular",
        class: "XII",
        demoDates:
            <DemoDates dates={[false, true, true, false, true, false]}/>,
        accept: <div className='btn'>Accept</div>,
        reject: <div className='rejectBtn'>X</div>
    };
});


export default function RequestStudent({ currentStudent, setCurrentStudent }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Subjects</th>

                    <th>Mode <span style={{ color: "#6764ff" }} >
                        <BsArrowDownUp />
                    </span></th>
                    <th>Timings</th>
                    <th>Demo Dates</th>
                    <th>Plan  <span style={{ color: "#6764ff" }} >
                        <BsArrowDownUp />
                    </span></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {onlineStudents.map((student) => (
                    <tr
                        key={student.id}
                        className={`${student.id == `${currentStudent ? currentStudent.id : ""}` ? "activeStudent" : ""
                            }`}
                        onClick={() => setCurrentStudent(student)}
                    >
                        <td>
                            {student.name}
                        </td>

                        <td>{student.class}</td>
                        <td>{student.subjects.toString()}</td>
                        <td><div className='headers'>{student.mode}</div></td>
                        <td><div className='headers'>{student.timing} P.M.</div></td>
                        <td>{student.demoDates}</td>
                        <td><div className='headers'>{student.plan}</div></td>
                        <td className='AcceptRejectButton'>{student.accept} {student.reject}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
