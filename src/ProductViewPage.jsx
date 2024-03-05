import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';

function ProductViewPage() {
  const { itemId } = useParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/postData/productViewPage/${itemId}`);
        const data = await response.json();

        if (response.ok) {
          setProductInfo(data.data);
        } else {
          console.error('Error fetching product details:', data.error);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [itemId]);

  return (
    <Div>
      {productInfo ? (
        <div className='display_details'>
          <div className="image_part">
            <img src={`/images/${productInfo.image}`} alt={productInfo.title.slice(0, 10)} />
          </div>
          <div className="descrip_part">
            <h2>{productInfo.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda voluptate rerum? Deserunt cum eum laboriosam iste explicabo animi est enim. Sapiente necessitatibus alias unde amet quod, enim iste cum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda voluptate rerum? Deserunt cum eum laboriosam iste explicabo animi est enim. Sapiente necessitatibus alias unde amet quod, enim iste cum!</p>
            <p>Rs.{productInfo.price}</p>
            <p>Brand: {productInfo.brand}</p>
            <button id="order">Order Now</button>
            <button id="cart">Add to cart</button>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}

      <Footer />
    </Div>
  );
}

export default ProductViewPage;



const Div = styled.div`
.display_details{
  display: flex;
  border: 2px solid black;
  margin: 5em;

  .descrip_part{
    background-color: #ddd;
    padding: 2em;
    P{
      text-align: justify;
    }
  }
}

img{
  width: 400px;
}

#order, #cart{
  border: 2px solid black;
  font-weight: bold;
  font-size: 15px;

  &:hover{
    cursor: pointer;
  }
}

#order{
margin-right: 10px;
}

#cart{
  background-color: #000;
  color: #fff;
  margin-left: 10px;
}
`