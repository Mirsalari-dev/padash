import { externalLinks } from "@/constant/externalLinks.data";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import behgozinImage from "../../../../../public/images/fund-section-item.png";
import petroImage from "../../../../../public/images/petro-padash.png";
import padaImage from "../../../../../public/images/pada.png";
import padashImage from "../../../../../public/images/padash.png";

import FundTabInfo from "../fundTabs/FundTabInfo";
import { IFundList, ITab } from "./Tabs.types";

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [funds, setFunds] = useState<ITab[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [innerWidth, setInnerWidth] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fundInfo: any = {
    11394: {
      shortDesc:
        "صندوق سرمایه‌گذاری درآمد ثابت پاداش سرمایه بهگزین صندوقی صدور و ابطالی بوده که دارایی تحت مدیریت آن 24 هزار میلیارد ریال برآورد می‌شود. ترکیب دارایی‌های صندوق شامل 55 درصد اوراق مشارکت، 40 درصد سپرده بانکی، 5 درصد سهام و وجه نقد و سایر دارایی‌ها می‌شود. بازده موثر سالانه این صندوق 25.5 درصد بوده و تقسیم سود به صورت ماهانه صورت می‌گیرد.",
      desc: "صندوق سرمایه گذاری پاداش سرمایه بهگزین در تاریخ 1394/09/17 با دریافت مجوز از سازمان بورس و اوراق بهادار (سبا) فعالیت خود را آغاز کرد. این صندوق همواره یکی از پر بازده ترین صندوق های با درآمد ثابت کشور بوده است. خالص ارزش روز دارایی های صندوق سرمایه گذاری پاداش سرمایه بهگزین بر 21٫6٠٠میلیارد ریال بوده است که نشان دهنده اعتماد بسیار بالای مشتریان و سرمایه گذاران به این صندوق به عنوان یکی از قدیمی ترین و برترین صندوق های درآمد ثابت کشور بوده است.",
      links: externalLinks.behgozin,
      images: behgozinImage,
    },
    11955: {
      shortDesc:
        "صندوق سرمایه‌گذاری درآمد ثابت پاداش سرمایه بهگزین صندوقی صدور و ابطالی بوده که دارایی تحت مدیریت آن 24 هزار میلیارد ریال برآورد می‌شود. ترکیب دارایی‌های صندوق شامل 55 درصد اوراق مشارکت، 40 درصد سپرده بانکی، 5 درصد سهام و وجه نقد و سایر دارایی‌ها می‌شود. بازده موثر سالانه این صندوق 25.5 درصد بوده و تقسیم سود به صورت ماهانه صورت می‌گیرد.",
      desc: "صندوق سرمایه گذاری پاداش سرمایه بهگزین در تاریخ 1394/09/17 با دریافت مجوز از سازمان بورس و اوراق بهادار (سبا) فعالیت خود را آغاز کرد. این صندوق همواره یکی از پر بازده ترین صندوق های با درآمد ثابت کشور بوده است. خالص ارزش روز دارایی های صندوق سرمایه گذاری پاداش سرمایه بهگزین بر 21٫6٠٠میلیارد ریال بوده است که نشان دهنده اعتماد بسیار بالای مشتریان و سرمایه گذاران به این صندوق به عنوان یکی از قدیمی ترین و برترین صندوق های درآمد ثابت کشور بوده است.",
      links: externalLinks.arzesh,
      images: padashImage,
    },
    12281: {
      shortDesc:
        "صندوق سرمایه‌گذاری درآمد ثابت پاداش سرمایه بهگزین صندوقی صدور و ابطالی بوده که دارایی تحت مدیریت آن 24 هزار میلیارد ریال برآورد می‌شود. ترکیب دارایی‌های صندوق شامل 55 درصد اوراق مشارکت، 40 درصد سپرده بانکی، 5 درصد سهام و وجه نقد و سایر دارایی‌ها می‌شود. بازده موثر سالانه این صندوق 25.5 درصد بوده و تقسیم سود به صورت ماهانه صورت می‌گیرد.",
      desc: "صندوق سرمایه گذاری پاداش سرمایه بهگزین در تاریخ 1394/09/17 با دریافت مجوز از سازمان بورس و اوراق بهادار (سبا) فعالیت خود را آغاز کرد. این صندوق همواره یکی از پر بازده ترین صندوق های با درآمد ثابت کشور بوده است. خالص ارزش روز دارایی های صندوق سرمایه گذاری پاداش سرمایه بهگزین بر 21٫6٠٠میلیارد ریال بوده است که نشان دهنده اعتماد بسیار بالای مشتریان و سرمایه گذاران به این صندوق به عنوان یکی از قدیمی ترین و برترین صندوق های درآمد ثابت کشور بوده است.",
      links: externalLinks.petroPadash,
      images: petroImage,
    },
    11470: {
      shortDesc:
        "صندوق سرمایه‌گذاری درآمد ثابت پاداش سرمایه بهگزین صندوقی صدور و ابطالی بوده که دارایی تحت مدیریت آن 24 هزار میلیارد ریال برآورد می‌شود. ترکیب دارایی‌های صندوق شامل 55 درصد اوراق مشارکت، 40 درصد سپرده بانکی، 5 درصد سهام و وجه نقد و سایر دارایی‌ها می‌شود. بازده موثر سالانه این صندوق 25.5 درصد بوده و تقسیم سود به صورت ماهانه صورت می‌گیرد.",
      desc: "صندوق سرمایه گذاری پاداش سرمایه بهگزین در تاریخ 1394/09/17 با دریافت مجوز از سازمان بورس و اوراق بهادار (سبا) فعالیت خود را آغاز کرد. این صندوق همواره یکی از پر بازده ترین صندوق های با درآمد ثابت کشور بوده است. خالص ارزش روز دارایی های صندوق سرمایه گذاری پاداش سرمایه بهگزین بر 21٫6٠٠میلیارد ریال بوده است که نشان دهنده اعتماد بسیار بالای مشتریان و سرمایه گذاران به این صندوق به عنوان یکی از قدیمی ترین و برترین صندوق های درآمد ثابت کشور بوده است.",
      links: externalLinks.pada,
      images: padaImage,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setInnerWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await axios.get<IFundList[]>(
          `${process.env.NEXT_PUBLIC_FUND_API_URL}/Fund`
        );
        const fundsData = response.data;

        const newTabsData: ITab[] = fundsData.map((item) => {
          const fundDataInfo = fundInfo?.[item.fund.dsCode] || {};
          return {
            id: item.fund.id,
            title: item.fund.title,
            tabName: item.fund.shortTitle,
            component: (
              <FundTabInfo
                shortDesc={fundDataInfo?.shortDesc || ""}
                desc={fundDataInfo?.desc || ""}
                link={fundDataInfo?.links || ""}
                fundData={item}
                image={fundDataInfo?.images}
              />
            ),
          };
        });

        setFunds(newTabsData);
      } catch {
        console.log("Error fetching funds");
      } finally {
        setLoading(false);
      }
    };

    fetchFunds();
  }, []);

  const visibleFunds = useMemo(() => {
    if (isMobile) {
      return funds.slice(0, 3);
    }
    return funds.slice(0, 4);

    // if (innerWidth > 768 && innerWidth <= 1100) {
    //   return funds.slice(0, 4);
    // }
    // return funds.slice(0, 6);
  }, [isMobile, innerWidth, funds]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      id="section-funds"
      className="container mx-auto my-16 px-4 md:px-0 overflow-x-hidden"
    >
      <div className={`flex ${isMobile ? "flex-row" : "flex-wrap"}`}>
        {visibleFunds?.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabIndex(idx)}
            className={`border border-[#EEEEEE] ${
              activeTabIndex === idx
                ? "bg-primary-500 text-white"
                : "bg-[#F6F9FC]"
            } ${
              isMobile ? "w-1/3" : "flex-1"
            } border-b-0 rounded-t-full py-2 px-4 hover:py-2 transition-all duration-300 `}
          >
            <span className="inline-block text-center">{tab.tabName}</span>
          </button>
        ))}
      </div>
      <div className="border border-[#EEEEEE] bg-[#FAFBFF] rounded-b-full">
        {visibleFunds?.[activeTabIndex]?.component}
      </div>
    </div>
  );
};

export default Tabs;
