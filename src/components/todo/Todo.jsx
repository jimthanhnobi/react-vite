
const Todo = (props) => {

    const { addNewTodo } = props;
    addNewTodo("Thanh");

    return (
        <>
            <div className="todo-new">
                <div>
                    <input type="text" />
                    <button>Add</button>
                </div>
            </div>
        </>
    )
}

export default Todo