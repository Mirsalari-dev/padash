"use client";
import { externalLinks } from "@/constant/externalLinks.data";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="relative ">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full object-cover  md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="#01438f"
            fillOpacity="1"
            d="
        M0,40 
        C240,40,480,50,720,50 
        C960,50,1200,40,1440,40
        L1440,200
        L0,200Z
      "
          />
        </svg>
        <svg
          className="w-full h-full object-cover hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="#01438f"
            fillOpacity="1"
            d="
        M0,30 
        C240,40,480,50,720,50 
        C960,50,1200,40,1440,30
        L1440,200
        L0,200Z
      "
          />
        </svg>
      </div>

      <div className="relative z-10 px-4 md:px-0 md:pt-[110px] pt-40 text-white">
        {/* محتوای فوتر */}
        <div className="container mx-auto pt-20 md:pt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 py-8 gap-8">
            <div>
              <div className="mb-4 font-bold">صندوق ها</div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a target="_blank" href={externalLinks.behgozin}>
                    بهگزین
                  </a>
                </li>
                <li>
                  <a target="_blank" href={externalLinks.arzesh}>
                    ارزش پاداش
                  </a>
                </li>
                <li>
                  <a target="_blank" href={externalLinks.petroPadash}>
                    پتروپاداش
                  </a>
                </li>
                <li>
                  <a target="_blank" href={externalLinks.pada}>
                    پادا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-bold">سرمایه گذاری</div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={externalLinks.advise} target="_blank">
                    مشاور سرمایه‌گذاری
                  </a>
                </li>
                <li>
                  <a href={externalLinks.sabadPadash} target="_blank">
                    سبدگردان پاداش
                  </a>
                </li>
                <li>
                  <a target="_blank" href={externalLinks.fund}>
                    صندوق های پاداش
                  </a>
                </li>
                <li>
                  <a target="_blank" href={externalLinks.pwa}>
                    سرمایه گذاری
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-bold">معاملات</div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={externalLinks.broker} target="_blank">
                    کارگزاری
                  </a>
                </li>
                <li>
                  <a href={externalLinks.broker} target="_blank">
                    سامانه معاملاتی
                  </a>
                </li>
                <li>
                  <a href={externalLinks.exir} target="_blank">
                    اکسیر
                  </a>
                </li>
                <li>
                  <a href={externalLinks.ebgo} target="_blank">
                    سامانه معاملات ebgo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-bold">درباره پاداش</div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" onClick={() => router.push(externalLinks.about)}>
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href={externalLinks.contact} target="_blank">
                    ارتباط با ما
                  </a>
                </li>
                <li>
                  <a href={externalLinks.contact} target="_blank">
                    همکاری با ما
                  </a>
                </li>
                <li>
                  <a href={externalLinks.advise} target="_blank">
                    بلاگ پاداش
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-bold">آدرس دفتر مرکزی</div>
              <div className="mb-4 text-sm w-full">
                تهران، میدان آرژانتین، خیابان احمد قصیر، خیابان پنجم پلاک 21
              </div>
              <div className="mb-2 font-bold">شماره تماس</div>
              <a href="tel:+982158718" className="mb-4">
                982158718+
              </a>
              <div className="mb-2 font-bold">آدرس ایمیل</div>
              <div className="mb-4">info@padash.ir</div>
            </div>
          </div>

          <div className="border-t border-white flex py-4 mt-4">
            <Image
              src={"/images/nav-logo.png"}
              width={90}
              height={28}
              alt="Nav Logo"
            />
            <div className="flex-1"></div>
            <div>
              <a
                className="text-white hover:text-blue-200 rounded border-2 px-2 py-1 cursor-pointer"
                href={externalLinks.pwa}
                target="_blank"
                rel="noreferrer"
              >
                ورود | ثبت نام
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
