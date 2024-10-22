import React from 'react'

const Layont = () => {
  return (
    <div className='h-full flex  bg-gradient-to-r from-purple-500 to-pink-500 items-center justify-center w-full'>
        <div className='h-2/3 w-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-wrap  justify-center gap-10 rounded-lg shadow-black-400 shadow-lg'>

        <div className='columns-3 '> 
            <div className='bg-red-500 h-32 w-40 rounded-lg shadow-lg shadow-slate-500'>1</div>
            <div className='bg-green-500  h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>2</div>
            <div className='bg-blue-500 h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>3</div>
        </div>

        <div className='columns-3'>
            <div className='bg-yellow-500 h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>4</div>
            <div className='bg-orange-500 h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>5</div>
            <div className='bg-purple-500 h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>6</div>
        </div>

        <div className='columns-3'>
           <div className='bg-lime-500 h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>7</div>
            <div className='bg-pink-500 h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>8</div>
            <div className='bg-amber-500 h-32 w-40  rounded-lg shadow-lg shadow-slate-500'>9</div>
        </div>
           
        </div>

      
    </div>



  )
}

export default Layont