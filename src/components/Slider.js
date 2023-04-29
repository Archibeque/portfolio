import React from 'react'
import { Link } from 'react-scroll'

function Slider() {
  return (
    <div class="slider_area" id="home">
        <div class="single_slider  d-flex align-items-center slider_bg_1" data-aos="slide-in">
            <div class="container">
                <div class="row align-items-center position-relative">
                    <div class="col-lg-9">
                        <div class="slider_text">
                            <h3>Hi, I am Nnadi Daniel <br />
                                <small>Python && JavaScript Software Engineer</small></h3>
                        <Link class="boxed-btn3-line" to="works">View Works</Link>
                        </div>
                    </div>
                    <div class="d-none d-lg-block">
                        <img src="img/danremovebg.png" alt="" style={{position: "absolute", top: "150px", left: "65%", height: "505px", width: "auto",}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider