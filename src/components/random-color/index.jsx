import { useState } from 'react'

export default function RandomColour() {
  const [colourType, setColourType] = useState('hex')
  const [colour, setColour] = useState('#000000')

  return (
    <div
      className='container'
      style={{ height: '100vh', width: '100vw', background: colour }}
    >
      <button>Create hex colour</button>
      <button>Create RGB colour</button>
      <button>Generate random colour</button>
    </div>
  )
}
