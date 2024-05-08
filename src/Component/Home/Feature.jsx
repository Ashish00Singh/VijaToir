import React from 'react'
import table from '../Img/icon/table.png'
import book from '../Img/icon/book.png'
import Flighr from '../Img/icon/direct-flight.png'
import Hotel from '../Img/icon/hotel.png'
import taxi from '../Img/icon/taxi.png'

function Feature() {
  return (
    <>
    <div className='fea-cont'>
    <h1 className='text-center pt-2'>The Feature</h1>
    <div className='feature'>

    <div className='fea-contain'>
        <img className='fea-icon' src={table} alt="" />
        <p className='icon-name'>Table</p>
    </div>

    <div className='fea-contain'>
        <img className='fea-icon' src={book} alt="" />
        <p className='icon-name mt-0'>Book</p>
    </div>

    <div className='fea-contain'>
        <img className='fea-icon' src={Flighr} alt="" />
        <p className='icon-name mt-0'>Ticket</p>
    </div>

    <div className='fea-contain'>
        <img className='fea-icon' src={Hotel} alt="" />
        <p className='icon-name mt-0'>Hotel</p>
    </div>

    <div className='fea-contain'>
        <img className='fea-icon' src={taxi} alt="" />
        <p className='icon-name mt-0'>Taxi</p>
    </div>

    </div>
    </div>
    </>
  )
}

export default Feature