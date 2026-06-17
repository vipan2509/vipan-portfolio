import "./Nav.scss";
import { profile, nav } from "../../lib/data";
import { li } from "framer-motion/client";

export default function Sidebar() {
  return (
    <nav className="nav">
      {nav.map((item) => (
        <li className="link"> 
           <a key={item} href={`#${item}`} >
               {item}
           </a></li>
      ))}
    </nav>
  );
}