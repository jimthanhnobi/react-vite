import Todo from './components/todo/Todo'
import TodoData from './components/todo/TodoData'
import viteLogo from '/vite.svg'
import './components/todo/todo.css'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learn Math" },
    // { id: 2, name: "Watch video" }
  ]);

  const name = "Thanh";
  const data = {
    country: "Vietnam",
    address: "Ha Noi"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomInterval(1, 10000000),
      name: name
    }

    setTodoList([...todoList, newTodo]);
  }

  const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  }

  return (
    <>
      <div className="todo-container">
        <div className='todo-title'>Todo List</div>
        <Todo
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 &&
          <TodoData
            name={name}
            data={data}
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
        }
        {todoList.length === 0 &&
          <img src={viteLogo} className="logo" alt="Vite logo" />
        }
      </div>
    </>
  )
}

export default App
