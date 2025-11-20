import "./cell.css";

export default function Cell({ color, onClick, children }) {
  return (
    <div
      className="case"
      onClick={onClick}
      style={{ backgroundColor: color || "white" }}
    >
      {children}
    </div>
  );
}
