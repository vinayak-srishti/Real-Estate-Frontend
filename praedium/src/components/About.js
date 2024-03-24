import React from 'react'
import Hand from '../components/Images/handshake.png'
import Ins from '../components/Images/instagram.png'
import Twit from '../components/Images/twitter.png'
import Fac from '../components/Images/facebook.png'
import You from '../components/Images/youtube.png'
function About() {
    return (
        <div>
            <div className='row justify-content-center p-4 '>
                <div className='col-sm-6 col-md-9 bg-info-subtle' style={{ height: '180px' }}>
                     <img src={Hand}  className='rounded mx-auto d-block' style={{ width: '100px', height: '70px',marginTop:'50px'}}alt="..." />
                     <h3 className='d-flex justify-content-center fw-bold'>About us</h3>
                </div>
                <div className='col-sm-6 col-md-9 g-5 '>
                    <p >Launched in 2005, 99acres.com, India’s No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At 99acres.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
                </div>
                <div className='col-sm-6 col-md-9  '>
                    <h5>Why ssss.com?</h5>
                    <p>At present, 99acres.com prides itself for having around nine lakh property listings spanning across 600+ cities in India. Of all, the website held over 5.7 lakh paid listings at the end of FY 2018-19. In addition to providing an online platform to real estate developers, brokers and property owners for listing their property for sale, purchase or rent, 99acres.com offers advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.</p>
                    <p>With the ever-evolving online search behaviour, 99acres.com shares updated information pertinent to real estate activities, assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!</p>
                </div>
                <div className='col-sm-6 col-md-9'>
                    <h5>Connect with us:</h5>
                    <div className='col-sm-6 col-md-6 g-3'>
                    <a href='#'><img src={Ins} style={{ width: '70px', height: '70px' }} className='p-3'></img></a>
                    <a href='#'><img src={Twit} style={{ width: '70px', height: '70px' }} className='p-3'></img></a>
                    <a href='#'><img src={Fac} style={{ width: '70px', height: '70px' }} className='p-3'></img></a>
                    <a href='#'><img src={You} style={{ width: '70px', height: '70px' }} className='p-3'></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About