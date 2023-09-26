import React, { useState } from 'react'
import "./OnlineStudentsTable.css";
import SideTutor from '../SideTutor/SideTutor';

import { BsArrowDownUp } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// export default function ContainedButtons() {  
//   return (  
//     <Stack direction="row" spacing={2}>  
//       <Button variant="contained">Apply</Button>   
//     </Stack>  
//   );  
// }  




export default function OnlineStudentsTable({ currentStudent, setCurrentStudent, show, setShow ,lock,setLock}) {
    // const [show,setShow]=useState(true);
    // const toggle=(student)=>{
    //   setCurrentStudent(student);
    //   setShow(!show);

    // }
    const [btn, setBtn] = useState('Apply');
    const [cbtn, setCbtn] = useState('secondary');

    const toggleBtn = () => {
        if (btn === 'Apply') {
            // setBtn('Cancel')
            setCbtn('outlined')
        }
        else {
            setBtn('Apply');
            setCbtn('secondary')
        }
        // setCurrentStudent(!currentStudent);
    }

    let onlineStudents = Array.from({ length: 22 }, (_, index) => {
        return {
            name: "Zack Smith",
            id: `SC400${index}`,
            subjects: ["Maths", "Phy", "Chem"],
            class: "XII",
            budget: 2500,
            permonth: "per month",
            matchRate: "87%",
            success: "10/10",
            accept: <div className='btn'><Button variant='secondary' onClick={toggleBtn} >{btn}</Button></div>

        };
    });


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Subjects</th>

                    <th>Max budget <span style={{ color: "#6764ff" }} >
                        <BsArrowDownUp />
                    </span></th>
                    <th>Match  <span style={{ color: "#6764ff" }} >
                        <BsArrowDownUp />
                    </span></th>
                    <th>Success  <span style={{ color: "#6764ff" }} >
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
                        onClick={() => {
                            // setCurrentStudent(student);
                            // setShow(!show);

                        }}
                    >
                        <td className="flex">
                            <div className="circle"></div>
                            {student.name}
                        </td>
                        {/* <td>{student.id}</td> */}

                        <td>{student.class}</td>
                        <td>{student.subjects.toString()}</td>
                        <td><span style={{ color: "#6764ff" }} >
                            <FaRupeeSign />
                        </span><span style={{ color: "#6764ff", fontWeight: "bold", fontSize: "larger" }} >{student.budget} </span> {student.permonth}</td>
                        <td>{student.matchRate}</td>
                        <td><div className='headers'>{student.success}</div></td>
                        <td onClick={()=>setLock(!lock)}>{student.accept} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
