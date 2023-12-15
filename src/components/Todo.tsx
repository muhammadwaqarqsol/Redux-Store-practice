import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../app/store/features/todo/todoSlice";
import { RootState } from "../app/store/store";

interface TodoItem {
  id: string;
  text: string;
}

const Todo: React.FC = () => {
  const [updatedText, setUpdatedText] = useState<string>("");
  const [editItemId, setEditItemId] = useState<string | null>(null);

  const todos: TodoItem[] = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id: string, text: string) => {
    setEditItemId(id);
    setUpdatedText(text);
  };

  const handleUpdateTodo = (id: string, newText: string) => {
    dispatch(updateTodo({ id, text: newText }));
    setEditItemId(null);
    setUpdatedText("");
  };

  return (
    <div className="p-3">
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo: TodoItem) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editItemId === todo.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className="mr-2 px-2 py-1 rounded border border-gray-300"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            <div className="">
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="mr-4 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
              {editItemId === todo.id ? (
                <button
                  onClick={() => handleUpdateTodo(todo.id, updatedText)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  Edit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
