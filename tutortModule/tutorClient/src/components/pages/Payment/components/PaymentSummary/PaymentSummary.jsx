import React, {useState} from 'react'
import './styles/PaymentSummary.css'
import bitcoin from './Images/653278_coin_bitcoin_cash_currency_dollar_icon 2.png'
import candle2 from './Images/candle2.png'
import arrowdown from './Images/arrowdown2.png'
import timer from './Images/timer.png'
import bitcoin2 from './Images/bitcoin.png'
import bitcoin3 from './Images/bitcoin3.png'
import add from './Images/add.png'
import Checkbox from '@material-ui/core/Checkbox';


function PaymentsSummary() {

  const [checked, setChecked] = useState(false);
  const [isSelectedPlanClicked, setIsSelectedPlanClicked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Classroom pack');
  
  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setIsSelectedPlanClicked(false);
  }
  const handlethisClick = () => {
    setIsSelectedPlanClicked(true);
  }

  return (
    <div className='container'>
      <div className="order-summary">
        <div className="order-1">
            <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.5">
            <path d="M7.81073 8.49121V7.48079C7.81073 5.13704 9.69615 2.83496 12.0399 2.61621C12.6911 2.55223 13.3485 2.6253 13.9698 2.83073C14.5911 3.03616 15.1625 3.36938 15.6472 3.80897C16.1319 4.24855 16.5192 4.78475 16.7842 5.38306C17.0492 5.98136 17.186 6.62852 17.1857 7.28288V8.72038M9.37323 23.4183H15.6232C19.8107 23.4183 20.5607 21.7412 20.7795 19.6995L21.5607 13.4495C21.842 10.9079 21.1128 8.83496 16.6649 8.83496H8.33157C3.88365 8.83496 3.15448 10.9079 3.43573 13.4495L4.21698 19.6995C4.43573 21.7412 5.18573 23.4183 9.37323 23.4183Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1432 13H16.1536M8.85156 13H8.8599" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
            </svg>
            <p>Order Summary</p>
        </div>
        <div className="order-2">
            <div className="rectangle">
                <img src={bitcoin} width='20px' height='20px'></img>
            </div>
            <p>Coin Recharge</p>
        </div>
        <div className="order-3">
            <p className='order-3-p1'>Description</p>
            <p className='order-3-p2'>Create your account with us to get world class teaching solution.</p>
        </div>
      </div>
        <div className='line'/>

        <div className="plans">
            <div className="selected-plan">
                <div className="selected-plan-left">
                    <img src={candle2} width='15' height='15'/>
                    <p>Selected Plan</p>
                </div>
                <div className="selected-plan-right">
                    {
                        isSelectedPlanClicked?(
                            <div className="change-plan">
                                <img src={arrowdown} width='15' height='15'
                                style={{ transform: 'rotate(180deg)', cursor: 'pointer' }} 
                                onClick={()=>setIsSelectedPlanClicked(!selectedPlan)}
                                />
                                <div className="plan-list">
                                    <p style={{cursor: 'pointer'}} 
                                    onClick={()=> handlePlanClick('Classroom Pack')}>
                                    Classroom pack</p> <hr/>
                                    <p style={{cursor: 'pointer'}}
                                    onClick={()=> handlePlanClick('Freelance Pack')}
                                    >Freelance Pack</p> <hr/>
                                    <p style={{cursor: 'pointer'}}
                                    onClick={()=> handlePlanClick('Trial Pack')}
                                    >Trial Pack</p>
                                </div>
                            </div>
                        ):
                        (   <>
                                <img src={arrowdown} width='15' height='15'
                                style={{cursor: 'pointer'}}
                                onClick={handlethisClick}/> 
                                <p>{selectedPlan}</p>
                            </>
                        )

                    }
                </div>
            </div>
            <div className="selected-plan">
                <div className="selected-plan-left">
                    <img src={timer} width='9' height='13'/>
                    <p>Valid For</p>
                </div>
                <div className="selected-plan-right">
                    <p>Forever</p>
                </div>
            </div>
            <div className="selected-plan">
                <div className="selected-plan-left">
                    <img src={bitcoin2} width='14' height='14'/>
                    <p>Coins Received</p>
                </div>
                <div className="selected-plan-right">
                    <img src={bitcoin3} width='14' height='14'/>
                    <p>50</p>
                </div>
            </div>
            <div className='line2'/>
        </div>
        <div className="apply-coupon">
            <img src={arrowdown} width='15' height='15'/>
            <p>Apply Coupon!</p>
        </div>
        <div className="sub-total">
            <div className="sub-total-1">
                <div className="sub-total-1-1">
                    <p>Sub-Total</p>
                    <p>₹ 50/-</p>
                </div>
                <div className="sub-total-1-2">
                    <p>Discount</p>
                    <p style={{color: '#6764FF'}}>- ₹ 00/-</p>
                </div>
            </div>
            <div className="sub-total-2">
                <div className="sub-total-2-1">
                    <img src={bitcoin3} width='14' height='14'/> {/* TODO - need to replace this icon*/}
                    <p> Use Rablo Coins </p>
                </div>
                <p style={{color: '#6764FF'}}> - <img src={bitcoin3} width='12' height='12'/> 000 </p>
            </div>
        </div>
        <div className="apply-coupon">
            <img src={add} width='15' height='15'/>
            <p style={{color: '#6764FF'}}>Add GST</p>
        </div>
        <div className="total-to-pay">
            <p>Total to Pay</p>
            <p style={{color: '#6764FF'}}>₹ 50/-</p>
        </div>
        <div className="upgrade">
            <div className="upgrade-up">
                <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                    size='small'
                    color='primary'
                    className='checkbox-2'
                />
            <p>Yes, I agree to accept All <span style={{color: '#6764FF99', textDecoration: 'underline', fontWeight: '600'}}>the Terms and Conditions</span></p>
            </div>
            <button className='upgrade-btn'>Upgrade Now</button>
        </div>
    </div>
  )
}

export default PaymentsSummary

// import React from "react";
// import "./styles/PaymentSummary.css";

// const PaymentSummary = ()=> {
//     return (
//         <>
//         <div className="payments-summary">
//             <div className="top-heading">
//                 <h4>Order Summary</h4>
//                 <div className="Coin">
//                     <h1>Coin Recharge </h1>
//                 </div>
//                 <p className="Heading">
//                     <b>Discription</b>
//                 </p>
//                 <p className="text">
//                     Create your account with us to get
//                 </p>
//             </div>
//         </div>
//         </>
//     );
// }

// export default PaymentSummary