import React from 'react'


function Gallery({data, secondData}) {
  return (
    <div className="gallery_area" id="works">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="section_title mb-50">
          <h3>My Works</h3>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-10">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            {data.map(({ img, name, url, desc, summary}) =>(
            <div className="single_gallery" key={name}>
              <div className="thumb">
                <img src={img} alt="" />
              </div>
              <div className="gallery_heading">
                <span>{ name } </span>
                <small style={{color: 'white', fontWeight: 600, fontSize: 'large'}}> {desc} </small>
                <a href={url} target="_blank" rel="noreferrer" ><h6>{summary}</h6></a></div>
            </div>
            ))}
          </div>

          {/* secondData starts */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            {secondData.map(({ img, name, url, desc, summary}) =>(
            <div className="single_gallery" key={name}>
              <div className="thumb">
                <img src={img} alt="" />
              </div>
              <div className="gallery_heading">
                <span>{name}</span>
                <small style={{color: 'white', fontWeight: 600, fontSize: 'large'}}>{desc}</small>
                <a href={url} target="_blank" rel='noreferrer' style={{textDecoration: 'none'}}><h6>{summary}</h6></a>
              </div>
            </div>
            ))}
            
          </div>
          {/* row ends */}
        </div>
        
      </div>
    </div>
  </div>
</div>

  )
}

export default Gallery