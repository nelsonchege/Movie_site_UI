import React from 'react'
import '../MainContent.css'
import ProfileCircle from '../../GlobalComponents/ProfileCircle'
import {FcNext,FcPrevious} from 'react-icons/fc'
import {BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'

export default function MainSectionHeader() {
  return (
    <div className="MainContent-header">
        <div className="MainContent-header-section1">
            <FcPrevious size={'20px'}/>    
            <FcNext size={'20px'} color={'white'}/>    
            <div className="MainContent-searchBox"><BiSearch/>search</div>
        </div>
        <div className="MainContent-header-section2">
            <BsBell size={'20px'} color={'white'}/>
            <AiOutlineMessage size={'20px'} color={'white'}/>
            <ProfileCircle containerSize={'42px'} img={'https://images.unsplash.com/photo-1675151050142-8cf2377bd6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'}/>
            <div><div>account 1</div><div>desc</div></div>
        </div>
    </div>
  )
}
