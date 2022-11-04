import React, { createContext, useState } from 'react'
import ContextA from './context/ContextA'

type Player = {
  name: string,
  age: number,
  level: number
}

type Item = {
  weapon: string,
  armor: string
}

const initialPlayerContext: Player = {
  name: "村人A",
  age: 18,
  level: 1
}

const initialItemContext: Item = {
  weapon: "鉄の剣",
  armor: "革の防具"
}

export const PlayerContext = createContext<Player>(initialPlayerContext)
export const ItemContext = createContext<Item>(initialItemContext)

const ContextPage = () => {

  const [player, setPlayer] = useState<Player>({
    name: "石田",
    age: 55,
    level: 10
  })

  const [item, setItem] = useState<Item>({
    weapon: "量子駆動型マンホール",
    armor: "鉄の鎧"
  })

  return (
    <div>
      <h1>This is ContextPage</h1>
      <PlayerContext.Provider value={player}>
        <ItemContext.Provider value={item}>
          <ContextA />
        </ItemContext.Provider>
      </PlayerContext.Provider>
    </div>
  )
}

export default ContextPage