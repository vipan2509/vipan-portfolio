import "./Nav.scss";
import { profile, nav } from "../../lib/data";

export default function Sidebar() {
  return (
    <nav className="nav">
      {nav.map((item) => (
        <a key={item} href={`#${item}`} className="link">
          {item}
        </a>
      ))}
    </nav>
  );
}