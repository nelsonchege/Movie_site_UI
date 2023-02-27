import React from 'react'
import './MainContent.css'
import MainSectionHeader from './Components/MainSectionHeader'
import MainSectonContent from './Components/MainSectonContent'
import MainSectonParties from './Components/MainSectonParties'
export default function MainContent() {
  return (
    <div className="MainContent-container">
        <div className="MainContent-content">
          <MainSectionHeader />
          <MainSectonContent /> 
          <MainSectonParties/>
        </div>
    </div>
  )
}
