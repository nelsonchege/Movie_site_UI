import React from 'react'
import ProfileCircle from './ProfileCircle'
import '../../App.css'

export default function OverLayedCircles() {
  return (
    <div className="OverLayedCircles-container">
        <div className="OverLayedCircles-1">
            <ProfileCircle containerSize={'20px'} />
        </div>
        <div className="OverLayedCircles-2">
            <ProfileCircle containerSize={'20px'}/>
        </div>
        <div className="OverLayedCircles-3">
            <ProfileCircle containerSize={'20px'} />
        </div>
    </div>
  )
}
