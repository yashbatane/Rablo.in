import React from 'react'
import "./globalListingExplore.css"
import SearchField from './searchField/searchField'
import ExploreInfo from './exploreInfo/exploreInfo'
import InfoCards from './InfoCards/infoCards'
export default function globalListingExplore() {
  return (
    <div className='globalListingExploreContainer'>
      <SearchField />
      <ExploreInfo />
      <InfoCards />
     
    </div>
  )
}
