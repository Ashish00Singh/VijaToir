import React from 'react'
import india from '../Img/place/vido/India.mp4'
import Dubai from '../Img/place/vido/Dubai.mp4'
import Italy from '../Img/place/vido/Italy.mp4'
import Vietnam from '../Img/place/vido/Vietnam.mp4'

function Countrydest() {
    return (
        <div className='popularplace-cont'>
            <h1 style={{textTransform:"uppercase"}} >summer vacation</h1>

            <div className='card-container'>
                <div className="cardr">
                    <div className='img-cont'>
                        <video className='card-img' autoPlay loop muted >
                            <source className='video' src={india} type="video/mp4" />
                        </video>
                    </div>
                    <div className='videocard-tet'>
                        <h3>India</h3>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn Explor btn-primary">Explor</a>
                    </div>
                </div>

                <div className="cardr">
                    <div className='img-cont'>
                        <video className='card-img' autoPlay loop muted >
                            <source src={Dubai} type="video/mp4" />
                        </video>
                    </div>
                    <div className='videocard-tet'>
                        <h3>Dubai</h3>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn Explor btn-primary">Explor</a>
                    </div>
                </div>

                <div className="cardr">
                    <div className='img-cont'>
                        <video className='card-img' autoPlay loop muted >
                            <source src={Italy} type="video/mp4" />
                        </video>
                    </div>
                    <div className='videocard-tet'>
                        <h3>Italy</h3>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn Explor btn-primary">Explor</a>
                    </div>
                </div>

                <div className="cardr">
                    <div className='img-cont'>
                        <video className='card-img' autoPlay loop muted >
                            <source src={Vietnam} type="video/mp4" />
                        </video>
                    </div>
                    <div className='videocard-tet'>
                        <h3>Vietnam</h3>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn Explor btn-primary">Explor</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Countrydest