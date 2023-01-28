import React from 'react'
import {RiHome5Line, RiMapPinLine, RiAccountPinBoxLine, RiEarthLine} from 'react-icons/ri'



interface Props{
    setMenu: any
    menu: any
}

const MenuModal = ({setMenu, menu}: Props) => {


  return (
    <>
    <div className='fixed w-full bg-wrapper z-[20] top-0 left-0 h-screen' onClick={() => setMenu(false)} /> 
     
        <div
        className=' bg-[var(--secondary)] scrollLock right-0 z-50 h-[100vh] top-0 w-60 fixed menu'>
        
        <div className='flex justify-center pt-8'>
        <img src="/hero.png" alt="logo" className='h-28 w-28' />
        </div>

       <div className='mt-28 ml-5'>
    <ul className="mt-1 ml-8">
			   <li className="flex space-x-2 my-4">
				  <img src="/logo.png" alt="logo" className="h-5 w-5 rotate-12"/>
				 <a href={"/oh-my-dog/#service"} onClick={() => setMenu(false)}  className=" text-base font-semibold text-[var(--dark)]">Services</a>
			   </li>
         <li className="flex space-x-2 my-4">
				  <img src="/logo.png" alt="logo" className="h-5 w-5 rotate-12"/>
				 <a href={"/oh-my-dog/#about"} onClick={() => setMenu(false)}  className=" text-base font-semibold text-[var(--dark)]">About us</a>
			   </li>
         <li className="flex space-x-2 my-4">
				  <img src="/logo.png" alt="logo" className="h-5 w-5 rotate-12"/>
				 <a href={"/oh-my-dog/#team"} onClick={() => setMenu(false)}  className=" text-base font-semibold text-[var(--dark)]">Team</a>
			   </li>
         <li className="flex space-x-2 my-4">
				  <img src="/logo.png" alt="logo" className="h-5 w-5 rotate-12"/>
				 <a href={"/oh-my-dog/#plans"} onClick={() => setMenu(false)}  className=" text-base font-semibold text-[var(--dark)]">Prices</a>
			   </li>
         <li className="flex space-x-2 my-4">
				  <img src="/logo.png" alt="logo" className="h-5 w-5 rotate-12"/>
				 <a href={"/oh-my-dog/contact"} className=" text-base font-semibold text-[var(--dark)]">Contact us</a>
			   </li>
		
		</ul>
       </div>

       <div className='w-full border-t-2 border-[var(--dark)] absolute bottom-0 flex justify-center'>
          <h3 className='text-[var(--dark)] p-3 text-xs'>Oh My Dog v1.01</h3>
       </div>

        </div>
    
    </>
  )
}

export default MenuModal