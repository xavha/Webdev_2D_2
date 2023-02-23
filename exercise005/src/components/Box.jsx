import React from 'react';

function Box({ topic, name, content, img }) {
    return (
        <div className='bg-yellow-100 rounded-md w-2/4 h-80 rounded-xl border-2 border-black flex justify-center gap-x-16 items-center'>
            <div className='basis-1/2'>
                <h2 className='text-2xl font-bold'>{topic}</h2>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p>{content}</p>
            </div>
            <div className='basis-1/4'>
                <img className='w-48 h-auto' src={img} alt="" />
            </div>
        </div>
    )
}

export default Box;
