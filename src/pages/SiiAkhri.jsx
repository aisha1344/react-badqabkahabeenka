import React from 'react'
import '../pages/siiAkri.css'
import '../main.css'
import why from '../images/why.png'
function SiiAkhri() {
  return (
    <div id='Sii Akhri' className='siiAkri'>
        <div className='side-one'>
            <img src={why}/>
        </div>
        <div className='side-two'>
        <h3>Dhibatoodyinka ee La kulmaan haweenka</h3>
        <p>
        Badqabka dumarka wa mid aad u liidato ayadoo ugu wacan tahay amniga dalka. <br/>
        Dumarka haddi ay kaga baahdaan dano gaared banaanka waxay lakulmi kartaa <br/>
        dhibaatooyin sida in sharafteeda lagu xad gudbo , in laga dhaco wixii ay sidatay ,iwm.<br/>
        sababtuna ay tahay amni xumada dalka kajirta taas oo sababi karta gabi ahaanba in ay 
        haweenka <br/>somaaliyeed ka niyad jabaan ka shaqaysiga dalka iyago u baqaya nafsadooda.
        </p>
        </div>
    </div>
  )
}

export default SiiAkhri