import React from 'react'
import './Table.css'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';
const Table = () => {
  return (
    <div className='tableContainer'>
        <div className="tableWrapper">
          <table >
            
            <tr >
              <td>
              </td>
              <td className='firstRow'>
                <div className="firstRowContainer">
                <div className='firstDiv'>
                    <h1>Starter</h1>
                    <p>Just Starting Up</p> 
                </div>
                <div className='secondDiv'>
                    <span className='span1'>₹</span>
                    <span className='span2'>0</span>
                    <span className='span3'>per month</span>
                    <span className='span4'>Forever</span>
                </div>
                <div className='thirdDiv'>
                   <Link to="/join"> <button>Choose</button></Link>
                </div>
                <div className='fourthDiv'>
                      INCLUDE:
                </div>
                </div>
              </td>
              <td className='firstRow'>
              <div className="firstRowContainer" >
                <div className='firstDiv' style={{borderBottom:'1px solid white'}}>
                    <h1 style={{color:'white'}}>Pro</h1>
                    <p style={{color:'white'}}>Power up your classes</p>
                </div>
                <div className='secondDiv' >
                    <span className='span1' style={{color:'white'}}>₹</span>
                    <span className='span2' style={{color:'white'}}>500</span>
                    <span className='span3' style={{color:'white'}}>per month</span>
                </div>
                <div className='thirdDiv' 
                >
                    <button
                    style={{color:'white',
                    backgroundColor:'#5271FF',
                    border:'2px solid white'
                  }
                    }
                    >Coming soon</button>
                </div>
                <div className='fourthDiv'>
                      INCLUDE:
                </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Student's Connections</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Educator's Profile Creation</td>
              <td className='icon'>
                <CheckCircleRoundedIcon style={{color:'#5271FF',fontSize:'2.4rem'}}/>
              </td>
              <td><StarRoundedIcon style={{color:'white',fontSize:'3rem'}}/></td>
            </tr>
            <tr>
              <td>Profile Listing and Promotion</td>
              <td>Regular</td>
              <td>Promoted</td>
            </tr>
            <tr>
              <td>Fee Protection & Auto Credit</td>
              <td><CheckCircleRoundedIcon style={{color:'#5271FF',fontSize:'2.4rem'}}/></td>
              <td><StarRoundedIcon style={{color:'white',fontSize:'3rem'}}/></td>
            </tr>
            <tr>
              <td>Transactional Charges (Per Transaction)</td>
              <td>4%</td>
              <td>2.5%</td>
            </tr>
            <tr>
              <td>Commission Per Student Enrolled</td>
              <td>Zero</td>
              <td>Zero</td>
            </tr>
            <tr>
              <td>Live/Online Class</td>
              <td>Streaming</td>
              <td>Interactive</td>
            </tr>
            <tr>
              <td>Auto-Recoding for All Classes</td>
              <td>upto 10 GB</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Class Slot (Single + Batch)</td>
              <td>2+1 Slots</td>
              <td>2+4 Slots</td>
            </tr>
            <tr>
              <td>Auto-course development</td>
              <td><CheckCircleRoundedIcon style={{color:'#5271FF',fontSize:'2.4rem'}}/></td>
              <td><StarRoundedIcon style={{color:'white',fontSize:'3rem'}}/></td>
            </tr>
            <tr>
              <td>Attendance Management Tool</td>
              <td>Manual</td>
              <td>Automated</td>
            </tr>
            <tr>
              <td>Test Conduction Portal</td>
              <td>Manual Creation</td>
              <td>AI-Proctored</td>
            </tr>
            <tr>
              <td>Student Performance Tracking</td>
              <td>Basic</td>
              <td>Advance</td>
            </tr>
            <tr>
              <td>In-App Messaging</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Message Delivery Channels</td>
              <td>Push Notification & Email</td>
              <td>+ SMS & Whatsapp</td>
            </tr>
            <tr>
              <td>Free Student Bidding Request (Monthly)</td>
              <td><CancelRoundedIcon style={{color:'#5271FF',fontSize:'2.4rem'}}/></td>
              <td>10 Requests</td>
            </tr>
            <tr>
              <td>Advance Market Insight & Support</td>
              <td><CancelRoundedIcon style={{color:'#5271FF',fontSize:'2.4rem'}}/></td>
              <td><StarRoundedIcon style={{color:'white',fontSize:'3rem'}}/></td>
            </tr>
            <tr>
              <td>Ready To Teach Content Support</td>
              <td><CancelRoundedIcon style={{color:'#5271FF',fontSize:'2.4rem'}}/></td>
              <td><StarRoundedIcon style={{color:'white',fontSize:'3rem'}}/></td>
            </tr>
            <tr>
              <td>AI-Guided Plan & Batch Planners</td>
              <td><CancelRoundedIcon style={{color:'#5271FF',fontSize:'2.4rem'}}/></td>
              <td><StarRoundedIcon style={{color:'white',fontSize:'3rem'}}/></td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default Table
