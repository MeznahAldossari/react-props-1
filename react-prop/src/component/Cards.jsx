import React from 'react'
import "./card.css"

function Cards({img, p, list}) {
  return (
    <div className='cardContainer'>
<div className='Cards'>
      <img src={img}></img>
      <p>{p}</p>
      <ul>
      {list.map((e)=>(
        <li>{e}</li>
      ))}
      </ul>
    </div>
    </div>
    
  )
}

export default Cards
