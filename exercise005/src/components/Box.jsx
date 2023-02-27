import React, { useState } from 'react';
import Btn from './Button';

const Box = ({ topic, name, content, img }) => {
    let [count, setCount] = useState(0);
    const Vote = () => {
        if (count > 9) {
            alert("Cannot Vote more");
        }
        else {
            onclick = setCount(count + 1);
        }
    };
    const Unvote = () => {
        if (count < 1) {
            alert("Cannot Unvote");
        }
        else {
            onclick = setCount(count - 1);
        }
    };

    return (
        <div className='bg-[#FDEBD7] w-2/4 h-80 rounded-xl border-2 border-black flex flex-col justify-around'>
            <div className='flex justify-center gap-x-16 items-center'>
                <div className='basis-1/2'>
                    <h2 className='text-2xl font-bold'>{topic}</h2>
                    <h3 className='text-lg font-bold my-3'>{name}</h3>
                    <p>{content}</p>
                </div>
                <div className='basis-1/4'>
                    <img className='w-48 h-auto' src={img} alt="" />
                </div>
            </div>
            <div className='inline-flex items-center justify-center gap-x-6'>
                <Btn name={"Click to Vote"} onClick={Vote} />
                <h1 className='bg-[#76E300] text-[#8B72C5] text-xl font-bold border-[3px] border-[#8B72C5] rounded-lg p-2'>
                    {count === 0 ? "MIN" : count === 10 ? "MAX" : count}
                </h1>
                <Btn name={"Click to Unvote"} onClick={Unvote} />
            </div>
        </div>
    )
}

export default Box;
