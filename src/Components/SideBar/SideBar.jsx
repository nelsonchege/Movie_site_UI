import React from 'react'
import './SideBar.css'
import MenuContainer  from './Components/menuContainer.jsx'
import SideBarFooter from './Components/SideBarFooter'
import {TbBrowser} from 'react-icons/tb'
import {FaUserFriends} from 'react-icons/fa'
import {BsPerson} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {BiLogOut,BiHeart,BiSlideshow} from 'react-icons/bi'


export default function SideBar() {
  return (
    <div className="SideBar-container">
      <div className='sideBar-title'>Netflix</div>
        <MenuContainer title={'Menu'} menu1={'Browse'} icon1={<TbBrowser/>} menu2={'Watch List'} icon2={<BiHeart/>} menu3={'Coming Soon'} icon3={<BiSlideshow/>}/>
        <MenuContainer title={'Social'} menu1={'Friends'} icon1={<FaUserFriends/>} menu2={'Parties'} icon2={<BsPerson/>}/>
        <MenuContainer title={'General'} menu1={'Settings'} icon1={<AiFillSetting/>} menu2={'Log out'} icon2={<BiLogOut/>}/>
        <SideBarFooter/>
    </div>
  )
}
