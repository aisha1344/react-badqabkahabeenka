import React from 'react'
import {GiScreaming} from 'react-icons/gi'
import {FaRunning} from 'react-icons/fa'
import {GiHighPunch}  from 'react-icons/gi'
import {GrUserManager}  from 'react-icons/gr'
import '../main.css'
import '../pages/naguSaabsan.css'
const icons = [
  GiScreaming,
  GiHighPunch,
  FaRunning,
  GrUserManager
]
function Talooyin() {
  return (
    <div className='talooyin' id='Taloyin'>
    <div className='text'>
    <h3>Talooyin is-difaacid</h3>
      <h4>Aan Soo Celino Awoodeena</h4> 
    </div>
      <div className='tips'>
        <div className='box'>
          <div className='icons'>
            <GiScreaming/>
          </div>
          <div className='talo'>
            <h4>Hel codkaaga</h4>
            <p>qayli, qayli oo qayli</p>
          </div>
        </div>
        <div className='box'>
          <div className='icons'>
            <GiHighPunch/>
          </div>
          <div className='talo'>
            <h4>Is-difaac</h4>
            <p> Dagaal, feer iyo laad</p>
          </div>
        </div>
        <div className='box'>
          <div className='icons'>
            <FaRunning/>
          </div>
          <div className='talo'>
            <h4>Sifican u orad</h4>
            <p>Orad Inta aad awoodo</p>
          </div>
        </div>
        <div className='box'>
          <div className='icons'>
            <GrUserManager/>
          </div>
          <div className='talo'>
            <h4>Maamul Naftada</h4>
            <p>Is daji ee Neef khaado</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Talooyin