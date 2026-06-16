import "./Header.scss";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <a href="#">Logo</a>  
      <Nav />
    </header>
  );
}