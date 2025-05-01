export default function Button({ children, className = "" }) {
  return <div className={`btn custom-btn ${className}`}>{children}</div>;
}
