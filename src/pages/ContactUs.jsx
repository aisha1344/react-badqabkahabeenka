import React from 'react'
import logo from '../images/logo white.png'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import './contactus.css'
function ContactUs() {
  return (
    <div className='contactus' id='Nala soo xiriir'>
                    <div className='contect'>
                     <div className='im'>
                     <img src={logo}/>
                     </div>
                    <div className='con-middle'>
                    <h2>Naga la soo xiriir</h2>
                    <p>Fadlan buuxi foomkan hoose si aad noogu soo dirto iimayl</p>
                    <form action='https://formspree.io/f/xvolvgpp' method='post'>
                        <input type='text' placeholder='NAME'/> 
                        <input type='text' placeholder='Email'/>
                        <div>
                        <textarea placeholder='Message'/>
                        </div> 
                        <button>SEND MESSAGE</button>
                    </form>
                    
                   
                    </div>
                    
                      
                </div>
                <div className='empty'> </div>
            <div className='footer'>
              <div className='icon'>
                       <FaFacebookSquare/>     <BsTwitter/>      <BsInstagram/>
                    </div>
            <h3>Waxaa nashqadeeyey & sameeyey <b>Caaisha, JUST</b></h3>    
             </div>
    </div>
  )
}

              
              
export default ContactUs