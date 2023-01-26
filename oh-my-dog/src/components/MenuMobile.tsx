import React, { useState } from 'react'
import MenuModal from "./MenuModal"
import {TfiMenu} from "react-icons/tfi"

const MenuMobile = () => {

  const [menu, setMenu] = useState(false)


  //lock scrolling when modals are opened 


if (typeof window !== "undefined") {
  let body = window.document.body;

  if (menu === true) {
    body.classList.add("overflowHidden");
    body.classList.add("overflowHidden")
} else if (menu === false) {
   body.classList.remove("overflowHidden");
   body.classList.remove("overflowHidden");
}

}

  return (
    <div>
      <button onClick={() => setMenu(true)}>
        <TfiMenu className='h-5 w-5 mt-3 text-[var(--darker)]'/>
      </button>
     

     { menu ? (
       <MenuModal setMenu={setMenu} menu={menu} />
     ): null}
    </div>


  )
}

export default MenuMobile