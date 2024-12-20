import React from 'react'

const ProductCards = ({title,img,price,rating}) => {
  return (
    <>
    <h1>{title}</h1>
    <img src={img} alt="" />
    <h2>${price}</h2>
    <h4>{rating}</h4>
    </>
  )
}

export default ProductCards
