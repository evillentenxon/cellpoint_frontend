import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/postData/fetchData?search=${searchQuery}`);
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [searchQuery]);

  const handleDivClick = (itemId) => {
    // Navigate to another component with the data item._id
    console.log('Clicked on item with ID:', itemId);
    navigate(`/ProductViewPage/${itemId}`);
  };

  return (
    <Div>
      <div className="datas">
        <h1>Products</h1>
        <input
          id="searchInput"
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          placeholder="Search here..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />

        <div className="data">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item._id} onClick={() => handleDivClick(item._id)}>
                <img src={`/images/${item.image}`} alt="data" />
                <p className="ptitle">{item.title}</p>
                <p className="ptitle">Rs.{item.price}</p>
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

#searchInput{
  width: 500px;
  height: 40px;
  margin-bottom: 30px;
  border: 2px solid black;
  font-size: 17px;
  text-align: center;
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
