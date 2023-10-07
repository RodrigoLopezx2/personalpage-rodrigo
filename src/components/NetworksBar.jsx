import React from 'react'
import { BsGithub,BsFacebook,BsInstagram,BsLinkedin,BsMailbox2 } from "react-icons/bs";
import {BiLogoGmail  } from "react-icons/bi";
function NetworksBar() {
  return (
    <div className='flex flex-row justify-center p-1 bg-Azul_4'>
            <a href="https://github.com/RodrigoLopezx2" className='m-2'>
              <BsGithub size="40px" color='#04364A' className="drop-shadow-xl " />
            </a>
            <a href="https://www.facebook.com/rodrigo.lopez.416/" className='m-2'>
              <BsFacebook size="40px" color='#04364A' className="drop-shadow-xl " />
            </a>
            <a href="https://www.instagram.com/rodrigo_416/" className='m-2'>
              <BsInstagram size="40px" color='#04364A' className="drop-shadow-xl " />
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-lopez-8bb85817b/" className='m-2'>
              <BsLinkedin size="40px" color='#04364A' className="drop-shadow-xl " />
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-lopez-8bb85817b/" className='m-2'>
              <BiLogoGmail size="40px" color='#04364A' className="drop-shadow-xl " />
            </a>
            
    </div>
  )
}

export default NetworksBar