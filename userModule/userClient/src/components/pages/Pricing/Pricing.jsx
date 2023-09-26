import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Table from './Table/Table'
import './Pricing.css'

const Pricing = () => {
  
  return (

    
    <div className='pricingContainer'>
        <div className="pricingWrapper" style={{marginBottom:"100px"}}>
          <div className="contentWrapper">

        <Header/>

        <Table/>
        <Footer/>
          </div>
  
      
        </div>
    </div>
  
  )
}
export default Pricing
