import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='top'>
          <h2><i className="topIcon fab fa-pied-piper"></i> BlogApp</h2>
          <div className='icons'>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
          </div>
        </div>
        <div className='content'>
          <div className='block text'>
            <h3 className='title'>About Us</h3>
            <div className='underline'></div>
            <p>lorem ipsum jfdiunf ipsum jfdiunfd jjjdnbsfdjfdlorem ipsum jfdiunfd jjjdnbsfdjfdlorem ipsum jfdiunfd jjjdnbsfdjfdlorem ipsum jfdiunfd jjjdnbsfdjfd</p>
          </div>
          <div className='block'>
            <h3 className='title'>Get In Touch</h3>
            <div className='underline'></div>
            <ul>
              <li className='li'>123,ahemedabad</li>
              <li className='li'>info@blog.com</li>
              <li className='li'>90902121231</li>
              <li className='li'>Weekdays, 9AM-5PM</li>
            </ul>
          </div>
          <div className='block'>
            <h3 className='title'>Useful Links</h3>
            <div className='underline'></div>
            <ul>
              <li className='li'><b></b> NewsTeller</li>
              <li className='li'><b></b> FAQ</li>
              <li className='li'><b></b> Contact</li>
              <li className='li'><b></b> Merch</li>
            </ul>
          </div>
          <div className='block text'>
            <h3 className='title'>Address</h3>
            <div className='underline'></div>
            <p>lorem ipsum jfdiunfd  ipsum jfdiunfd jjjdnbsfdjfdlorem ipsum jfdiunfd jjjdnbsfdjfdlorem ipsum jfdiunfd jjjdnbsfdjfdlorem ipsum jfdiunfd jjjdnbsfdjfd</p>
          </div>
        </div>
        <div className='bottam'>
          <p>CopyRight @2020 all rights reserved</p>
          <div className='b-text'>
            <h3 className='b-h3'>Privercy Policy</h3>
            <h3>Terms and Services</h3>
          </div>
        </div>

      </footer>
    </>
  )
};

export default Footer;



