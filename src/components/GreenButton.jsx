function GreenButton(props) {
  const element = (
    <a href={props.page}>
      <button
        type="button"
        className="translate"
        //onClick={(document.location = props.page)}
      >
        <img className="arrow l" src="src/assets/arrow.svg" alt="arrow" />
        <img className="arrow r" src="src/assets/arrow.svg" alt="arrow" />
        <span></span>
        <p> {props.text}</p>
      </button>
    </a>
  );
  return element;
}

export default GreenButton;
