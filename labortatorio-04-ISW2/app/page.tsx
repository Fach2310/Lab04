import TodoApp from "./components/Todo";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto py-10 px-4">
        <TodoApp />
      </div>
    </div>
  );
}
