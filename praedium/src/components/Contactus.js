import React from 'react'
import Cont from '../components/Images/contactUs.png'
import Call from '../components/Images/Call.png'
import Mail from '../components/Images/mailIcon.png'
import Query from '../components/Images/sendQuery.png'

function Contactus() {
  return (
    <div>
      <div className='row justify-content-center p-4 '>
        <div className='col-sm-6 col-md-9 bg-info-subtle' style={{ height: '180px' }}>
          <img src={Cont} className='rounded mx-auto d-block' style={{ width: '90px', height: '70px', marginTop: '50px' }} alt="..." />
          <h3 className='d-flex justify-content-center fw-bold'>Contact Us</h3>
        </div>
        <div className='col-sm-6 col-md-9 justify-content-center'>
          <img src={Cont} className='rounded mx-auto d-block' style={{ width: '37px', height: '37px', marginTop: '50px' }} alt="..." />
          <h4 className='d-flex justify-content-center fw-bold'>Get in touch</h4>
          <p className='d-flex justify-content-center ' >Connect with us through email, phone or fax, <br></br>or at following branch office office address:</p>
        </div>
        <div className='col-sm-6 col-md-6 justify-content-center'>
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <img src={Call} style={{height:'20px',width:'20px'}}/>
                <p><a href="#" className='text-decoration-none'>1800 41 99099</a><br></br>(Toll Free)</p>
              </div>
              <div class="col">
                <img src={Mail}/>
                <p><a href="#" className='text-decoration-none'>services@99acres.com</a><br></br>(Sales & General Enquire)</p>
              </div>
              <div class="col">
                <img src={Query}/>
                <p> <a href="#" className='text-decoration-none'>Send us your Query</a><br></br>(Get information)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus