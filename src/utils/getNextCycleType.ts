import React from 'react'
import type { TaskModel } from '../models/TaskModel'

const getNextCycleType = (currentCycle: number): TaskModel["type"] => {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';

  return 'workTime'
}

export default getNextCycleType
