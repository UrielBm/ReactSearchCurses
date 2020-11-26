import "./App.scss";
import { useState } from "react";
import Search from "./components/Search";
import Courses from "./components/Courses/Index";
function App() {
  const courses = [
    {
      name: "HTML Y CSS",
      colorb: "2FA4AB",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png",
      desc:
        "Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria",
    },
    {
      name: "Javascript",
      colorb: "DE9103",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png",
      desc:
        "Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web",
    },
    {
      name: "Terminal",
      colorb: "712c7d",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/terminal.png",
      desc:
        "La terminal es una herramienta esencial para programar, en este curso aprendé sus conceptos básicos",
    },
    {
      name: "Git y Github",
      colorb: "0f1d44",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/git.png",
      desc:
        "La herramienta principal para compartir código, en este curso te enseñamos todo lo que tenés que saber sobre crear y compartir repositorios",
    },
  ];
  const [nameSearch, setNameSearch] = useState(courses);
  function handleChange(value) {
    if (value == "") {
      setNameSearch(courses);
    }
    const newArray = courses.filter((curse) => {
      return curse.name.toLowerCase().includes(value.toLowerCase());
    });
    setNameSearch(newArray);
  }
  return (
    <div className="wrapperCurses">
      <h1 className="title">Search Courses</h1>
      <div className="wrapperInput">
        <Search handleCallback={handleChange} />
      </div>
      <Courses courses={nameSearch} />
    </div>
  );
}

export default App;
