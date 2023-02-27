import React from 'react'
import '../MainContent.css'
import PartiesCard from './PartiesCard'
export default function MainSectonParties() {
  return (
    <div className='MainSectonParties-container'>
        <div className='MainSectonParties-header'>parties</div>
        <div className='MainSectonParties-section'>
            <PartiesCard/>
            <PartiesCard/>
            <PartiesCard/>
            <PartiesCard/>
        </div>
    </div>
  )
}
