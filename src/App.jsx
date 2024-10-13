import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {
  const [xmove, setxmove] = useState(0)
  const boxRef = useRef(null)
  const random = gsap.utils.random(-500, 500, 100)
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xmove,
      duration: 1,
      delay: 0,
    })
  }, [xmove])
  return (
    <main>
      <button onClick={() => {
        setxmove(random)
      }}>Animation</button>
      <div ref={boxRef} className="box">{random}</div>
    </main>
  )
}

export default App