import React, { useState } from 'react'

const Card = ({id,image,info,price,name,removeTour}) => {

  const [readmore,setReadmore] = useState(false);
  function readmoreHandler(){
    setReadmore(!readmore);
  }
  const description = readmore ? info:`${info.substring(0,200)}....`
  return (
    <div className='card'>
        <img src={image} alt={name} className='image'/>
        <div className='tour-info'>
            <h4 className='tour-price'>{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div>
            {description}
            <span onClick={readmoreHandler} className='read-more'>
                {readmore ? 'show less':'read more'}
            </span>
        </div>
        <button onClick={()=>removeTour(id)} className='btn-red'>Not Interested</button>
    </div>
  )
}

export default Card
