import React from 'react'
import '../SideBar.css'

export default function SideBarFooter() {
  return (
    <div className='sideBar-footer'>
        <div className='sideBar-footer-img'>img</div>
        <div className='sideBar-footer-container'>
            <div className='sideBar-footer-content'>
                <div>Popcorn Addict</div>
                <span>4.8M followers</span>
            </div>
            <div className='sideBar-footer-button'>view challenges</div>
        </div>
    </div>
  )
}
