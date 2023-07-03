import React from 'react'
import './Nav.css'

import {BiBook} from 'react-icons/bi'
import {MdContactPhone, MdOutlineEngineering} from 'react-icons/md'
import {BsFileEarmarkCode} from 'react-icons/bs'
import {AiOutlineHome, AiOutlineBook, AiOutlineQuestionCircle} from 'react-icons/ai'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActivNav] = useState('#header')
  
  return (
    <nav>
      <a href='#header' onClick={() => setActivNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#About' onClick={() => setActivNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineQuestionCircle/></a>
      <a href='#Expercience' onClick={() => setActivNav('#Expercience')} className={activeNav === '#Expercience' ? 'active' : ''}><BsFileEarmarkCode/></a>
      <a href='#Services' onClick={() => setActivNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><AiOutlineBook/></a>
      <a href='#Contact' onClick={() => setActivNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><MdContactPhone/></a>
    </nav>
  )
}

export default Nav
