import React from 'react'
import logo from '../images/mylogo.png'
import '../pages/nav.css'
function NavBar() {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <Menus/>
    </div>
  )
}

const Menus = () => {
    return(
        <div className='menus'>
            <ul>
                <li><a href='#Bogga Hore' className='active'>Bogga Hore</a></li>
                <li><a href='#Nagu Saabsan'>Nagu Saabsan</a></li>
                <li><a href='#Taloyin'>Taloyin</a></li>
                <li><a href='#Emergency'>Emergency</a></li>
                <li><a href='#Post'>Post</a></li>
                <li><a href='#Nala soo xiriir'>Nala soo xiriir</a></li>
            </ul>
        </div>
    )
}

export default NavBar