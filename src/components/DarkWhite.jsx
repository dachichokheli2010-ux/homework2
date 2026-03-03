import React from 'react'

export default function DarkWhite() {
  return (
    <div className='DW'>
      <button  onClick={() => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
      }}>dark/white</button>
      
    </div>
  )
}
