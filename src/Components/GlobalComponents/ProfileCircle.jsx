import React from 'react'
import '../../App.css'
export default function ProfileCircle({containerSize,img}) {
  return (
    <>
    <div className="ProfileCircle-container"style={{ width: `${containerSize}`,height: `${containerSize}`,backgroundImage: `url(${img})`,backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}} />
    
    </>
    
  )
}
