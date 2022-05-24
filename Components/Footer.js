import React from 'react'
import { HiOutlineMinus } from 'react-icons/hi'
import { AiFillInstagram, AiFillTwitterCircle, } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

const FooterLinksContainer = ({ title }) => {
  return <div className='footer__links-container' >

    <h4>{title}</h4>

    <div style={{
      margin: '0.5rem 0rem 0.8rem 0rem',
    }} > <HiOutlineMinus /> </div>

    <div className='footer__links' >
      <span>Contact</span>
      <span>Cretik Audit</span>
      <span>Contact</span>
      <span>Cretik Audit</span>
    </div>

  </div>

}

const Footer = () => {
  return (
    <footer>

      <div className='footer__body-container' >

        <FooterLinksContainer title='About' />
        <FooterLinksContainer title='Help' />
        <FooterLinksContainer title='Developers' />

      </div>

    </footer>
  )
}

const FooterBottom = () => {

  return <div className='footer-bottom_container' >

    <h3>Hamster Swap 2022. All Rights Reserved</h3>

    <div className='bottom__container-social_media_links' >

      <AiFillInstagram style={{
        marginRight: '0.5rem'
      }} />
      <AiFillTwitterCircle style={{
        marginRight: '0.5rem'
      }} />
      <FaTelegramPlane />

    </div>

  </div>

}

export default Footer
export { FooterBottom }