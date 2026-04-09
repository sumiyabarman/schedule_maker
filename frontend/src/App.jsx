import { useEffect, useState } from "react";
import TodoForm from "./component/Todoform";
import TodoList from "./component/Todolist";


function App() {
  
const [selectedDate, setSelectedDate] = useState(() => {
    return localStorage.getItem("selectedDate") || "";
  });

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate);
  }, [selectedDate]);
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>

        {/* 📅 Calendar */}
        <div className="mb-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-black px-3 py-2 rounded"
          />
        </div>

        {/* ➕ Form */}
        <div className="mb-4">
          <TodoForm selectedDate={selectedDate} />
        </div>

        {/* 📋 Todos */}
        <div className="flex flex-wrap gap-y-3">
          <TodoList selectedDate={selectedDate} />
        </div>

      </div>
    </div>
  );
}

export default App;