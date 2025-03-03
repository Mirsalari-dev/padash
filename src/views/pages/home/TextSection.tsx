import { JSX } from "react";

const TextSection = ({
  header,
  description,
}: {
  header: JSX.Element;
  description: string;
}) => {
  return (
    <div className="py-12 container mx-auto text-section text-center bg-center px-3 md:px-0">
      <div className="text-2xl md:text-3xl">{header}</div>
      <div className="mt-4 max-w-2xl mx-auto text-[#94989E]">{description}</div>
    </div>
  );
};

export default TextSection;
