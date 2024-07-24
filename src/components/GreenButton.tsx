interface Props {
  text: string;
}

function GreenButton({ text }: Props) {
  return (
    <button type="button" className="translate">
      <img className="arrow l" src="src/assets/arrow.svg" alt="arrow" />
      <img className="arrow r" src="src/assets/arrow.svg" alt="arrow" />
      <span></span>
      <p>{text}</p>
    </button>
  );
}

export default GreenButton;
