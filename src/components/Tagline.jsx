import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`flex items-center tagline ${className || ""}`}>
      {brackets("left")}
      <div className="text-n-3 mx-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
