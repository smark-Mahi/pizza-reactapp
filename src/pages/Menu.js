import React from 'react';
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../Styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTittle'>OUR MENU</h1>
      <div className='menuList'>{MenuList.map((item,i)=>
       <div key={i}>
       <MenuItem data={item}/>
       
       </div>
      )}
          
      </div>
    </div>
  )
}

export default Menu
