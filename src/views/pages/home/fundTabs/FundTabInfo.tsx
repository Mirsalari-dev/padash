import FundPricingStatusCard from "@/views/components/FundPricingStatusCard/FundPricingStatusCard";
import Image, { StaticImageData } from "next/image";
import { IFundList } from "../Tabs/Tabs.types";

interface FundTabInfoProps {
  fundData: IFundList;
  shortDesc: string;
  desc: string;
  link: string;
  image: StaticImageData;
}
const FundTabInfo = ({
  fundData,
  shortDesc,
  desc,
  link,
  image,
}: FundTabInfoProps) => {
  if (!fundData) {
    return null;
  }

  const { fund, fundInfo, fundtype } = fundData;

  return (
    <div className="relative mx-auto bg-[#FAFBFF] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex-1 relative group ">
          <div className="relative z-[1] flex justify-center items-center flex-col text-white">
            <Image
              src={image}
              alt={"section"}
              width={250}
              height={250}
              className="transition-transform duration-300 group-hover:scale-90 h-[300px] w-[300px] lg:w-[400px] lg:h-[400px]"
            />
            <div className="px-4 mb-[160px] md:mb-[140px] sm:px-8">
              <div className="absolute right-0 px-5 transition-transform duration-300 group-hover:translate-y-[-20px] md:group-hover:translate-y-[-30px]">
                <div className="font-bold text-lg sm:text-2xl">
                  صندوق {fund.shortTitle}
                </div>
                <div className="text-xs text-[#D2D2D2] sm:text-sm my-2 sm:my-4">
                  {fund.title}
                </div>
                <div className="text-sm text-justify text-[#D2D2D2]  leading-relaxed">
                  {shortDesc}
                </div>
                <div
                  className="flex justify-end my-2 md:my-3"
                  onClick={() => window.open(link, "_blank")}
                >
                  <div className="text-sm cursor-pointer md:text-base p-2 transition-transform duration-300 rounded-2xl border md:border-0 md:group-hover:border group-hover:px-2 group-hover:p-2">
                    <div className="text-center">اطلاعات بیشتر ←</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/images/bg-packet.png"}
            alt={"section"}
            width={500}
            height={180}
            className="mt-[-250px] w-full h-[390px] sm:h-[390px] transition-transform duration-300 origin-bottom group-hover:scale-y-[1.1]"
          />
        </div>

        <div className="flex-1 mx-4 pb-8 sm:mx-8 sm:pb-16">
          <div className="text-sm hidden md:block shadow w-20 rounded-full text-center mt-6 mb-4 sm:mt-12 sm:mb-6">
            {fundtype.title}
          </div>
          <div className="mb-4 text-xl hidden md:block sm:mb-6 sm:text-4xl font-medium">
            صندوق سرمایه گذاری {fund.shortTitle}
          </div>
          <div className="text-justify hidden md:block text-sm md:text-base text-[#61646B]">
            {desc}
          </div>
          {fundInfo ? (
            <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 sm:mt-8">
              <FundPricingStatusCard data={fundInfo[0]} type="purchaseNav" />

              <FundPricingStatusCard data={fundInfo[0]} type="saleNav" />

              <div className="hidden md:block">
                <FundPricingStatusCard data={fundInfo[0]} type="fundCapital" />
              </div>

              {fund.dsCode === 11394 && (
                <div
                  onClick={() =>
                    window.open(
                      "https://pssf.irbrokersite.ir/Customer/Login",
                      "_blank"
                    )
                  }
                  className="col-span-2 md:col-span-1 border-2 rounded-xl p-4 border-dashed text-center flex flex-col gap-1"
                >
                  <div className="flex justify-center gap-1 text-primary-500 m-auto text-[18px] cursor-pointer">
                    خرید و فروش
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FundTabInfo;
