import React from 'react'
import imgMe from '../assets/img/yo2.jpg'
import { BiDownload } from 'react-icons/bi'
import { BsFillKeyFill } from 'react-icons/bs'
import CV from '../downloads/RodrigoLopezLopez-Resume.pdf'
function Home() {
    return (
        <section className='flex flex-col justify-center items-center md:flex-row   bg-Azul_1 text-Blanco md:text-xl'>
            <div className="flex-initial basis-1/3 m-2 rounded-full overflow-hidden">
                <img src={imgMe} alt="Descripción de la imagen" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col basis-2/3 p-2 items-center justify-center'>
                <h2 className='text-2xl text-center m-4 '>Soy Rodrigo Lopez Lopez</h2>
                <p className=' text-center'>Hola soy Rodrigo Lopez , un casi ingeniero en sistemas computacionales. Soy un apasionado de crear nuevos proyectos y plasmar mis ideas.</p>
                <div className='flex flex-col items-center m-3 text-center'>
                    <h4 className='m-2'>Informacion de contacto</h4>
                    <p>Telefono :  <span  >5534151028</span></p>
                    <p>Correo : <span > rodrigolopez2014@gmail.com</span></p>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <a href={CV} download className='flex items-center border-Azul_3 border-2 rounded-full text-xs m-2'>
                        <span className='p-2 md:text-xl'>Descarga mi CV</span>
                        <span><BiDownload className='bg-Azul_2 rounded-full w-9 h-9 p-2' /></span>
                    </a>
                    <a href={CV} download className='flex items-center border-Azul_3 border-2 rounded-full text-xs m-2'>
                        <span className='p-2 md:text-xl'>Mi llave publica</span>
                        <span><BsFillKeyFill className='bg-Azul_2 rounded-full w-9 h-9 p-2' /></span>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Home