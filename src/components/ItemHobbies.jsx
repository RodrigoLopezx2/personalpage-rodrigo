import React from 'react'
import imgApex from '../assets/img/apex.jpg'
import { hobbiesInfo } from '../assets/data/info'
function ItemHobbies() {
    return (
        hobbiesInfo.map((hobby) => (
            <div key={hobby.title} className='flex flex-col items-center justify-start m-3 p-2  '>
                <div className='flex-row justify-center items-center'>
                    {hobby.images.map((img) => (
                        <div key={img.tittleImage} className='w-auto rounded-full m-2'>
                            <img src={img.image} alt={img.tittleImage} className='w-full h-full object-cover rounded-xl' />
                        </div>
                    ))}
                </div>
                <div className='bg-Azul_1 rounded-3xl p-3'>
                    <h3 className='text-center rounded-xl bg-Azul_4'>{hobby.title}</h3>
                    <p className='text-center m-2 text-Blanco text-sm'>{hobby.description}</p>
                </div>
            </div>
        ))


    )
}

export default ItemHobbies