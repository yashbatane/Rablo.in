import React from 'react'
import "./searchField.css"
import graduationCap from "../../resources/graduation-cap.png";
import tabs from "../../resources/tabs.png"
import book from "../../resources/book.png"

export default function searchField() {
  return (
    <div className='searchFieldContainer'>
     
     <div className='searchField'>
        <label className='singleField'><img src={graduationCap} /><select id="mode" className='select' name="mode" >
        <option value="" selected className='hidden'>mode</option>
          <option value="online">Online</option>
          <option value="Offline">Offline</option>
        </select></label>
        <div className='searchFieldDivision'></div>
        <label className='singleField'><img src={tabs} /><select id="mode" className='select' name="mode" >
        <option value="" selected className='hidden'>mode</option>
          <option value="online">Online</option>
          <option value="Offline">Offline</option>
        </select></label>
        <div className='searchFieldDivision'></div>
        <label className='singleField'><img src={book} /><select id="mode" className='select' name="mode" >
        <option value="" selected className='hidden'>mode</option>
          <option value="online">Online</option>
          <option value="Offline">Offline</option>
        </select></label>
        <button className='exploreUsBtn'>Explore us</button>
     </div>
  
    </div>
  )
}
