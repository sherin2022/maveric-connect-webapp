import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import FooterLogo from '../../images/maveric-logo-white.png'


export default function Footer(){
    return(
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <img src = {FooterLogo}  alt= "Footer Image"></img>       
        &copy; {new Date().getFullYear()} Copyright:{' '} 
        Maveric Systems Limited
      </div>
    </MDBFooter>
    )
   
    
}