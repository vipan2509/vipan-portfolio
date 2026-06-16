import Sidebar from "./components/Sidebar/Sidebar"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Header from "./components/Header/Header"
import OtherProjects from "./components/OtherProjects/OtherProjects";

export default function Home() {
  return (
    <main>
      <CursorGlow /> <div className="glow" />
      <Header />
      <div className=" container">
        <Sidebar />
        <div id="content">
          <About /> <Experience /> <Projects /> <OtherProjects /> <Contact />
        </div>
      </div>
    </main>
  );
}
