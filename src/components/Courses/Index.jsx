import "../../App.scss";
import Course from "../Course/Index";
function Courses({ courses }) {
  return (
    <div className="wrapperCards">
      {courses.map((course, key) => {
        return <Course course={course} key={key} />;
      })}
      {/* <div className="Card">
      <section className="wrapperImg">
        <img className="imgCurse" src="" alt="imagenCurso" />
      </section>
      <section className="wrapperInfoCard">
        <h2 className="titleCard">HTML Y CSS</h2>
        <p className="descriptionCard"></p>
      </section>
    </div> */}
    </div>
  );
}
export default Courses;
