import Todo from './components/todo/Todo'
import TodoData from './components/todo/TodoData'
import viteLogo from '/vite.svg'
import './components/todo/todo.css'

const App = () => {
  const name = "Thanh";
  const data = {
    country: "Vietnam",
    address: "Ha Noi"
  }

  const addNewTodo = (name) => {
    alert(`hello ${name}`)
  }
  return (
    <>
      <div className="todo-container">
        <div className='todo-title'>Todo List</div>
        <Todo
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={name}
          data={data}
        />
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
    </>
  )
}

export default App
