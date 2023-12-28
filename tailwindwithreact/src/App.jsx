import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
    const [color, setColor] = useState('olive')

    return (
        <>
            <h1 className='text-4xl font-bold underline bg-grey-400 p-4 rounded-xl'>Tailwind CSS</h1>
            <Card name="Mohit" 
                image="https://avatars.githubusercontent.com/u/152606488?v=4" 
                description="I am a good designer (i stole this card from devui.io ;) )" 
                buttonText="Github" 
                buttonLink='https://github.com/mohits-git'
            />
        </>
  )
}

export default App
