import "../../App.scss";
function Search({ handleCallback }) {
  function handleChange(e) {
    const { value } = e.target;
    handleCallback(value);
  }
  return (
    <>
      <label>
        <span className="subtitle">Curso</span>
        <input
          className="inputStyle"
          placeholder="buscar algun curso..."
          onChange={handleChange}
        />
      </label>
    </>
  );
}
export default Search;
