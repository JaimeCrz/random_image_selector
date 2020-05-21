import React, { useState } from 'react'
import Chance from 'chance';


const ImageShow = () => {

  const [id, setId] = useState('2');

  const changeImage = () => {
    let chance = new Chance()
    let pickImageId = chance.pickone(['1', "2", "3", '4'])
    return setId(pickImageId)
  }

  return (
    <div className='imageShowDisplay'>
      <div className='image-display'>
        <img src={`./images/image${id}.jpg`} alt='choosenOne'></img>
      </div>
      <button className='button' type="button"
        onClick={changeImage}
      >Change image!</button>
    </div>
  )
}

export default ImageShow