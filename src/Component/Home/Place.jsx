import React from 'react'
import world from '../Img/place/world.jpg'
import india from '../Img/place/internat.jpg'


function Place() {
  return (
    <>
      <div>
        <h1 className='py-3' style={{textTransform:"uppercase" , textAlign:'center'}}>Holiday Destinations</h1>
        <div className='container'>


          <div class="card mb-3" style={{ maxWidth: "640px"}}>
            <div class="row g-0">
              <div class="col-md-5">
                <img src={world} class="img-fluid rounded-start" id='place-img' alt="..." />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">International Tour</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style={{ maxWidth: "640px" }}>
            <div class="row g-0">
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">National Tour</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="col-md-5">
                <img src={india} class="img-fluid rounded-start" id='place-img' alt="..." />
              </div>
            </div>
          </div>

          <div class="card mb-3" style={{ maxWidth: "640px" }}>
            <div class="row g-0">
            <div class="col-md-5">
                <img src={india} class="img-fluid rounded-start" id='place-img' alt="..." />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">Tirth Yatra</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Place