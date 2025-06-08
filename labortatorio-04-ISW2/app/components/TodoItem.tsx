export interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  dataTestId?: string;
}

export default function TodoItem({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  dataTestId,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="w-4 h-4 mr-2 cursor-pointer"
          data-testid="todo-checkbox"
        />
        <span
          className={`${completed ? "line-through text-gray-400" : ""}`}
          data-testid={`${dataTestId}`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="px-2 py-1 text-sm text-red-500 hover:text-red-700"
        data-testid="todo-delete-button"
      >
        Eliminar
      </button>
    </div>
  );
}
