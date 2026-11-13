import { Link } from "react-router-dom";
import { BRAND } from "../data/site.js";

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label={`${BRAND} home`}>
      <span className="logo__text">
        {BRAND.replace("Site", "").toUpperCase()}
        <span className="logo__accent">Site</span>
      </span>
      <span className="logo__dot" />
    </Link>
  );
}
