"use client";

import Image from "next/image";
import Hero from "../home/Hero";
import AboutUsCards from "./AboutUsCards";

const achievementsData = [
  {
    year: "1396",
    description: "همه چیز از یک صفحه ساده شروع شد",
  },
  {
    year: "1397",
    description: "جابجایی به یه جمع حرفه‌ای در بازار رمز دیجیتال ایران",
  },
  {
    year: "1398",
    description: "اپلیکیشن پاداش",
  },
  {
    year: "1399",
    description: "راه‌اندازی بخش آموزشی رمز ارز و ورود به یک بیزینس اساسی جدید",
  },
  {
    year: "1400",
    description: "اولین کنفرانس رمز ارز و بلاک‌چین در...",
  },
  {
    year: "1401",
    description: "ارائه نسخه دوم پلتفرم پاداش به همراه بخش‌های جدید",
  },
  {
    year: "1402",
    description:
      "ارائه نسخه دوم پلتفرم پاداش و تکمیل سفر مشتری در فروش صندوق + پشتیبانی از تولید محتوا برای اشتغال‌زایی لحظه",
  },
];

const teamData = [
  {
    name: "دکتر کوروش شمس",
    position: "مدیر عامل هلدینگ",
    image: "/images/shams.jpg",
  },
  {
    name: "دکتر کوروش شمس",
    position: "مدیر عامل هلدینگ",
    image: "/images/shams.jpg",
  },
  {
    name: "دکتر کوروش شمس",
    position: "مدیر عامل هلدینگ",
    image: "/images/shams.jpg",
  },
];

const AboutUs = () => {
  return (
    <>
      <Hero title="درباره ما" />
      <div className="overflow-hidden">
        <AboutUsCards />
      </div>
      <div className="max-w-[1120px] mx-auto border border-[#6B7280] border-opacity-10 border-t-0">
        <div className="mt-14 text-center mb-20 px-4">
          <p className="text-[#111827] text-[24px] mb-12 font-bold">
            درباره پاداش
          </p>
          <p className="text-[#6B7280] text-[14px] text-justify font-medium leading-7">
            گروه مالی پاداش دارای زنجیره کامل خدمات مالی و با بیش از 650 هزار
            میلیارد ریال دارایی تحت مدیریت و متنوع‌ترین صندوق‌های سرمایه‌گذاری
            است. کاریزما به‌عنوان یک هلدینگ مالی به پشتوانه تجربه بالا در زمینه
            فعالیت در بازار سرمایه و نیروی انسانی متخصص آماده ارائه خدمات متنوع
            به مشتریان حقیقی و حقوقی است. گروه مالی کاریزما در حال حاضر متشکل از
            ده شرکت تخصصی و بیش از ۶۰۰ نفر پرسنل فعال است که زنجیره خدمات
            کاریزما را برای مردم عزیزمان ایجاد کرده‌اند.
          </p>
        </div>

        <div className="mt-14 text-center mb-20">
          <p className="text-[#111827] text-[24px] mb-12 font-bold">
            چشم انداز
          </p>
          <p className="text-[#01438F] font-bold text-[20px] px-4 text-center leading-10">
            در پاداش، رویای ما ساختن آینده‌ای روشن‌تر با قدرت فناوری‌های مالی
            نوین است. ما می‌خواهیم با ابزار و آموزش، همه مردم را برای سهیم شدن
            در اقتصادی آزاد و غیرمتمرکز توانمند کنیم.
          </p>
        </div>

        <div className="mt-14 text-center mb-20 px-4">
          <p className="text-[#111827] text-[24px] mb-12 font-bold">
            دستاوردها
          </p>
        </div>
        {achievementsData.map((item, index) => {
          return (
            <div key={item.year}>
              <div>
                <hr />
                <div className="flex items-center justify-between py-3 px-4">
                  <div className="flex items-center gap-4">
                    <p className=" text-[#333333] font-bold text-[16px]">
                      {item.year}
                    </p>
                    <div className="w-5 h-5  rounded-full bg-white border-4 border-[#01438F]" />
                    <p className="py-2 px-4 text-[#333333] font-bold text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <hr />
              </div>
              {index !== achievementsData.length - 1 && (
                <div className="w-1 h-[44px] bg-[#01438F] mr-[73px] my-2 rounded-[100px]" />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-14 text-center mb-8 px-4">
        <p className="text-[#111827] text-[24px] mb-12 font-bold">
          مدیران پاداش
        </p>
      </div>
      <section className="max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative w-full h-[350px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#01438F] text-white px-4 py-4">
                <p className="text-lg font-bold">{member.name}</p>
                <p className="text-sm mt-1">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
