import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
// import LinkedIn from "@mui/material/Icon"

function Footer() {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [subject, setSubject] = useState(null)
  const [message, setMessage] = useState(null)



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_URL}/sendToMail`, {
      name,
      email,
      subject,
      message
    })
    .then((res) => {
      toast.success(res.data)
    })
    .catch(err => toast.error(err))
  }
 
  return (
    <footer className="footer">
  <div className="footer_top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="lets_talk">
            <h3>Do you have any Project? <small>Let’s Talk</small> </h3>
            <p>I am willing to work on any web project that matches my skill declaration. Either part-time, Full time or contract based and i'm also open to negotiations.
              You can always reach out to me via any of my contact handles or simply leave a message. </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="single_links d-flex justify-content-between align-items-center">
            <span>LinkedIn</span>
            <a target="_blank" href="https://www.linkedin.com/in/nnadi-daniel-643010176/" rel='noreferrer'> </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single_links d-flex justify-content-between align-items-center">
            <span>Github</span>
            <a href="https://github.com/nnadidan360" target="_blank" rel='noreferrer'> <i className="fa fa-github" /> </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single_links d-flex justify-content-between align-items-center">
            <span>Twitter</span>
            <a href="https://twitter.com/NnadiDaniel6" target="_blank" rel='noreferrer'> <i className="fa fa-twitter" /> </a>
          </div>
        </div>
        {/* <div className="col-md-3">
          <div className="single_links d-flex justify-content-between align-items-center">
            <span>whatsapp</span>
            <a href="https://wa.me/+2349032849814" target="_blank" rel='noreferrer'> </a>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  {/* contact */}
  <div className="row" id="contact">
    <div className="col-12">
      <h2 className="contact-title">Get in Touch</h2>
    </div>
    <div className="col-lg-8">
      
      <form className="form-contact contact_form">
      <div className='form-contact'>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea className="form-control w-100" name="message" onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message" style={{padding:"40px"}} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input className="form-control" name="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email address" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input className="form-control" name="subject" onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Enter Subject" />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="boxed-btn" onClick={handleSubmit}>Send Message</button>
        </div>
        </div>
      </form>
    </div>
    <div className="col-lg-4">
      <div className="media contact-info">
        <span className="contact-info__icon"><i className="ti-home" /></span>
        <div className="media-body">
          <h3>Location</h3>
          <p> Owerri, Imo Nigeria</p>
        </div>
      </div>
      <div className="media contact-info">
        <span className="contact-info__icon"><i className="ti-tablet" /></span>
        <div className="media-body">
          <h3>phone- no</h3>
          <p>+234-8162733288</p>
        </div>
      </div>
      <div className="media contact-info">
        <span className="contact-info__icon"><i className="ti-email" /></span>
        <div className="media-body">
          {/* <h3></h3> */}
          <p>Send your questions any time!</p>
        </div>
      </div>
    </div>
  </div>
  <div className="copy-right_text">
    <div className="container">
      <div className="footer_border" />
      <div className="row">
        <div className="col-xl-12">
          <p className="copy_right text-center">
            Copyright ©{new Date().getFullYear()} All rights reserved | Nnadidan
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer