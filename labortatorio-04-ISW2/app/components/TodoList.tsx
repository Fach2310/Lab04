import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500" data-testid="empty-todos">
        No hay tareas pendientes.
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded" data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          dataTestId={`todo-item-${todo.id}`}
          completed={todo.completed}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  );
}
