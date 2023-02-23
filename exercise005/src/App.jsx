import React from 'react';
import Box from './components/Box';
import Data from './data.json';

function App() {
  return (
    <div className='bg-zinc-500 h-screen'>
      <h1 className="text-yellow-200 text-center text-3xl font-bold py-2">โหวตอาหาร</h1>
      <div className='flex flex-col items-center'>
        {
          Data.map(data => {
            return (
              <Box
                topic={data.topic}
                name={data.name}
                content={data.content}
                img={data.img}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
