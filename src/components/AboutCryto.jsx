import React from 'react'
import imgAlanTuring from '../assets/img/Alan-Turing.png'
import imgEnigma from '../assets/img/enigma.jpeg'
function AboutCryto() {
    return (
        <section className='flex flex-col justify-center items-center m-2'>
            <h3 className='text-2xl p-2'>Sobre la criptografía</h3>
            <div className='flex flex-col  justify-center items-center md:flex-row m-2'>
                
                <div className='basis-2/3 bg-Azul_1  rounded-2xl '>
                    <h4 className='text-xl text-center m-4 text-Blanco '>Alan Turing</h4>
                    <p className=' text-center rounded-2xl m-4 p-2 bg-Azul_4'>
                        Alan Turing fue un matemático, lógico, criptógrafo y pionero de la informática británico nacido el 23 de junio de 1912 en Maida Vale, Londres, Reino Unido, y fallecido el 7 de junio de 1954 en Wilmslow, Cheshire, Reino Unido. Su vida estuvo marcada por notables contribuciones en matemáticas, lógica, ciencias de la computación y criptografía, así como por las adversidades que enfrentó debido a su orientación sexual.
                    </p>
                </div>
                <div className='rounded-full w-72 h-72 p-4'>
                    <img src={imgAlanTuring} alt="Descripción de la imagen" className=" w-full h-full  rounded-full" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row '>
                <div className='rounded-full w-72 h-72 p-4'>
                    <img src={imgEnigma} alt="Descripción de la imagen" className="w-full h-full  rounded-full" />
                </div>
                <div className='basis-2/3 bg-Azul_1  rounded-2xl'>
                    <h4 className='text-xl text-center m-4 text-Blanco '>Contribuciones a la Lógica y la Teoría de la Computación:</h4>
                    <p className=' text-center rounded-2xl m-4 p-2 bg-Azul_4'>Turing es más conocido por su trabajo en la lógica matemática y la teoría de la computación. En 1936, publicó un artículo titulado "Sobre números computables", en el que presentó el concepto de la "máquina de Turing", una abstracción matemática que se considera el fundamento de la computación moderna.</p>
                </div>

            </div>



        </section>
    )
}

export default AboutCryto