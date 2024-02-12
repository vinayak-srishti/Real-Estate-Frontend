import React from 'react'
import Yout from '../components/Images/youtube.png'
import Inst from '../components/Images/instagram.png'
import Twit from './Images/twitter.png'
import Land from './Images/Land.jpg'
import '../components/Body.css'
function Body() {
    return (
        <div>
            
            <div className='carsol'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner carousel-images">
                        <div class="carousel-item active c-item" data-bs-interval="10000">
                            <img src={Land} class="d-block w-100 c-img" alt="..."></img>
                        </div>
                        <div class="carousel-item c-item" data-bs-interval="2000">
                            <img src={Land} class="d-block w-100 c-img" alt="..."></img>
                        </div>
                        <div class="carousel-item c-item">
                            <img src={Land} class="d-block w-100 c-img" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={Land} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Land} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Land} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Land} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                
  <div class="col">
    <div class="card">
      <img src={Land} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Land} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Land} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Land} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
            
        </div>
    )
}

export default Body