
import DefaultInput from '../DefaultInput'
import Cycles from '../Cycles'
import DefaultButton from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { useRef } from 'react'
import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

const MainForm = () => {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');

      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      staartDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: 1,
      type: 'workTime',
    }

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, // validar depois
        secondsRemaining,
        formattedSecondRemaining: '00:00', // colocar a função de tempo dps 
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  return (
    <form className="form" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput
          labelText="Qualquer coisa"
          id="menuInput"
          type="text"
          placeholder="Digite algo"
          ref={taskNameInput}
        />
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
}

export default MainForm
