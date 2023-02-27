import React from 'react'
import '../MainContent.css'

export default function PartiesCard({movieTitle,movieSubtitle}) {
  return (
    <div className='PartiesCard-container'>
        <div className='PartiesCard-topSection'>section 1</div>
            <span>{movieTitle}</span>
            <span>{movieSubtitle}</span>
    </div>
  )
}
