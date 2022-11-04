import React, { useContext } from 'react'
import { ItemContext, PlayerContext } from '../ContextPage'

const ContextC = () => {
  const player = useContext(PlayerContext)
  const item = useContext(ItemContext)

  return (
    <div>
      <h3>プレイヤー名: {player.name}</h3>
      <p>年齢: {player.age}</p>
      <p>レベル: {player.level}</p>

      <h4>装備品</h4>
      <p>武器: {item.weapon}</p>
      <p>鎧: {item.armor}</p>
    </div>
  )
}

export default ContextC