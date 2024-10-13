import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import {GoChecklist} from 'react-icons/go'
function Navbar() {
    const [active,setActive]=useState("#")
  return (
    <nav>
        <a href='#'
         onClick={()=>{setActive("#")}}
        className={active==="#" ? "active":""}>
<AiOutlineHome/>
        </a>
        <a href='#about'
          onClick={()=>{setActive("#about")}}
          className={active==="#about" ? "active":""}>
<BiUser/>
        </a>
        <a href='#experience'
          onClick={()=>{setActive("#experience")}}
          className={active==="#experience" ? "active":""}>
<FaLaptopCode/>
        </a>
        <a href='#project'
          onClick={()=>{setActive("#project")}}
          className={active==="#project" ? "active":""}>
<GoChecklist/>
        </a>
        <a href='#contact'
           onClick={()=>{setActive("#contact")}}
           className={active==="#contact" ? "active":""}
          
          >
<BiMessageSquareDetail/>
        </a>
        
    </nav>
  )
}

export default Navbar