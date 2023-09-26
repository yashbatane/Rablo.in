import React from 'react'
import './styles/PaymentDetails.css'
import crown1 from './Image/crown1.png'
import crown2 from './Image/crown2.png'
import shield3 from './Image/shield3.png'
import shield4 from './Image/shield4.png'
import star5 from './Image/star5.png'

function PaymentDetails() {

  return (
    <div className='container'>
      <div className="Rewards">
        <div className="order-1">
            <p>Buy More Reward Points</p>
        </div>
        <div className="order-2">
            <p className='order-2-p1'>Why You Should Buy This Plan?</p>
            <p className='order-2-p2'>Here's why we think that our pro plan will be the best for you!</p>
        </div>
      </div>

      <div className="Widely-1">
        <div className="order-3">
          <div className="order-3-img">
            <img src={crown1} width='37px' height='37px'></img>
          </div>
          <p className='order3-p1'>Widely Preferred</p>
          <p className='order3-p2'>Over 80% of Rablo tutors have upgraded to pro plan</p>
        </div>
      </div>

      <div className="Widely-2">
        <div className="order4">
          <div className="order4-img">
            <img src={crown2} width='37px' height='37px'></img>
          </div>
          <p className='order4-p1'>Widely Preferred</p>
          <p className='order4-p2'>Over 80% of Rablo tutors have upgraded to pro plan</p>
        </div>
      </div>

      <div className="Fee-1">
        <div className="order5">
          <div className="order5-img">
            <img src={shield3} width='38px' height='38px'></img>
          </div>
          <p className='order5-p1'>Fee Assurance</p>
          <p className='order5-p2'>Get your fees with 100% assurity and safety</p>
        </div>
      </div>

      <div className="Fee-2">
        <div className="order6">
          <div className="order6-img">
            <img src={shield4} width='38px' height='38px'></img>
          </div>
          <p className='order6-p1'>Fee Assurance</p>
          <p className='order6-p2'>Get your fees with 100% assurity and safety</p>
        </div>
      </div>

      <div className="Access">
        <div className="order7">
          <div className="order7-img">
            <img src={star5} width='42px' height='42px'></img>
          </div>
          <p className='order7-p1'>Access to Special Features</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails

