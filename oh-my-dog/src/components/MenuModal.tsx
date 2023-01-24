import React from 'react'
import {RiHome5Line, RiMapPinLine, RiAccountPinBoxLine, RiEarthLine} from 'react-icons/ri'



interface Props{
    setMenu: any
}

const MenuModal = ({setMenu}: Props) => {

  return (
    <>
    <div className='fixed w-full bg-wrapper z-[20] top-0 left-0 h-screen ' onClick={() => setMenu(false)} /> 
     
        <div
        className=' bg-red-500 scrollLock right-0 z-50 h-[100vh] top-0 w-60 fixed'>
        
        hola
      

        </div>
    
    </>
  )
}

export default MenuModal