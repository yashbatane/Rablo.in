import React, { useState, useContext, useEffect } from "react";
import formContext from "../context/form/formContext"; //Context

const AddressFields = () => {
  const { formData, setFormData } = useContext(formContext);

  // const updateCurrAddress = (field,val) => {
  //   setFormData({...formData,currAddress:{...formData.currAddress[field]:{val}}});
  // }
  useEffect(()=>{
    if(formData.isAddressSame)
    document.querySelector('#isAddressSame').checked=true;
  },[])

  return (
    <form onSubmit={
       (e) => {
        e.preventDefault();
        // validate form
        //   if(formData.isAddressSame)
        // {
        //    setFormData({...formData,permAddress:"same as above"});
        // }
        // else{
          setFormData({ ...formData, step: ++formData.step });
        // }
        console.log(formData)
      }
    }>
      <h4 className="tutorVerification__stepHeadings">Address (Corresponding) </h4>
      <div>
        <div className="input__wrapper">
          <label htmlFor="currStreet1">
            Street 1
          </label>
            <input
              type="text"
              id="currStreet1"
              placeholder="Street 1"
              value={formData?.currAddress?.street1||""}
              onChange={(e) => {
                setFormData({...formData,currAddress:{...formData.currAddress,street1:e.target.value}});
                
              }}
            />
          
        </div>

        <div className="input__wrapper">
          <label htmlFor="currStreet2">
            Street 2
            </label>
            <input
              type="text"
              id="currStreet2"
              placeholder="Street 2"
              value={formData?.currAddress?.street2||""}
              onChange={(e) => {
                setFormData({...formData,currAddress:{...formData.currAddress,street2:e.target.value}});
              }}
            />
          
        </div>

        <div className="input__wrapper">
          <label htmlFor="currCity">
            City
            </label>
            <select
              id="currCity"
              value={formData?.currAddress?.city||""}
              onChange={(e) => {
                setFormData({...formData,currAddress:{...formData.currAddress,city:e.target.value}});
              }}
            >
              <option value={0}>Select</option>
              <option value="city1">city 1</option>
              <option value="city2">city 2</option>
              <option value="city3">city 3</option>
              <option value="city4">city 4</option>
            </select>
          
        </div>

        <div className="input__wrapper">
          <label htmlFor="currState">
            State
            </label>
            <select
              id="currState"
              value={formData?.currAddress?.state||""}
              onChange={(e) => {
                setFormData({...formData,currAddress:{...formData.currAddress,state:e.target.value}});
              }}
            >
              <option value={0}>Select</option>
              <option value="state1">state 1</option>
              <option value="state2">state 2</option>
              <option value="state3">state 3</option>
              <option value="state4">state 4</option>
            </select>
        </div>

        <div className="input__wrapper">
          <label htmlFor="currCountry">
            Country
            </label>
            <select
              id="currCountry"
              value={formData?.currAddress?.country||""}
              onChange={(e) => {
                setFormData({...formData,currAddress:{...formData.currAddress,country:e.target.value}});
              }}
            >
              <option value={0}>Select</option>
              <option value="country1">country 1</option>
              <option value="country2">country 2</option>
              <option value="country3">country 3</option>
              <option value="country4">country 4</option>
            </select>
          
        </div>

        <div className="input__wrapper">
          <label htmlFor="currZip">
            Postal Code
            </label>
            <input
              type="number"
              id="currZip"
              placeholder="Postal Code"
              value={formData?.currAddress?.zip||""}
              onChange={(e) => {
                setFormData({...formData,currAddress:{...formData.currAddress,zip:e.target.value}});
              }}
            />
          
        </div>
      </div>

      

      <h4 className="tutorVerification__stepHeadings" >Address (Permanent) </h4>
      <div>
      <div className="input__wrapper sameAddressInput__wrapper">
          <label htmlFor="isAddressSame">
            <span className="sameAddressInput__heading">
            My Permanent address is same as Corresponding address
              </span>
          </label>
            <input
              type="checkbox"
              id="isAddressSame"
              
              onChange={(e) => {
                setFormData({...formData,isAddressSame:e.target.checked});
              }}
            />
          
        </div>
            
        { !(formData.isAddressSame) &&  <div>

        
        <div className="input__wrapper">
          <label htmlFor="permStreet1">
            Street 1
            </label>
            <input
              type="text"
              id="permStreet1"
              value={formData?.permAddress?.street1||""}
              placeholder="Street 1"
              onChange={(e) => {
                setFormData({...formData,permAddress:{...formData.permAddress,street1:e.target.value}});
                
              }}
            />
        </div>

        <div className="input__wrapper">
          <label htmlFor="permStreet2">
            Street 2
          </label>
            <input
              type="text"
              id="permStreet2"
              value={formData?.permAddress?.street2||""}
              placeholder="Street 2"
              onChange={(e) => {
                setFormData({...formData,permAddress:{...formData.permAddress,street2:e.target.value}});
                

              }}
            />
        </div>

        <div className="input__wrapper">
          <label htmlFor="permCity">
            City
          </label>

            <select
              id="permCity"
              value={formData?.permAddress?.city||""}
              
              onChange={(e) => {
                setFormData({...formData,permAddress:{...formData.permAddress,city:e.target.value}});
              }}
            >
              <option value={0}>Select</option>
              <option value="city1">city 1</option>
              <option value="city2">city 2</option>
              <option value="city3">city 3</option>
              <option value="city4">city 4</option>
            </select>
        </div>

        <div className="input__wrapper">
          <label htmlFor="permState">
            State
          </label>

            <select
              id="permState"
              value={formData?.permAddress?.state||""}
              onChange={(e) => {
                setFormData({...formData,permAddress:{...formData.permAddress,state:e.target.value}});
              }}
            >
              <option value={0}>Select</option>
              <option value="state1">state 1</option>
              <option value="state2">state 2</option>
              <option value="state3">state 3</option>
              <option value="state4">state 4</option>
            </select>
        </div>

        <div className="input__wrapper">
          <label htmlFor="permCountry">
            Country
          </label>

            <select
              id="permCountry"
              value={formData?.permAddress?.country||""}
              onChange={(e) => {
                setFormData({...formData,permAddress:{...formData.permAddress,country:e.target.value}});
              }}
            >
              <option value={0}>Select</option>
              <option value="country1">country 1</option>
              <option value="country2">country 2</option>
              <option value="country3">country 3</option>
              <option value="country4">country 4</option>
            </select>
        </div>

        <div className="input__wrapper">
          <label htmlFor="permZip">
            Postal Code
          </label>

            <input
              type="number"
              id="permZip"
              placeholder="Postal Code"
              value={formData?.permAddress?.zip||""}
              onChange={(e) => {
                setFormData({...formData,permAddress:{...formData.permAddress,zip:e.target.value}});
              }}
            />
        </div>

        </div>}
      </div>


     
      {/* <button  className="tutorVerification__btn" type="submit">Continue</button> */}

    </form>
  );
};

export default AddressFields;
