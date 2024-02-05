import React from 'react'
import styled from 'styled-components'

function video() {

    return (
        <Div>
            <div className="video">
                <div className="overlay"></div>
                <h1>Welcome to <span>CELLPOINT</span></h1>
                <video src="./images/cellpoint_intro.mp4" autoPlay muted loop />
            </div>        
        </Div>
    )
}

const Div = styled.div`
font-family: ${({ theme }) => theme.fontFamily.all};

.video{
    position: absolute;
    width: 100vw;
    background-color: rgba(0,0,0,.5);
    height: auto;
    
    video{
        width: 100%;
    }

    .overlay{
        position:absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
    }
    h1{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        color: #fff;

        span{
            font-size: 45px;
        }
    }

    @media only screen and (max-width: 500px){
        h1{
            font-size: 15px;
            span{
                font-size: 25px;
            }
        }
    }
}

`

export default video