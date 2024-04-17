import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img from './Images/Land.jpg'

function Owlcarsol() {
    const options = {
        items: 1,
        loop: false,
        autoplay: false,
        autoplayTimeout: 4000,
        animateOut: 'fadeOut',
        nav: false,
        dots: false,
        margin: 50,
        responsive: {
            1100: {
                items: 5,
                innerWidth: '100%',
                outerWidth: '100%'
            },
            724: {
                items: 4,
                innerWidth: '100%',
                outerWidth: '100%'
            },
            500: {
                items: 3,
                innerWidth: '100%',
                outerWidth: '100%'
            },
            370: {
                items: 2,
                innerWidth: '100%',
                outerWidth: '100%'
            },
        },
    }
    return (
        <div>
            <div class='' style={{ marginTop: '110px' }}>
                <h1> Lands</h1>
                <OwlCarousel className='owl-theme' {...options} >
                    <div class='item '>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class='item '>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class='item col'>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <img src={Img} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Owlcarsol