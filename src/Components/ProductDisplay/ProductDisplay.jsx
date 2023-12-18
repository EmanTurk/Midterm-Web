import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
<div className="productdisplay-left">
<div className="productdiplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
</div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img' src={product.image} alt="" />
</div>

</div>
<div className="productdisplay-right">

    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
    </div>
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
        <div className="productdisplay-right-description">
            A lightweight, made with 90% cotton. worn as undershirt or outer garmet.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>Add To Cart</button>
        <p className='productdisplay-right-catagory'><span>Category : </span>Women, T-shirt, Crop Top</p>
        <p className='productdisplay-right-catagory'><span>Tags : </span>Modern Style</p>
    </div>
</div>

    </div>
  )
}

export default ProductDisplay