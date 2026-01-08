function Card(props) {
  return (
    <div className="border border-sky-600 rounded-[3px]">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
export default Card;
// css module
// css in js
