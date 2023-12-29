import { useCallback, useEffect, useState, useRef } from 'react'

export default function App() {
  const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charsAllowed, setCharsAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 25);
        window.navigator.clipboard.writeText(password);
    }, [password])

    const passwordGenerator = useCallback(() => {
            let pass = "";
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if(numberAllowed) str += "1234567890";
            if(charsAllowed) str += "!@#$%&*^()_-+=}{[]~`";

            for(let i = 0; i< length; i++){
                let c = Math.floor(Math.random() * str.length);
                pass += str.charAt(c);
            }
            setPassword(pass);

        }, [length, numberAllowed, charsAllowed, setPassword]) // we pass setPassword for optimization for memoization 

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charsAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-neutral-300 bg-slate-800' >
        <h1 className='text-white text-center mb-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
            <input type="text" value={password}
                className="outline-none text-blue-600 w-full py-1 px-3" placeholder='password...' ref={passwordRef} readOnly />
            <button className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0 hover:bg-blue-700 active:bg-blue-800' 
                    onClick={() => {copyPasswordToClipboard()}} >COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <label htmlFor="lengthInput">Length: {length}</label>
                <input type="range" id='lengthInput' min={6} max={25}
                        value={length} className='cursor-pointer' 
                        onChange={(e) => setLength(e.target.value)} />
            </div>
            <div className='flex items-center gap-x-1'>
                <label htmlFor="numberInput">Numbers</label>
                <input type="checkbox" id='numberInput' defaultChecked={numberAllowed} 
                    onChange={() => { setNumberAllowed(prev => !prev)}} />
            </div>
            <div className='flex items-center gap-x-1'>
                <label htmlFor="charsInput">Symbols</label>
                <input type="checkbox" id='charsInput' defaultChecked={charsAllowed} 
                    onChange={() => { setCharsAllowed(prev => !prev)}} />
            </div>
        </div>
      </div>
    </>
  )
}






