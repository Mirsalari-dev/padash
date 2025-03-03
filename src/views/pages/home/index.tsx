"use client";

import { introSectionsData } from "@/constant/IntroSection.data";
import BenefitsSection from "./BenefitsSection";
import Cards from "./Cards";
import ContentSection from "./ContentSection";
import Hero from "./Hero";
import IntroSection from "./IntroSection";
import Tabs from "./Tabs/Tabs";
import TextSection from "./TextSection";

const Home = () => {
  return (
    <div className="bg-[#fcfdfe]">
      <Hero title="فردایی به اعتبار امروز" />
      <div className="overflow-hidden">
        <Cards />
      </div>

      <br />
      <br />
      <TextSection
        header={
          <div>
            صندوق های سرمایه گذاری{" "}
            <span className="font-bold text-primary-500">پاداش</span>
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />
      <Tabs />
      <TextSection
        header={
          <div>
            پازل بازار‌ سرمایه چگونه با{" "}
            <span className="font-bold text-primary-500">پاداش</span> تکمیل
            می‌شود؟
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />
      <div className="px-4 md:px-0">
        {introSectionsData.map((sectionData, index) => (
          <IntroSection key={index} {...sectionData} />
        ))}
      </div>

      <TextSection
        header={
          <div>
            مزایای <span className="font-bold text-primary-500">پاداش</span> به
            نسبت رقبا چیست ؟
          </div>
        }
        description={
          "گروه خدمات بازار سرمایه پاداش در چهار محور اصلی کارگزاری، سبدگردانی، مشاور سرمایه گذاری و لیزینگ با مدیریت دارایی تخصصی خدمات ارائه می دهد."
        }
      />
      <div>
        <BenefitsSection />
      </div>

      <TextSection
        header={
          <div>
            ذره‌بین{" "}
            <span className="font-bold text-primary-500">بازار سرمایه</span>
          </div>
        }
        description={""}
      />

      <ContentSection />
    </div>
  );
};

export default Home;
