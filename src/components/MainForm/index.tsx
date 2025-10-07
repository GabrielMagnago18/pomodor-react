
import DefaultInput from '../DefaultInput'
import Cycles from '../Cycles'
import DefaultButton from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'

const MainForm = () => {

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput
          labelText="Qualquer coisa"
          id="menuInput"
          type="text"
          placeholder="Digite algo"
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
