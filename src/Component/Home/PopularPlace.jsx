import React from 'react'
import place from '../Img/place/NewYork.jpg'
import img1 from '../Img/place/italy.jpg'
import img2 from '../Img/place/Vietnam.jpg'
import img3 from '../Img/place/dubai.jpg'

export default function PopularPlace() {
  return (
    <>
      <div className='popularplace-cont'>
        <h1 style={{textTransform:"uppercase"}}>Popular destination </h1>

        <div className='card-container'>

          <div className="cardr">
            <div className='img-cont'>
              <img className='card-img' src={place} alt="" /></div>
            <div className='card-tet'>
              <h3>Argentina</h3>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn Explor btn-primary">Explor</a>
            </div>
          </div>

          <div className="cardr">
            <div className='img-cont'>
              <img className='card-img' src={img1} alt="" /></div>
            <div className='card-tet'>
              <h3>Italy</h3>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn Explor btn-primary">Explor</a>
            </div>
          </div>

          <div className="cardr">
            <div className='img-cont'>
              <img className='card-img' src={img2} alt="" /></div>
            <div className='card-tet'>
              <h3>Vietnam</h3>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn Explor btn-primary">Explor</a>
            </div>
          </div>


          <div className="cardr">
            <div className='img-cont'>
              <img className='card-img' src={img3} alt="" /></div>
            <div className='card-tet'>
              <h3>Dubai</h3>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn Explor btn-primary">Explor</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
