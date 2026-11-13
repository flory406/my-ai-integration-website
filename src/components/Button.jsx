import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

/**
 * variant: "primary" | "ghost" | "soft"
 * to: internal route | href: external | onClick
 * arrow: show trailing arrow
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  arrow = false,
  className = "",
  full = false,
}) {
  const cls = `btn btn--${variant} ${full ? "btn--full" : ""} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrow" size={18} className="btn__arrow" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
