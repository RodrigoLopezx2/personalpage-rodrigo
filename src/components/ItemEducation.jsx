import React from 'react'

function ItemEducation({ icon, year, tittle, description }) {
  return (
    <section className='m-3'>
            <div className='absolute'>{icon}</div>
            <div className='ml-14'>
                <span className='bg-Azul_4 rounded-full p-2 text-xs'>{year}</span>
                <h3 className='pl-2 pt-2 text-base'>{tittle}</h3>
                <p className='pl-2 text-base'>{description}</p>
            </div>
        </section>
  )
}

export default ItemEducation