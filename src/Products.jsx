import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Footer from './components/Footer'

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=50');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <Div>
      <div className="datas">
        <h1>Products</h1>
        <div className="data">
          {Array.isArray(data) && data.length > 0 ? (
            data.map(item => (
              <div key={item.id}>
                <img src={item.thumbnailUrl} alt="data" />
                <p>ID: {item.id} </p>
                <p className='ptitle'>Title: {item.title.slice(0, 15)}</p>
              </div>
            ))
          ) : (
            <p>Error loading data. Please try again later.</p>
          )}
        </div>
      </div>
      <Footer />
    </Div>
  );
}

const Div = styled.div`
.datas{
  text-align: center;
}

.data{
  display: grid;
  grid-template-columns: auto auto auto auto;
  place-items: center;
  align-items: stretch;
  p{
    margin: 0;
  }
  .ptitle{
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 500px){
  h1{
    font-size: 15px;
  }
  .data>div{
    width: 80px;
    
    img{
      width: 50px;
    }
    P{
      font-size: 12px;
    }
  }
}
`

export default Products;
