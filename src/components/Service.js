import React from 'react'

function Service() {
  return (
    <div className="service_area" id="services">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="section_title mb-50">
          <h3>My Services</h3>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single_service text-center">
          <div className="icon">
            <img src="img/svg_icon/1.svg" alt="" />
          </div>
          <h3>
            Frontend Engineering
          </h3>
          <p>Experienced in Application Development using React.js as a core Javascript Library as well as solid understanding of Technologies that lie within.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single_service text-center">
          <div className="icon">
            <img src="img/svg_icon/2.svg" alt="" />
          </div>
          <h3>
            Backend Engineering
          </h3>
          <p>Experienced in Application Development using Python and Javascript with solid understanding of Backend Technologies.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single_service text-center">
          <div className="icon">
            <img src="img/svg_icon/3.svg" alt="" />
          </div>
          <h3>
            Cloud Infrastructure
          </h3>
          <p>Experienced in Architecting on Google Compute Engine(GCE) as well Application Development and Deployment on GCE. </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Service