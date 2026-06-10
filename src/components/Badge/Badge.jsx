import "./Badge.css";

export const Badge = ({
  children,
  status,
  isPill = false,
  ...props
}) => {
  const className = [
    "badge",
    status ? `badge-${status}` : "",
    isPill ? "badge-pill" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};