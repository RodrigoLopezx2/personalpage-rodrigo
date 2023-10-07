import React from 'react'
import ItemHobbies from './ItemHobbies'
import {hobbiesInfo} from '../assets/data/info'
function Hobbies() {
    const hobbies = hobbiesInfo;
    return (
        <section className='flex flex-col items-center justify-start m-2'>
            <h3 className='text-2xl m-2'>Pasatiempo</h3>
            <div className='grid  grid-cols-1 md:grid-cols-3'>
                <ItemHobbies/>
            </div>
        </section>
    )
}

export default Hobbies