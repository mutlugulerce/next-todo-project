import Todo from "./todo";

const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0, width:"400px" ,height:"25px" }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "0px", margin: "20px 0" , textAlign:"start", textTransform: "capitalize" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
