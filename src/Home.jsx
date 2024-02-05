import React from 'react'
import Video from './components/Video'
import Footer from './components/Footer'
import styled from 'styled-components'
  
function Home() {

  return (
    <Div>
      <div className="video"><Video /></div>
      <div className="footer"><Footer /></div>
    </Div>
  )
}

const Div = styled.div`
display: grid;
gap: 749px;

@media only screen and (max-width: 500px){
  gap: 216px;
}
`

export default Home