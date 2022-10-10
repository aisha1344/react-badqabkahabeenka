import React from 'react'
import '../main.css'
import './naguSaabsan.css'
import about from '../images/about.png'
function NaguSaabsan() {
  return (
    <div className='nagu-saabsan' id='Nagu Saabsan'>
     <div className='about'>
     <h3>Nagu saabsan</h3>
      <p>Kor u qaad codka wadajirka ah si loo hubiyo in haweenku <br/>ay xaq u leeyihiin helitaan siman iyo natiijooyinka badbaadada.</p>
      <a href='#Sii Akhri' className='btn'>Sii Akhri</a>
     </div>
     <div className='images'>
       <img src={about}/>
     </div>
    </div>
  )
}

export default NaguSaabsan