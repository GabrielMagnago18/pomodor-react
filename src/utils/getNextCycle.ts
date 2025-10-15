import React from 'react'

const getNextCycle = (currentCycle: number) => {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1
}

export default getNextCycle
