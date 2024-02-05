import React from 'react'
import { styled, keyframes } from 'styled-components'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Footer from './components/Footer'

function services() {  
  return (
    <Div>
    <div className="services">
      <h2>Our services</h2>
      <div className="features">
        <div className="new-products">
          <img src="https://cdn-icons-png.flaticon.com/512/8676/8676496.png" alt="new_products" />
          <p>we sell new devices, accessories and other technology materials</p>
        </div>
        <div className="repair">
          <img src="https://cdn-icons-png.flaticon.com/512/9759/9759793.png" alt="repair" />
          <p>we repair broken mobile phones from the best technician and ensure its warranty</p>
        </div>
        <div className="exchange">
          <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTAxMjJfMTI5/MDAxNTQ4MTI0NTQ3Mjg2.Hr7rw9aweSUjmlRH3z3Xtwl4jNtJwQgjdgqR4VayLdgg.8nTnMmjsrr_bLHu8SRilMh5UesxjVPkXbekjbS_JISMg.PNG.skyktc/noun_exchange_1920895_000000.png?type=w800" alt="exchange" />
          <p>we exchange old phones with new ones</p>
        </div>
        <div className="purchase">
          <img src="https://cdn-icons-png.flaticon.com/512/2649/2649263.png" alt="purchase" />
          <p>we purchased and sell old phones</p>
        </div>
      </div>

      <div className="button_part">
        <p>Click the button for any of these above services</p>
        <FaArrowRightLong id="arrow" />
        <NavLink to="/contact"><button>Contact</button></NavLink>
      </div>
      <Footer />
    </div>
    </Div >
  )
}

const move = keyframes`
from{
  transform: translateY(200px);
}
to{
  transform: translateY(0px);
}
`

const blink = keyframes`
from{
  box-shadow:0 0 10px #fff,0 0 40px #fff,0 0 80px #fff;
}
to{
  box-shadow: none;
}
`

const Div = styled.div`
font-family: ${({ theme }) => theme.fontFamily.all};
color: #fff;

.services{
  padding-top: 50px;
  position: absolute;
  width: 100vw;
  height: 824px;
  background: linear-gradient(to bottom right,rgba(255, 255, 255, 0.5),rgba(0, 0, 0, 0.5)), url('./images/services.jpg');
  background-size: auto;

  h2{
    text-align: center;
  }
  
  .features{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    place-items: center;
    align-items: stretch;
  }

  img{
    width: 200px;
    margin: 20px;
  }

  .features>div{
    background-color: rgba(255,255,255,0.1);
    border: 2px solid #fff;
    border-radius: 30px;
    width: 250px;
    height: 400px;
    text-align: center;
    margin-top: 25px;
    transition: transform .5s;
    animation-name: ${move};

    &:hover{
      box-shadow: -3px -3px 3px #fff;
      transform: translateY(-10px);
      cursor: pointer;
    }

    &:nth-child(1){
      animation-duration: 1s;
    }
    &:nth-child(2){
      animation-duration: 1.5s;
    }
    &:nth-child(3){
      animation-duration: 2s;
    }
    &:nth-child(4){ 
      animation-duration: 2.5s;
    }

    p{
      padding: 15px;
      font-size: 20px;
    }
  }

  .button_part{
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin: 50px;

    button{
      background: none;
      color: #fff;
      font-size: 18px;
      border: 2px solid #fff;
      // box-shadow:0 0 10px #fff,0 0 40px #fff,0 0 80px #fff;
      height: 40px;
      animation-name: ${blink};
      animation-duration: .5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate;    

      &:hover{
        cursor:pointer;
        animation-play-state: paused;
      }
    }

    #arrow{
      // margin: auto 0;
      width: 40px;
      height: 40px;
    }
  }
  // ----------------------------------------------------------------media query start
  @media only screen and (max-width: 500px){
    img{
      width: 80px;
      margin: 5px 20px;
    }

    .features{
      grid-template-columns: repeat(2, 1fr);
    }

    .features>div{
      width: 150px;
      height: 235px;

      p{
        font-size: 14px;
        padding: 0 15px;
      }
    }

    .button_part{
      font-size: 12px;

      button{
        font-size: 12px;
      }
    }

  }

  // ----------------------------------------------------------------media query end
}

`

export default services