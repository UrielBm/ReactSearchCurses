import "../../App.scss";

function Course({ course }) {
  const { name, colorb, img, desc } = course;
  return (
    <>
      <div className="Card">
        <section
          style={{
            backgroundColor: `#${colorb}`,
            width: `100%`,
            borderTopLeftRadius: `3rem`,
            borderTopRightRadius: `3rem`,
            height: `180px`,
            overflow: `hidden`,
          }}
        >
          <img className="img" src={img} alt="img-curso" />
        </section>
        <section className="wrapperInfoCard">
          <h2 className="titleCard">{name}</h2>
          <p className="descriptionCard">{desc}</p>
        </section>
      </div>
    </>
  );
}
export default Course;
