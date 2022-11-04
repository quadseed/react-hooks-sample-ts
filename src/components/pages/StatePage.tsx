import React from 'react'
import { useState } from 'react'

const StatePage = () => {

  const [count, setCount] = useState<number>(0)

  const [name, setName] = useState<string>("たこ焼き")

  return (
    <div>
      <h1>This is StatePage</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => {setCount(count+1)}}>1増える</button>

      <h2>私は{name}です</h2>
      <input
      value={name}
      onChange={(e) => {setName(e.target.value)}} />
    </div>
  )
}

export default StatePage