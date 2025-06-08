import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList, { Todo } from "../TodoList";

describe("TodoList Component", () => {
  // Happy path tests
  it("renderiza un mensaje cuando no hay tareas", () => {
    // Prepare: Configuración con lista vacía
    const todos: Todo[] = [];
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();

    // Execute: Renderizar el componente
    render(
      <TodoList
        todos={todos}
        onToggleTodo={mockToggle}
        onDeleteTodo={mockDelete}
      />
    );

    expect(screen.getByTestId("empty-todos")).toBeInTheDocument();
    expect(screen.getByTestId("empty-todos")).toHaveTextContent(
      "No hay tareas pendientes"
    );
  });

  it("renderiza correctamente una lista de tareas", () => {
    // Prepare: Configuración con lista de tareas
    const todos: Todo[] = [
      { id: 1, text: "Tarea 1", completed: false },
      { id: 2, text: "Tarea 2", completed: true },
      { id: 3, text: "Tarea 3", completed: false },
    ];
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();

    render(
      <TodoList
        todos={todos}
        onToggleTodo={mockToggle}
        onDeleteTodo={mockDelete}
      />
    );
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-2")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-3")).toBeInTheDocument();
  });
  it("pasa correctamente las funciones onToggle y onDelete a cada TodoItem", () => {
    // Prepare: Configuración con lista de tareas y mocks
    const todos: Todo[] = [
      { id: 1, text: "Tarea 1", completed: false },
      { id: 2, text: "Tarea 2", completed: true },
    ];
    const mockToggle = jest.fn();
    const mockDelete = jest.fn();
    
    render(
      <TodoList
        todos={todos}
        onToggleTodo={mockToggle}
        onDeleteTodo={mockDelete}
      />
    );

    const todoItems = screen.getAllByTestId(/^todo-item-\d+$/);
    todoItems.forEach((item, index) => {
      const todo = todos[index];
      expect(item).toHaveTextContent(todo.text);
    });

    const checkboxes = screen.getAllByTestId("todo-checkbox");
    const deleteButtons = screen.getAllByTestId("todo-delete-button");

    fireEvent.click(checkboxes[0]);
    expect(mockToggle).toHaveBeenCalledWith(1);

    fireEvent.click(deleteButtons[1]);
    expect(mockDelete).toHaveBeenCalledWith(2);
  });
});
