import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} mx-auto max-w-[50rem] mb-12 md:text-center lg:mb-20`}>
      {tag && <TagLine className="md:justify-center mb-4">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="mt-4 body-2 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
