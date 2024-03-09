import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import { useData } from './DataContext';
import { useNavigate } from 'react-router-dom';

function ProductViewPage() {
  const { itemId } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const itemCategory = queryParams.get('category');
  const {addToCart}= useData();
  const navigate = useNavigate();

  const handleAddToCart= (productDetails)=>{
    // const productDetails= {
    //   title: "Product 1",
    //   price: 20,
    //   category: 'earphone'
    // }
    
    addToCart(productDetails);
  }

  const [productInfo, setProductInfo] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);


  useEffect(() => {
    console.log('useEffect is running');
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

    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/postData/categories/${itemCategory}`);
        const data = await response.json();

        if (response.ok) {
          setRelatedProducts(data.data);
        } else {
          console.error('Error fetching related products:', data.error);
        }
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchProductDetails();
    fetchRelatedProducts(); // Call the function to fetch related products

  }, [itemId, itemCategory]);

  const handleDivClick = (itemId, itemCategory) => {
    // Concatenate ID and category in the URL
    const url = `/ProductViewPage/${itemId}?category=${itemCategory}`;
    
    // Navigate to another component with the concatenated URL
    // console.log('Clicked on item with ID:', itemId);
    // console.log('Clicked on item with category:', itemCategory);
    navigate(url);
  };

  console.log(itemCategory);
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
            <button id="cart" onClick={()=>handleAddToCart(productInfo)}>Add to cart</button>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}

      {/* Display related products */}
      <div className="data">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <div key={relatedProducts._id} onClick={() => handleDivClick(item._id,item.category)}>
              <img src={`/images/${item.image}`} alt="data"/>
              <p className="ptitle">{item.title}</p>
              <p className="ptitle">Rs.{item.price}</p>
            </div>
          ))
        ) : (
          <p>No other products of {relatedProducts.category} category</p>
        )}
      </div>

      <Footer />
    </Div>
  );
};

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

.data{
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-row-gap: 2em;
  place-items: center;
  align-items: stretch;
  margin-bottom: 100px;
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
`