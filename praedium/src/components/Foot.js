import React from 'react'
import Yout from '../components/Images/youtube.png'
import Inst from '../components/Images/instagram.png'
import Twit from './Images/twitter.png'
import Fac from './Images/facebook.png'

function Foot() {
    return (
        <div>
            <div class='fixed-xxl-bottom bg-dark text-light ' style={{ padding: '50px',marginTop:'10px',marginBottom:'10px'}}>
                <div class='row col-auto '>
                    <div class='col  '>
                        <ul style={{ listStyle: 'none' }} class='d-inline-grid'>
                            <h4>Company</h4><br></br>
                            <p><a href='/about' class='text-light text-decoration-none'><li>About us</li></a></p>
                            <p><a href='#' class='text-light text-decoration-none'><li>Contact us</li></a></p>
                            <p><a href='/privacy' class='text-light text-decoration-none'><li>privacy policy</li></a></p>
                        </ul><br></br>
                    </div>
                    <div class='col'>
                        <ul style={{ listStyle: 'none' }} class='d-inline-grid'>
                            <h4>Links</h4><br></br>
                            <p><a href='/terms' class='text-light text-decoration-none'><li>Terms & Condition</li></a></p>
                            <p><a href='#' class='text-light text-decoration-none'><li>Report problem</li></a></p>
                            <p><a href='#' class='text-light text-decoration-none'><li>Safty Guide</li></a></p>
                            <p><a href='/feedback' class='text-light text-decoration-none'><li>Feedeback</li></a></p>
                        </ul>
                    </div>
                    <div class='col'>
                        <h4>Contact us</h4><br></br>
                        <div class='col'>
                            <p>Phone - 8393654</p>
                            <p>Email - praedium@gmail.com</p>
                        </div>
                        <div class='col'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.276101096391!2d77.2093330387409!3d8.307281600335273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045516f27e1797%3A0x9eaf4bffb1fa19c1!2sMarthandam%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1707636115513!5m2!1sen!2sin" width="300" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div><br></br>
                        <div class='col'>
                            <h4>Connect with us</h4>
                            <div class='row'>
                                <div class='col-auto'>
                                    <a href='#'><img src={Yout} style={{ width: '37px', height: '37px' }}></img></a>
                                </div>
                                <div class='col-auto'>
                                    <a href='#'><img src={Fac} style={{ width: '37px', height: '37px' }}></img></a>
                                </div>
                                <div class='col-auto'>
                                    <a href='#'><img src={Inst} style={{ width: '37px', height: '37px' }}></img></a>
                                </div>
                                <div class='col-2'>
                                    <a href='#'><img src={Twit} style={{ width: '37px', height: '37px' }}></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foot