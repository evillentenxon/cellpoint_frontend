import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Footer from './components/Footer'


function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
  try {
    setLoading(true);
    const response = await fetch('http://localhost:4000/postData/fetchData');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Check if 'data' property exists and is an array
    if (!Array.isArray(result.data)) {
      throw new Error('API response does not contain an array');
    }

    setData(result.data);
    console.log(result);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};


    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Div>
      <div className="datas">
        <h1>Products</h1>
        <div className="data">
          {data.length > 0 ? (
            data.map(item => (
              <div key={item.id}>
                <img src={`/images/${item.image}`} alt="data" />
                <p>{item.name} </p>
                <p className='ptitle'>{item.title}</p>
                <p className='ptitle'>Rs.{item.price}</p>
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
  margin-bottom: 20px;
}

.data{
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-row-gap: 2em;
  place-items: center;
  align-items: stretch;
  p{
    margin: 0;
  }
  .ptitle{
    margin-bottom: 10px;
  }

  img{
    width: 100px;
  }
  div{
    border: 2px solid #aaa;
    border-radius: 1em;
    width:150px;
    transition: transform 0.5s;

    &:hover{
      border-color: #a33;
      cursor: pointer;
      transform: translateY(-2px);
    }
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
