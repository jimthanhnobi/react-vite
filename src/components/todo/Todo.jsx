import { useState } from "react";

const Todo = (props) => {

    const [valueInput, setValueInput] = useState("done")

    const { addNewTodo } = props;
    const onHandleChange = (name) => {
        setValueInput(name);
    }

    const onHandleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    return (
        <>
            <div className="todo-new">
                <div>
                    <input type="text"
                        onChange={(event) => onHandleChange(event.target.value)}
                        value={valueInput}
                    />
                    <button
                        onClick={onHandleClick}>Add</button>
                </div>
                <div>
                    My input is: {valueInput}
                </div>
            </div>
        </>
    )
}

export default Todo