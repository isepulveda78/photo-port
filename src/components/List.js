const List = (props) => {
    return (
        <ul>
            {
                 props.groceries.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    )
}

export default List