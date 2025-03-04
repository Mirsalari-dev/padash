import { IntroSectionData } from "@/constant/IntroSection.data";
import Image from "next/image";
import ArrowLeft from "../../../../public/arrowLeft";

const IntroSection = ({
  reverseOrder,
  tagText,
  description,
  title,
  imageUrl,
  bulletPoints,
  id,
  link,
}: IntroSectionData) => {
  return (
    <div
      id={id}
      className={`container mx-auto my-4 relative transition-all duration-1000 group  border px-4 py-4 md:py-[60px] overflow-hidden bg-no-repeat bg-origin-border bg-[#FAFBFF] min-h-[650px]
        ${
          reverseOrder
            ? "intro-section-image-left md:bg-[url('/images/intro-section-image-bg-left.png')]"
            : "intro-section-image-right md:bg-[url('/images/intro-section-image-bg-right.png')]"
        }
      `}
    >
      <div className="grid grid-cols-5 items-center h-full">
        {/* ستون برای تصویر */}
        <div
          className={`md:col-span-3 col-span-5 flex items-center justify-center ${
            reverseOrder ? "md:order-last" : ""
          }`}
        >
          {/* در حالت موبایل پس‌زمینه مخصوص خودش را دارد */}
          <div className="bg-no-repeat bg-cover bg-[url('/images/intro-section-image-bg-mobile.png')] md:bg-none overflow-hidden">
            <Image
              src={imageUrl}
              alt="section"
              width={400}
              height={400}
              className="transition-transform duration-300 ease-in-out md:group-hover:scale-90"
            />
          </div>
        </div>

        {/* ستون متن و بولت‌ها */}
        <div className="md:col-span-2 col-span-5 pb-6 relative min-h-[500px]">
          <div className="hidden md:block text-sm shadow w-28 py-1 rounded-full text-center mb-6 mt-[-40px]">
            {tagText}
          </div>

          <div className="mb-6 mt-6 md:mt-0 text-2xl font-medium lg:text-4xl md:font-normal leading-tight text-nowrap">
            {title}
          </div>

          <div className="text-justify text-sm leading-6 text-[#61646B]">
            {description}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
            {bulletPoints.map((point, index) => (
              <div
                key={index}
                className={`col-span-2 md:col-span-1
   
                `}
              >
                <div>{/* <IconPencil opacity="0.5" /> */}</div>
                <div
                  onClick={() => {
                    if (point.link) {
                      window.open(point.link);
                    }
                  }}
                  className={`flex items-center text-nowrap rounded-xl justify-center text-[15px] border-2 border-dashed px-12 py-7 text-center font-medium text-primary-500 ${
                    point.link ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  {point.title}
                </div>
                {/* <div className="text-[12px] mt-1 text-gray-400">
                  {point.text}
                </div> */}
              </div>
            ))}
          </div>
          <div className="mt-12" onClick={() => window.open(link, "_blank")}>
            <div
              className={`absolute bottom-0 md:bottom-[-30px] ${
                !reverseOrder ? "left-0" : "right-0"
              } bg-primary-500 text-white  rounded-2xl pr-3 py-2 
      md:hover:bg-primary-500 md:bg-[#FAFBFF] md:border md:border-[##C1C1C1] md:text-[#C1C1C1] md:hover:text-white md:hover:border-none
      text-sm`}
            >
              <button className="flex items-center justify-center w-full h-full">
                <p>اطلاعات بیشتر</p>
                <ArrowLeft className="ml-2" color="#C1C1C1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
