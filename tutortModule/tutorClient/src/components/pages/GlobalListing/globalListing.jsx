import React from 'react'
import "./globalListing.css"

import GlobalListingNav from './globalListingNav/globalListingNav'
import GlobalListingExplore from './globalListingExplore/globalListingExplore'
import ClassSection from './classSection/classSection'
// import GlobalListingNav from './globalListingNav/globalListingNav'
import TopTutors from './topTutors/topTutors'
export default function globalListing() {
  return (
    <div className='globalListingContainer'>
        <GlobalListingNav />
        <GlobalListingExplore />
        <ClassSection />
        <TopTutors />
    </div>
  )
}
