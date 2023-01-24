import React, { useState } from 'react'
import MenuModal from "./MenuModal"
import {TfiMenu} from "react-icons/tfi"

const MenuMobile = () => {

  const [menu, setMenu] = useState(false)

  return (
    <div>
      <button onClick={() => setMenu(true)}>
        <TfiMenu className='h-5 w-5 mt-3'/>
      </button>
     

     { menu ? (
       <MenuModal setMenu={setMenu}/>
     ): null}
    </div>


  )
}

export default MenuMobile