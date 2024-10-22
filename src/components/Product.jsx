import React from 'react'
import { useState } from 'react'
import { product } from '../products'
const Product = () => {

const Product=product
const [total,setTotal]=useState(0)
const [quantity,setQuantity]=useState(1)
const Calculate=()=>{
    var totalcost=0
    for(let i=0;i<Product.length;i++){
        totalcost=(Product[i].price+totalcost)
        
    }
    setTotal(totalcost)
    console.log(total)
}

const increase=(Id)=>{
  return ()=>{
    Product[Id].quantity=Product[Id].quantity+1
    setQuantity(Product[Id].quantity)
  }
}

  return (
    <div className='h-full w-full flex items-start justify-center'>
       <div className='h-4/5 mt-7 rounded-lg shadow-sm w-1/2 bg-slate-500'>
       <h1 className='  text-3xl text-white font-bold text-center'>Product</h1>

       {Product.map((item)=>(
        <div key={Product.id} className='h-1/6 w-full flex items-center justify-center'>
            <div className='w-11/12 h-[90%]  rounded-lg flex flex-row-reverse justify-between   shadow-sm bg-slate-400'> 
            <div className='flex w-56 items-center justify-center'>
                <button onClick={()=>setQuantity(quantity-1)} className='text-white bg-black h-10 w-1/4 mx-3 rounded-lg'>{"<"}</button>
          <div><h1>{item.quantity}</h1></div>  
            <button onClick={increase(item.id)} className='text-white bg-black h-10 w-1/4 mx-3 rounded-lg'>{">"}</button> 
            </div>
            <h1 className='text-xl text-white font-bold'>{item.name}</h1>
            <h1 className='text-xl text-white font-bold'>{item.price}</h1>
            <img className='rounded-lg ' src={item.image} alt={item.name}/>  

                      
            </div>
        </div>
       ))}
       <button className='text-white bg-black h-10 w-1/4 mx-3 rounded-lg' onClick={Calculate}>calc</button>
        <div className='h-1/4 w-full flex items-center justify-center'>{total}</div>
       </div>
    </div>
  )
}

export default Product