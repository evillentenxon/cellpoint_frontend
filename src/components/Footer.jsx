import React from 'react'
import styled from 'styled-components';
import { FaSquareFacebook } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { useData } from '../DataContext';
import {NavLink} from 'react-router-dom';

function Footer() {

    const copyRight = {
        color: "white",
        textAlign: "center"
    }

    const { inputData, updateInputData } = useData();

    const handleInputChange = (event) => {
        const newData = event.target.value;
        updateInputData(newData);
    };

    return (
        <Div>
            <div className="sitemap">
                <ul>
                    <li><h4>SUPPORT</h4></li>
                    <li><p>Contact us</p></li>
                    <li><p>Warranty</p></li>
                    <li><p>International Warranty</p></li>
                </ul>
                <ul>
                    <li><h4>ABOUT US</h4></li>
                    <li><p>Repair team</p></li>
                    <li><p>Investor relation</p></li>
                    <li><p>Complaint</p></li>
                </ul>
                <ul>
                    <li><h4>CELLPOINT</h4></li>
                    <li><p>Overview</p></li>
                    <li><p>Services</p></li>
                    <li><p>Products</p></li>
                    <li><p>Contact us</p></li>
                    <li><p>About us</p></li>
                </ul>

                <ul>
                    <li><h4>Follow cellpoint</h4></li>
                    <li><div className="social">
                        <a href="https://www.facebook.com/profile.php?id=100084922516651&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><FaSquareFacebook className='icons' /></a>
                        <a href="https://www.tiktok.com/@cellpoint48?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7225995434048865794" target="_blank" rel="noreferrer"><SiTiktok className='icons' /></a>
                        <a href="https://www.instagram.com/cellpoint119?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer"><FaSquareInstagram className='icons' /></a>
                    </div>
                    </li>
                    <li>
                        <span><b>Let's stay in touch</b></span>
                        <div className='footer_input'>
                            <input placeholder="Enter email address" id="inputData" value={inputData}
                                onChange={handleInputChange} />
                            <NavLink to='../Contact'><button><FaGreaterThan id="greater_than" /></button></NavLink>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
            <p style={copyRight}>Copyright © 2024.All Rights Reserved.</p>
        </Div>
    )
}

const Div = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.all};
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.footer};
    height: 300px;

.sitemap {
    text-align: center;
    // background-color: blue;
    display: grid;
    grid-template-columns: auto auto auto auto;
    place-items: center;
    align-items: stretch;
    width: 100%;
}

h4 {
    margin: 0;
    color: #fff;
}

li {
    list-style-type: none;
}

span {
    color: #fff;
}

li p {
    color: #999;

    &:hover {
        text-decoration: underline;
        color: #fff;
        cursor: pointer;
    }
}

.footer_input {
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 0 15px;
    display: flex;
    align-items: center;

    #greater_than {
        color: #fff;
        font-size: 13px;
    }

    button{
        background-color: transparent;
        border: none;
        &:focus{
            outline: none;

            #greater_than {
                color: ${({ theme }) => theme.colors.button};
            }
        }
        
        &:hover {
            cursor: pointer;
        }
    }
}

input {
    text-indent: 8px;
    height: 30px;
    border: none;
    background: transparent;
    color: #fff;
    flex-grow: 10;

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: #ccc;
        font-size: 13px;
    }
}


.social {
    justify-content: center;
    display: flex;
    gap: 1.5em;
}

.social .icons {
    font-size: 25px;
    color: #999;
    transition: color 0.3s, transform 0.5s;

    &:hover {
        color: #fff;
        cursor: pointer;
        transform: scale(1.3);
    }
}

.social,
span,
.footer_input {
    margin: 20px 0;
}

hr {
    margin: 0 100px;
}
//-------------------------------------------------------media query start
@media only screen and (max-width: 500px){
    width: 100vw;
    height: 500px;

.footer_input{
    padding: 0;
}

li p{
    font-size: 13px;
}

.sitemap{
    grid-template-columns: repeat(3, 1fr);
    gap:0;
}

ul: nth-child(4){
    grid-column: span 3;
    max-width: fit-content;
    li{
        justify-contents: center;
    }
}

ul{
    padding: 5px;
    max-width: 100px;
}

hr{
    margin: 0 50px;

}

}
`

export default Footer