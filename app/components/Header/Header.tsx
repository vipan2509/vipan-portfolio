import "./Header.scss";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <a href="#">VK</a>  
      <div className="right-col">
        <Nav />
      <a className="resume-button desktop-only" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </header>
  );
}