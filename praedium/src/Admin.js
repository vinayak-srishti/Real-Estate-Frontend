import React from 'react'

function Admin() {
  return (
    <div>
      <form>
        <div className='continer' style={{marginTop:'100px'}}>
          <div className='row justify-content-center p-2'>
            <div className='col-sm-6 col-md-6'>
              <div className='col-12 shadow-lg p-3 mb-5 body-tertiary rounded '>
                <h1>Admin</h1>
                <div class="form-floating mb-3 col-12">
                  <input type="text" class="form-control" placeholder="Username" />
                  <label>Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" placeholder="Password" />
                  <label>Password</label>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                  <button className='col-3 btn btn-primary btn-lg'>Login</button>
                  <a href='#' className=' col-5 d-flex justify-content-end'>Forgot password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Admin