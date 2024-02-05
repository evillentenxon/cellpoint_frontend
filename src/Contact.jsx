import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from './components/Footer'
import { useData } from './DataContext';

function Contact() {
  const { inputData } = useData();

  useEffect(() => {
    if (inputData !== null) {
      document.getElementById('email').value = inputData;
    }
  });

  return (
    <Div>
      <div className="form">
        <form action="" method="post">
          <h2>Contact Us</h2>
          <input type="text" className='input' placeholder="Fullname" /><br />
          <input type='radio' name='gender' value='male' />male
          <input type='radio' name='gender' value='female' />female<br />
          <input type="email" id="email" className='input' placeholder='Enter email' required />
          <textarea className='input' placeholder='Message' required /><br />
          <input type="file" /><br />
          <button>send</button>
        </form>
      </div>
      {/* form end */}

      {/* map start */}
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.653712883943!2d87.69190421017112!3d26.65956767082836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58f6bb2ae73a9%3A0x7da5eaee290218cc!2sCellPoint!5e0!3m2!1sen!2snp!4v1705146376981!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      {/* iframe ends */}

      <Footer />

    </Div>
  )
}

const Div = styled.div`
font-family: ${({ theme }) => theme.fontFamily.all};

// form starts----------------------------
.form{
  text-align: center;
}
form{
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: inline-table; 
  border-radius: 15px;
  width: 40%;
  text-align: center;
  margin: 20px 0;
}
.input{
  width: 80%;
  border-width: 0 0 1px 0;
  border-color: #000;
  margin: 15px;
  text-align: center;
  font-size: 18px;
  background: none;

  &::placeholder{
    color: #555;
    text-align: center;
    font-size: 15px;
    font-style: italic;
  }

  &:focus{
    outline: none;
  }
}


textarea{
  height: 40px;
  font-family: ${({ theme }) => theme.fontFamily.all};
}

button{
  // background-color: rgb(43, 139, 213);
  background-color: ${({ theme }) => theme.colors.button};
  border: none;
  padding: 5px 15px;
  color: #fff;
  font-size: 17px;
  transition: transform 0.2s linear;
  
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
}
// form end----------------------------------

// map start---------------------------------
iframe{
  margin-top: 50px;
}

input[type='file']{
  margin-bottom: 15px;
}

@media only screen and (max-width: 500px){

  form{
    padding: 0;
    width: 325px;
    text-align: center;
  }

  .input{
    font-size: 15px;
  }

  button{
    margin-bottom: 10px;
  }

  iframe{
    // max-width: 500px;
  }
}
`

export default Contact