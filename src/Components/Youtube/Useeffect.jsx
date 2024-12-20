import React, { useState } from 'react'
import ProductCards from './ProductCards'

const Useeffect = () => {

   let[products,updateProducts]= useState([])

   Useeffect(()=>{
    fetch('hrjdjj')
    .resp((elem)=>resp.json)
    updateProducts(products)
   })
   if(products.length==0){
    return(<h1>Fetching Data...</h1>)
   }
   
  return (
    <>
     <div>
      {
         products.map((p) => <ProductCards {...p}></ProductCards> ) 
      }

       
     </div>
      
    </>
  )
}

export default Useeffect
