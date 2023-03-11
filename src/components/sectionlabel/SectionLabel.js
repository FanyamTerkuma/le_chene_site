function SectionLabel(props) {
  return (
    <div
      className={`flex flex-col ${
        props.uncenter ? "" : "items-center"
      } md:mb-6`}
    >
      <h1 className="text-black font-semibold text-xl md:text-2xl">
        {props.title}
      </h1>
      <p className=" font-normal text-base md:text-lg">{props.description}</p>
    </div>
  );
}

export default SectionLabel;
