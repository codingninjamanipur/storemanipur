
import React from 'react';
import '../Styles/Menu.css';
import    { menuList }  from '../helpers/MenuList';
import MenuItem from '../components/MenuItem'
function Menu() {
  
  return (
    <div className='menu'>
    <h1 className='menuTitle'>Our Menu</h1>
    <div className='menuList'>
    {menuList.map((menuItem,key)=>{
      return (
        <MenuItem 
          key={key}
          name={menuItem.name}
          image={menuItem.image}
          price={menuItem.price}
          rating={menuItem.rating}
          numReviews={menuItem.numReviews}
        />
    
  
      )
    })}
    </div>
    </div>
  )
}

export default Menu 