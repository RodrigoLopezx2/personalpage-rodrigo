import React from 'react'
import ItemEducation from './itemEducation';
import { VscMortarBoard } from "react-icons/vsc";
function Experience() {
    return (
        <section className='flex flex-col items-center m-2'>
            <h3 className='text-2xl m-2'>Educacion</h3>
            <ItemEducation icon={<VscMortarBoard className='bg-Azul_3 rounded-full w-12 h-12' />}
                tittle={"Licenciatura en Ingenieria en sistemas computacionales"}
                description={"Ciudad de mexico"}
                year={"Agosto 2019 - Diciembre 2024"} />
            <ItemEducation icon={<VscMortarBoard className='bg-Azul_3 rounded-full w-12 h-12' />}
                tittle={"Licenciatura en Ingenieria en sistemas computacionales"}
                description={"Ciudad de mexico"}
                year={"Agosto 2019 - Diciembre 2024"} />

        </section>
    )
}

export default Experience