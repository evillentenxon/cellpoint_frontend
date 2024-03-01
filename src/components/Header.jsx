import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";


function Header() {

  const [stickyClass, setStickyClass] = useState('bottom');
  const [toggle,setToggle]= useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      let windowWidth = window.innerWidth;
      (windowHeight > 100 && windowWidth>381) ? setStickyClass('sticky-nav') : setStickyClass('bottom');
    }
  };

  const check = () => {
    alert('cart is clicked');
  }

  const searchBoxToggle = () => {
    setToggle(!toggle);
  }

  const handleSearch=()=>{
    
  }

  return (
    <Nav>
      <div class="up">
        <h1>Cellpoint</h1>
        <p>mobile center</p>
      </div>
        {/* <div className="bottom" > */}
        <div className={`navbar ${stickyClass}`}>
          <ul>
            <li><NavLink className="navs" to="/"> Overview </NavLink></li>
            <li><NavLink className="navs" to="/services"> Services </NavLink></li>
            <li><NavLink className="navs" to="/products"> Products </NavLink></li>
            <li><NavLink className="navs" to="/contact"> Contact </NavLink></li>
            <li><NavLink className="navs" to="/about"> About us </NavLink></li>
          </ul>
          <div className="icons">
            <IoSearchSharp className="icon" onClick={searchBoxToggle} />
            <CgShoppingCart className="icon" onClick={check} />
          </div>
        </div>

        {toggle && <SearchBox>          
          <input placeholder='search product here'/>
          <button onClick={handleSearch}>search</button>
          </SearchBox>}
    </Nav>
  )
}

const Nav = styled.nav`
margin: 0px;
padding: 0px;
font-family: ${({ theme }) => theme.fontFamily.all};

.up{
  width: 100%;
  overflow: hidden;
  line-height: 0em;
}

h1{
text-align: center;
font-size: 45px;
}

p{
  font-size: 20px;
  text-align: center;
}

.bottom{
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
}

.bottom ul{
  display: flex;
  gap: 3em;
  align-items: center;
}

.bottom ul li{
  list-style-type: none;
}

.navs{
  text-decoration: none;
  color: #000;
  // transition: font-weight 0.5s, transform 0.5s;
  
  &:hover{
    font-weight: bold;
    cursor: pointer;
    // transform: scaleY(1.5);
  }

  &:is(:link, :active, :visited).active{
    text-decoration: underline;
  }

}

.icons{
  display: flex;  
  align-items: center;
}

.icon{
  padding: 0 1em;
  font-size: 20px;

  &:hover{  
    cursor: pointer;
  }
}

.sticky-nav {
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sticky-nav ul{
  display: flex;
  gap: 3em;
  align-items: center;
}

.sticky-nav ul li{
  list-style-type: none;
}

.sticky-nav .navs{
  color: #fff;
}

.sticky-nav .icons{
  display: flex;  
  align-items: center;  
}

.sticky-nav .icon{
  color: #fff;
}

// media query---------------------------------------
@media only screen and (max-width: 500px){
  h1{
    font-size: 30px;
  }
  p{
    font-size: 15px;
  }
  .bottom ul{
    display: block;

  }

  .icons{
    align-items: flex-start;
    margin-top: 15px;
  }

}  
`
const SearchBox=styled.div`
font-family: ${({ theme }) => theme.fontFamily.all};
text-align: center;
position:absolute;
z-index: 2;
right: 20px;
width: 200px;
height: 100px;
background-color: rgba(200,200,200,0.5);
border: .1px solid white;

input{
  outline: none;
  height: 25px;
  margin: 10px;
  font-style: italic;
}

Button{
  margin: 10px;
  height: 25px;
  font-style: italic;
}
`

export default Header