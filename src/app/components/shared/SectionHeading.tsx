
interface SectionHeadingProps {
  subheading: string;
  heading: string;
  paragraph: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subheading, heading, paragraph }) => {
  return (
    <div className="flex justify-center text-center mb-8">
      <div className="max-w-xl space-y-3">
        <button className="text-[#749B3F] bg-[#749B3F]/10 font-medium py-1 px-2 rounded">{subheading}</button>
        <h2 className="font-rubik font-medium text-3xl md:text-4xl lg:text-5xl ">{heading}</h2>
        <p className="font-Questrial text-base ">{paragraph}</p>
      </div>
    </div>
  );
};

export default SectionHeading;