import React from 'react'
import styled from "styled-components"
import Cards from "./components/cards";
import Footer from "./components/Footer";

function About() {
  
  return (
    <Div>
      <div className="cover">
        <div className="text">
          <h1 className="title">Cellpoint</h1>
          <p className='cpDesp'>Welcome to our mobile sales and repair shop in Damak, Jhapa! We take pride in providing top-notch services for all your mobile needs. Conveniently located opposite the Gorkha Department, near the fine restaurant and Paschim Bus Stand, our shop offers a wide range of services, including mobile sales, expert repairs, and a variety of accessories to enhance your device. Whether you're looking for the latest smartphones, reliable repairs, or trendy accessories, our knowledgeable and friendly staff is ready to assist you.</p>
          <p className='cpDesp'>Our strategic location near prominent landmarks ensures easy accessibility, making it convenient for customers to drop by and explore our offerings. With a commitment to customer satisfaction and quality service, we aim to be your go-to destination for all things mobile in Damak, Jhapa. Visit us today for a seamless experience and discover the perfect solutions to meet your mobile needs.</p>
        </div>
        <Cards />
        <Footer />
      </div>
    </Div>
  )
}


const Div = styled.div`
width: 100vw;
font-family: ${({ theme }) => theme.fontFamily.all};

.text{
  position: relative;
  top: -150px;
}
.cpDesp{
  color: #fff;
  text-align: justify;
  margin: 0 100px;
  line-height: 2;
  font-size: 20px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 8px;
}
.cover{
  position:absolute;
  width: 100%;
  height: 900px;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./images/cellpoint_outdoor.jpg');
  background-size: cover;
  padding: 300px 0;
}

.title{
text-align: center;
color: #fff;
font-size: 50px;
line-height: 0;
// background-color: rgba(0,0,0,0.5);
}
  
@media only screen and (max-width: 500px){
  .cpDesp{
    margin: 0 40px;
    font-size: 15px;  
  } 
  .title{
    font-size: 25px;
  }
}
`

export default About