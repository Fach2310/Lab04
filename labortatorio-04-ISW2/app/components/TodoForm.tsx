import { useState, FormEvent } from "react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8" data-testid="todo-form">
      <div className="flex gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow p-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base font-medium"
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "var(--card-background)",
            color: "var(--foreground)",
          }}
          placeholder="Añadir nueva tarea..."
          data-testid="todo-input"
        />
        <button
          type="submit"
          className="px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: "var(--accent-color)",
            color: "white",
          }}
          disabled={!text.trim()}
          data-testid="todo-submit"
          onMouseEnter={(e) => {
            if (!e.currentTarget.disabled) {
              e.currentTarget.style.backgroundColor = "#2563eb";
            }
          }}
          onMouseLeave={(e) => {
            if (!e.currentTarget.disabled) {
              e.currentTarget.style.backgroundColor = "var(--accent-color)";
            }
          }}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}
