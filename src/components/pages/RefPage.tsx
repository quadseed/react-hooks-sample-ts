import React, { useRef } from 'react'

const RefPage = () => {
  const number = useRef(0)
  const inputEl = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1>This is RefPage</h1>
      <p>Number is {number.current}</p>
      <input ref={inputEl} type="text" defaultValue="おにぎり" />
      <button onClick={() => {alert(inputEl.current?.value)}}>アラート</button>
    </div>
  )
}

export default RefPage