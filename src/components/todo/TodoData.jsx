
const TodoData = (props) => {

    const { name, data, todoList, deleteTodo } = props

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className="todo-data">
            <div>
                {todoList.map((item, key) => {
                    return (
                        <div className="todo-item" key={item.id}>
                            <div>{item.name}</div>
                            <button
                                onClick={() => handleClick(item.id)}
                            >Delete</button>
                        </div>
                    )
                })}
            </div>
            {/* <div>{JSON.stringify(todoList)}</div> */}
        </div>
    )
}

export default TodoData