import "./Header.scss";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <a href="#">Logo</a>  
      <div className="right-col">
        <Nav />
      <a className="resume-button desktop-only" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Btn</a>
      </div>
    </header>
  );
}