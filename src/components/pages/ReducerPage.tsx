import React, { useReducer } from 'react'

type Action = 'increment' | 'decrement' | 'reset' | 'random'

const reducer = (countState: number, action: Action) => {
  switch (action) {
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return 0
    case 'random':
      return Math.floor(Math.random() * (100 - 1)) + 1
    default:
      return countState
  }
}

const ReducerPage = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h1>This is ReducerPage</h1>
      <h3>Count is {count}</h3>

      <button onClick={() => {dispatch('increment')}}>インクリメント</button>
      <button onClick={() => {dispatch('decrement')}}>デクリメント</button>
      <button onClick={() => {dispatch('reset')}}>リセット</button>
      <button onClick={() => {dispatch('random')}}>ランダム</button>
    </div>
  )
}

export default ReducerPage