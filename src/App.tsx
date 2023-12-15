import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-neutral-600 flex justify-center items-center text-3xl font-bold">
        Learning Redux
      </h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
