import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
// import IncomingClasses from "../DashBoardElements/IncomingClasses";
// import './TutorDatabase.css';
import './RequestTabsTable.css';
// import profilepic from "../../../../../../img/profilepic.webp";

import axios from 'axios'

const RequestTabsTable = props => {
  const { tableData, handleStudentData } = props;
  const [page, setPage] = useState(0);
  const [selectedRow, setSelectedRow] = useState(0);

  const studentsPerPage = 3;
  const studentsVisited = page * studentsPerPage;
  const pageCount = Math.ceil(tableData.length / studentsPerPage);

  useEffect(() => {
    setPage(0);
    setSelectedRow(null);
  }, [tableData]);

  const tutorId = "demoId" //fetch this according to the current user
  const handleAcceptClick = () => {
    axios.post(`http://localhost:5003/api/accept/${row.id}` , {tutorId : tutorId})
    .fetch(function(resp){
      console.log(resp)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  const handleDeclineClick = () => {
    axios.post(`http://localhost:5003/api/decline/${row.id}` , {tutorId : tutorId})
    .fetch(function(resp){
      console.log(resp)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  const displayedStudents = tableData
    .slice(studentsVisited, studentsVisited + studentsPerPage)
    .map((row, index) => {
      return (
        <div
          className={`row ${selectedRow === index ? 'selected' : ''}`}
          key={index}
          onClick={() => {
            handleStudentData(row);
            setSelectedRow(index);
          }}
        >
          <div className='name'>
            <h2>Name</h2>
            <p>{row.name}</p>
          </div>
          <div className='id'>
            <h2>ID</h2>
            <p>{row.id}</p>
          </div>
          <div className='class'>
            <h2>Ratings</h2>
            <p>
              {new Array(row.rating).fill(0).map(() => (
                <i className='fa fa-star' style={{ color: 'gold' }}></i>
              ))}
            </p>
          </div>
          <div className='age'>
            <h2>Profile Match</h2>
            <p>{row.profileMatch}%</p>
          </div>
          <div className='email'>
            <h2>Subscribers</h2>
            <p>{row.subscribers} Students</p>
          </div>
          
          <div>
            <button onClick={() => handleAcceptClick()}> Accept </button>
            <button onClick={() => handleDeclineClick()}> Decline </button>
          </div>

        </div>
      );
    });

  const changePage = ({ selected }) => {
    setPage(selected);
    setSelectedRow(null);
  };

  return (
    // <table class="DatabaseContentTable">
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Id</th>
    //       <th>Class</th>
    //       <th>Email</th>
    //       <th>Age</th>
    //     </tr>
    //   </thead>

    //   <tbody>
    //     {tableData.map((i) => {
    //       return (
    //         <tr onClick={()=>{handleStudentData(i)}}>
    //           <td>
    //             <div className="StudentnameContainer" >
    //               <div className="StudentImage">
    //                 <img src={profilepic} alt="tutorprofilepci" />
    //               </div>
    //               <div className="studentName">
    //                 <p>{i.name}</p>
    //               </div>
    //             </div>
    //           </td>
    //           <td>{i.id}</td>
    //           <td>{i.class}</td>
    //           <td>{i.email}</td>
    //           <td>{i.age}</td>
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
    <div className='NewDatabaseTableContainer'>
      <div className='NewDatabaseTable'>{displayedStudents}</div>

      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pageIndicator'}
        previousLinkClassName={'prevBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'selected'}
      />
    </div>
  );
};

export default RequestTabsTable;
