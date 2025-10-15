/* eslint-disable @next/next/no-img-element */
import { Product } from '../types/product';

export default function ProductCard({ 
    name, image, model, treadwear, traction, temperature, pattern, loadIndex, speedRating, noise, rollingResistance, wetGrip, cars
 }: Product ) {
    
    return (
        <div key={name} className="flex flex-col sm:flex-row bg-white rounded-lg w-full sm:max-w-[830px] p-3 mb-3 shadow-md shadow-gray-300 text-black mx-auto">

            <div className="flex flex-col sm:flex-col bg-white p-3 mb-3  text-black mx-auto">
                <div className="sm:w-32 h-32 rounded-lg overflow-hidden mr-0
                 mb-2 sm:mb-0">
                    <a href={`/#`}>
                    <img
                        src={!image ? 'https://placehold.co/300' : image}
                        alt={image ? `${name} - ${model}` : ''}
                        className="w-full h-full object-cover"
                    />
                    </a>
                </div>

                <div className="flex flex-col justify-center">
                    <p className='text-sm font-bold text-black mb-1'>{model}</p>
                </div>
            </div>


            {/* Divide */}
            <div className="border-l-2 border-l-gray-800 my-5 mx-2"></div>


            <div className='flex flex-col w-full justify-center flex-1 pl-2 '>
                <h3 className='font-medium mb-3'>
                    <a href={`/#`} className='text-black font-bold hover:underline'>{name}</a>
                </h3>

                <div className='flex gap-6'>
                    <div className='flex-1'>
                        <p className='text-gray-500 text-sm'>Durabilidade</p>
                        <span className='text-sm font-bold'>{treadwear}</span>
                        <p className='text-gray-500 text-sm'>Índice de velocidade</p>
                        <span className='text-sm font-bold'>{speedRating}</span>
                    </div>
                    <div className='flex-1'>
                        <p className='text-gray-500 text-sm'>Tração</p>
                        <span className='text-sm font-bold'>{traction}</span>
                        <p className='text-gray-500 text-sm'>Capacidade de Carga</p>
                        <span className='text-sm font-bold'>{loadIndex}</span>
                    </div>
                    <div className='flex-1'>
                        <p className='text-gray-500 text-sm'>Temperatura</p>
                        <span className='text-sm font-bold'>{temperature}</span>
                        <p className='text-gray-500 text-sm'>Desenho</p>
                        <span className='text-sm font-bold'>{pattern}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}