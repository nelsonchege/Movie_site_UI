import React from 'react'
import '../SideBar.css'
export default function menuContainer({title,menu1,menu2,menu3,icon1,icon2,icon3}) {
  return (
    <>
        <div className='sideBar-menu-container'>
            <div className='sideBar-menu-container-menu'> {title} </div>
            <ul className='sideBar-menu-list'>
                <li className='sideBar-menu-list-items'>
                    <div>{icon1}</div>
                    <div>{menu1}</div>  
                </li>
                <li className='sideBar-menu-list-items'>
                    <div>{icon2}</div>
                    <div>{menu2}</div>  
                </li>
                {menu3?
                <li className='sideBar-menu-list-items'>
                    <div>{icon3}</div>
                    <div>{menu3}</div>  
                </li> 
                :''}
                  
            </ul>
        </div>
    </>
  )
}
