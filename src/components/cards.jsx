import React from 'react'
import styled from 'styled-components';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function cards() {
  return (
    <Div>
      <h1><br/>Profiles<br/><br/><br/></h1>
      <div className="cards">
        <div className="card-1">
          <img src='./images/final_sunil.jpg' alt='proprietor' />
          <h1>Mr.Sunil Niroula</h1>
          <p><span>Proprietor</span><br />We look forward to serving you at our mobile shop in Damak, Jhapa.<br /><IoMdMail className="mail" />sunilniroula@gmail.com<br /><FaPhone className="phone" />+977 9817313776</p>
        </div>
        <div className="card-2">
          <img src='./images/roman.jpg' alt='developer' />
          <h1>Roman Gautam</h1>
          <p><span>Developer</span><br />Order error or any IT issue, kindly leave a mail<br /><IoMdMail className="mail"/>romangautam71399@gmail.com<br /><FaPhone className="phone" />+977 9817313776<br/><br/><br/></p>
        </div>        
      </div>
    </Div>
  )
}

const Div = styled.div`  
background-color: #fff;
.cards{
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  align-items: stretch;
}
.cards .card-1, .card-2{
    width: 300px;    
  }  
  img{
    display: block;
    width: 100%;
    border: 3px solid #7755cc;
    padding: 2px;
    border-radius: 50%;
  }
  h1{
    color: #000;
    margin-bottom: -15px;
    text-align: center;
  }
  span{
    font-style: italic;
    font-weight: bold;
  }
  p{
    text-align: center;
  }
  
   .mail, .phone{
    margin: 0 10px;
  }

  //-------------------------------------------------media query start
  @media only screen and (max-width: 500px){
    .cards{
      display: block; 
    }  
    .cards .card-1, .card-2{
      width: 180px;    
      margin: auto;
    }  

    h1{
      font-size: 20px;
    }
    p{
      font-size: 14px;
    }
  }
  `
export default cards