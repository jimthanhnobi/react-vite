
const TodoData = (props) => {

    const { name, data } = props
    return (
        <>
            <div className="todo-data">
                <div>
                    <div>My name is : {name}</div>
                    <div>Address : {data.address}</div>
                    <div>Thanh</div>
                    <div>Overflow</div>
                </div>
            </div>
        </>
    )
}

export default TodoData