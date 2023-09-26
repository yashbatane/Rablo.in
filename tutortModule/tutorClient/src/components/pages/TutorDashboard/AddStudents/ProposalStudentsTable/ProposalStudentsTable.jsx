import React, { useState } from 'react'
import "./ProposalStudentsTable.css"
import DemoDates from '../DemoDates/DemoDates'
import { FaRupeeSign } from 'react-icons/fa';

export default function ProposalStudentsTable({ currentStudent1, setCurrentStudent1, lock, setLock }) {
    const [action, setAction] = useState(true);
    // setLock(true);
    const studentsArray = Array.from({ length: 1 }, (_, index) => {
        return {
            _id: index + 1,
            id: "ID 123456",
            sentOn: '3 days ago',
            class: 'XII',
            plan: 'Plan A',
            demoDates: [false, true, true, false, true, false],
            charges: '250/-',
            status: 'On-Trial',
            action: action ? "View" : "Cancel"
        }
    }
    );

    const toggle = () => {
        // setAction(!action);
        setLock(!lock);
    }
    return (
        <div className='proposalMaincontainer'>
            {/* <div className='proposalSearchContainer'>
                <select>
                    <option className='option'>All</option>
                </select>
            </div> */}
            <div className='proposalTableContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sent On</th>
                            <th>Class`</th>
                            <th>Plan</th>
                            <th>Demo Dates</th>
                            <th>Charges</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {studentsArray.map((student) => (
                            <tr
                                key={student.id}
                                className={`${student.id == `${currentStudent1 ? currentStudent1.id : ""}` ? "activeStudent" : ""
                                    }`}
                            // onClick={() => setCurrentStudent1(student)}
                            >
                                <td>{student.id}</td>
                                <td>{student.sentOn}</td>
                                <td>{student.class}</td>
                                <td className='plan'>{student.plan}</td>
                                <td><DemoDates dates={student.demoDates} /></td>
                                <td className='charge'><FaRupeeSign color='#6764ff'/> {student.charges}</td>
                                <td>{student.status}</td>
                                <td className='' onClick={toggle}>
                                    <button className='action'>{student.action}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
