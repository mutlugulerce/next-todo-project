"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        style={{width: "300px" , height: "35px" , border: "none" , borderRadius: "full", margin: "0 5px 0 0"}}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
        style={{width: "50px" , height: "35px" , border: "none" , background: "green", color: "white", borderRadius: "16px", padding:"5px"}}
      >
        Add
      </button>
    </div>
  );
}
