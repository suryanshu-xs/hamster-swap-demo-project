import React, { useState } from 'react'
import { BsGear } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import { BsArrowDownCircleFill } from 'react-icons/bs'
const Body = () => {

  const [isExchangeSelected, setIsExchangeSelected] = useState(true)

  return (
    <main>

      <div className='form__container' >

        <div className='form__container-headerContainer' >

          <button
            className='exchange'
            style={{
              backgroundColor: isExchangeSelected ? 'rgba(255,234,186,255)' : 'rgba(255,223,125,255)'
            }}
            onClick={() => setIsExchangeSelected(true)}
          >Exchange</button>

          <button
            className='liquidity'

            style={{
              backgroundColor: !isExchangeSelected ? 'rgba(255,234,186,255)' : 'rgba(255,223,125,255)'
            }}
            onClick={() => setIsExchangeSelected(false)}
          >Liquidity</button>

        </div>

        <div
          className='form__container-form_wrapper'
          style={{
            borderTopLeftRadius: !isExchangeSelected ? 10 : 0
          }}
        >

          <div className='form__wrapper-header' >
            <h3>Trade tokens in an instant</h3>

            <div className='form__wrapper-iconContainer' >
              <BsGear style={{ marginRight: '0.8rem' }} />
              <BiTime />
            </div>
          </div>


          <CoinSelect destination='From' />

          <div className='downArrow-container' >
            <BsArrowDownCircleFill className='arrowDownIcon' />
          </div>

          <CoinSelect destination='To' />

          <div className='form__container-connectWallet-container' >

            <div className='connectWallet-header' >
              <h4>Slippage Tolerance</h4>
              <h4> 0.5% </h4>
            </div>

            <button>
              Connect Wallet
            </button>

          </div>


        </div>



      </div>



    </main>
  )
}

const CoinSelect = ({ destination }) => {
  return (<div className='form__wrapper-sendTokenContainer' >

    <h4>{destination}</h4>
    <div className='sendToken-inputContaienr' >

      <input type="text" placeholder='0.00' />

      <select name="coins" id="coins" >
        <option value="BTC"> BTC </option>
        <option value="ETH">ETH</option>
        <option value="SOL">SOL</option>
        <option value="USDC">USDC</option>
      </select>



    </div>

  </div>)

}

export default Body