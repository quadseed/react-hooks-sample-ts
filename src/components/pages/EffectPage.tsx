import React, { useState, useEffect } from 'react'

const EffectPage = () => {

  const [name, setName] = useState("石田")
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `私は${name}です`
    console.log("aaaaaa")
  }, [name])

  return (
    <div>
      <h1>This is EffectPage</h1>

      <h2>私は{name}です</h2>
      <input
      value={name}
      onChange={(e) => {setName(e.target.value)}}
      />

      <h2>Count is {count}</h2>
      <button onClick={() => {setCount(count+1)}}>1増える</button>
    </div>
  )
}

export default EffectPage