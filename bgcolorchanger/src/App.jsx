import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#232D3F')

  return (
    <>
      <div className='w-full h-screen duration-200 flex justify-center items-center'
        style={{ backgroundColor: color}}
      >

      <div className='fixed flex flex-wrap justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{backgroundColor: '#DF826C'}}
                    onClick={(() => setColor('#DF826C'))}
            >#DF826C</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{backgroundColor: '#11235A'}}
                    onClick={(() => setColor('#11235A'))}
            >#11235A</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{backgroundColor: '#739072'}}
                    onClick={(() => setColor('#739072'))}
            >#739072</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{backgroundColor: '#232D3F'}}
                    onClick={(() => setColor('#232D3F'))}
            >#232D3F</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{backgroundColor: '#4F6F52'}}
                    onClick={(() => setColor('#4F6F52'))}
            >#4F6F52</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{backgroundColor: '#F2AFEF'}}
                    onClick={(() => setColor('#F2AFEF'))}
            >#F2AFEF</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{backgroundColor: '#B4D4FF'}}
                    onClick={(() => setColor('#B4D4FF'))}
            >#B4D4FF</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
