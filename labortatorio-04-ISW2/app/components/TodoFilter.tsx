export type FilterType = "all" | "active" | "completed";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function TodoFilter({
  currentFilter,
  onFilterChange,
}: TodoFilterProps) {
  const getButtonStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "var(--accent-color)" : "transparent",
    color: isActive ? "white" : "var(--foreground)",
    borderColor: "var(--border-color)",
  });

  return (
    <div className="flex justify-center gap-3 my-6">
      <button
        onClick={() => onFilterChange("all")}
        className="px-4 py-2 rounded-lg font-medium border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={getButtonStyle(currentFilter === "all")}
        onMouseEnter={(e) => {
          if (currentFilter !== "all") {
            e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentFilter !== "all") {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
        data-testid="filter-all"
      >
        Todas
      </button>
      <button
        onClick={() => onFilterChange("active")}
        className="px-4 py-2 rounded-lg font-medium border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={getButtonStyle(currentFilter === "active")}
        onMouseEnter={(e) => {
          if (currentFilter !== "active") {
            e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentFilter !== "active") {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
        data-testid="filter-active"
      >
        Activas
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        className="px-4 py-2 rounded-lg font-medium border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={getButtonStyle(currentFilter === "completed")}
        onMouseEnter={(e) => {
          if (currentFilter !== "completed") {
            e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentFilter !== "completed") {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
        data-testid="filter-completed"
      >
        Completadas
      </button>
    </div>
  );
}
