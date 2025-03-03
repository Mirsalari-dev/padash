interface FundPricingStatusCardProps {
  data: {
    purchaseNav: number;
    saleNav: number;
    fundCapital: number;
    statisticNav: number;
    calcDate?: string;
  };
  type?: "purchaseNav" | "saleNav" | "fundCapital" | "statisticNav";
}

const FundPricingStatusCard = ({
  data,
  type = "purchaseNav",
}: FundPricingStatusCardProps) => {
  const getCardContent = () => {
    switch (type) {
      case "purchaseNav":
        return {
          title: "قیمت صدور",
          value: data.purchaseNav.toLocaleString(),
          unit: "ریال",
        };
      case "saleNav":
        return {
          title: "قیمت ابطال",
          value: data.saleNav.toLocaleString(),
          unit: "ریال",
        };
      case "fundCapital":
        return {
          title: "تعداد کل واحدهای صندوق",
          value: data.fundCapital.toLocaleString(),
          unit: "",
        };
      case "statisticNav":
        return {
          title: "NAV آماری",
          value: data.statisticNav.toLocaleString(),
          unit: "ریال",
        };
      default:
        return {
          title: "",
          value: "",
          unit: "",
        };
    }
  };

  const content = getCardContent();

  return (
    <div className="col-span-2 md:col-span-1 border-2 rounded-xl p-4 border-dashed text-center flex flex-col gap-1">
      <div className="flex justify-center gap-1 text-[#34495E]">
        {content.title}
      </div>
      <div className="flex gap-1 justify-center items-center">
        <span className="font-medium text-xl">{content.value}</span>
        {/* نمایش واحد در صورت وجود */}
        {content.unit && (
          <span className="text-[#909AB2] text-sm">{content.unit}</span>
        )}
      </div>
    </div>
  );
};

export default FundPricingStatusCard;
