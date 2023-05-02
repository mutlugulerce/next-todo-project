"use client";

import { useRouter } from "next/navigation";

async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();

  return (
    <div style={{fontSize: "24px"}} >
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
     
      />
      <span>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id, router.refresh)}
      style={{fontSize: "16px", padding: "5px ", margin: "5px 15px", border: "none", borderRadius:"16px", background:"red" ,color:"white", cursor: "pointer"}}
      >
        Delete
      </button>
    </div>
  );
}
