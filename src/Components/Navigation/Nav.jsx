import React from 'react'
import './Nav.css'
import {BsBook} from 'react-icons/bs'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'
const Nav = () => {
  return (
    <nav>
      <a href='header'><AiOutlineHome/></a>
      <a href='#About'><AiOutlineUser/></a>
      <a href='#Experience'><BsBook/></a>
      <a href='#Services'><AiOutlineBook/></a>
      <a href='#Contact'><AiOutlineHome/></a>
    </nav>
  )
}

export default Nav
