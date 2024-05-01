import React from 'react'
import Feed from '../components/Images/ask.png'

function Feedback() {
    return (
        <div className='mt-5 pt-5'>
            <div className='row justify-content-center p-4 '>
                <div className='col-sm-6 col-md-9 bg-info-subtle' style={{ height: '180px' }}>
                    <img src={Feed} className='rounded mx-auto d-block' style={{ width: '100px', height: '70px', marginTop: '50px' }} alt="..." />
                    <h3 className='d-flex justify-content-center fw-bold'>Feedback</h3>
                </div>
                <div className='col-sm-6 col-md-8 g-4  '>
                    <h4 className='d-flex justify-content-evenly col-sm-6 col-md-10'>We would love to hear you!</h4>
                    <div className="form-floating mb-3 col-sm-6 col-md-6 rounded mx-auto d-block">
                        <input type="text" className="form-control" placeholder='Your name' />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3 col-sm-6 col-md-6 rounded mx-auto d-block">
                        <input type="email" className="form-control" placeholder='name@example.com' />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating col-sm-6 col-md-6 rounded mx-auto d-block">
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option >I want to report a problem</option>
                            <option >I have a suggestion</option>
                            <option >I want to compliment</option>
                            <option >other</option>
                        </select>
                        <label for="floatingSelect">Select feedback</label>
                    </div><br></br>
                    <div className='col-sm-6 col-md-6 rounded mx-auto d-block'>
                        <textarea className='form-control' placeholder='Type your feedback'></textarea><br></br>
                        <button className='btn btn-primary col-12'>Send Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback