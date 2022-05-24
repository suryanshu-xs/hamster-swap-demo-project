import React from 'react'
import { IoMenu } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav>
      <img src="navbar-logo.png" alt="" className='navbar_logo' />

      <div className='navbar-body' >

        <div className='navbar__body-nav_options' >
          <span>
            Exchange
          </span>

          <span>
            Liquidity
          </span>

          <span>
            Farms
          </span>

          <span>
            Pool
          </span>

          <span> Launch</span>
        </div>

        <div className='navbar__body-button_container' >

          <span>$0.000</span>
          <button>Connect Wallet</button>



        </div>

        <div className='menu-icon_container' >
          <HiMenu style={{
            fontSize:20,
            cursor:'pointer'
          }} />
        </div>





      </div>

    </nav>
  )
}

export default Navbar