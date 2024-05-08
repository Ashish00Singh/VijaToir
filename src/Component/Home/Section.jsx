import React from 'react'
import back from '../Img/img1.jpg'

function Section() {
    return (
        <>
            <section>
                <div className='homeIng'>
                    <img className='homeImg' src={back} alt="" />
                    <div className='form-sec'>
                        <h1 className='pb-2'>Select the Contry the</h1>
                        <div className="input-group">
                            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <button className="btn btn-serch btn-primary text-black rounded-end" type="button">Button</button>

                            <p className='mt-3 text-Home'>Discover transformative travel experiences while pursuing academic studies abroad, unlocking new cultures, languages, and personal growth opportunities worldwide.</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section