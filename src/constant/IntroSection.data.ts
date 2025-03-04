import { externalLinks } from "./externalLinks.data";

export interface IntroSectionData {
  reverseOrder: boolean;
  tagText: string;
  title: string;
  description: string;
  id?: string;
  imageUrl: string;
  link: string;
  bulletPoints: Array<{
    title: string;
    text: string;
    link?: string;
  }>;
}
export const introSectionsData: IntroSectionData[] = [
  {
    reverseOrder: false,
    id: "section-portfolio",
    tagText: "سبدگردان",
    title: " سبدگردان پاداش",
    link: externalLinks.sabadPadash,
    description:
      "شرکت سبدگردان پاداش سرمایه با هدف بهینه‌سازی بازده سرمایه‌گذاری و کاهش ریسک، انتخاب، ترکیب و نظارت بر دارایی‌ها را برای تحقق اهداف مالی سرمایه‌گذاران انجام می‌دهد. دارایی‌های متنوع این شرکت شامل سهام، اوراق درآمد ثابت، گواهی سپرده، اختیار معامله و سایر محصولات مالی است. فرآیند سبدگردانی شامل ریسک‌سنجی مشتریان، تحلیل بازار، انتخاب دارایی‌ها، تنوع‌بخشی، مدیریت ریسک، نظارت و گزارش‌دهی است. همچنین، شرکت با ارائه گزارش‌های دوره‌ای شامل عملکرد سبد، تغییرات ترکیب دارایی‌ها و تحلیل بازار، سرمایه‌گذاران را از وضعیت سبد خود مطلع می‌سازد.",
    imageUrl: "/images/section-1-sabad-gardan.png",
    bulletPoints: [
      {
        title: "ورود به سامانه سبدگردانی",
        text: " از طریق پذیرش شرکت ها در بازار سرمایه و انتشار اوراق بدهی",
      },
      {
        title: "تشکیل سبد",
        text: " خدمات تخصصی در زمینه ارزش‌گذاری شرکت‌ها، پروژه‌ها، استارتاپ‌ها و ...",
        link: externalLinks.pwa,
      },
      {
        title: "تیم سبدگردان پاداش",
        text: " دانش حرفه‌ای، نیروی انسانی متخصص",
        link: externalLinks.sabadPadash,
      },
      {
        title: "فرم ها و قرارداد ها",
        text: " بررسی تخلف ایجاد شده توسط سایر ارکان صندوق و نظارت بر عملکرد ارکان مختلف",
        link: externalLinks.sabadPadash,
      },
    ],
  },
  {
    reverseOrder: true,
    id: "section-broker", // ← برای اسکرول درون‌صفحه
    tagText: "کارگزاری",
    title: " کارگزاری پاداش",
    link: externalLinks.broker,
    description:
      "شرکت کارگزاری پاداش در معاملات سهام، کالا، انرژی و ابزار مشتقه فعالیت می‌کند. این شرکت خدمات پذیرش و عرضه سهام و اوراق در بورس تهران و فرابورس و پذیرش کالا در بورس کالا و انرژی ارائه می‌دهد. پاداش پلتفرم‌های متنوعی نظیر معاملات آنلاین اکسیر، صحرا، ebgo و همراه تریدر دارد. همچنین خدمات ثبت‌نام غیرحضوری، احراز هویت سجام، دریافت کد بورس کالا و ابزار مشتقه را ارائه می‌کند. مزایای آن شامل تخصیص اعتبار، معاملات دوطرفه آپشن و کارمزد صفر صندوق درآمد ثابت است.",
    imageUrl: "/images/broker-1.png",
    bulletPoints: [
      {
        title: "ثبت نام غیر حضوری",
        text: " از طریق پذیرش شرکت ها در بازار سرمایه و انتشار اوراق بدهی",
        link: externalLinks.padashregister,
      },
      {
        title: "سامانه معاملات ebgo",
        text: " خدمات تخصصی در زمینه ارزش‌گذاری شرکت‌ها، پروژه‌ها، استارتاپ‌ها و ...",
        link: externalLinks.ebgo,
      },
      {
        title: "سامانه معاملات(اکسیر)",
        text: " دانش حرفه‌ای، نیروی انسانی متخصص",
        link: externalLinks.exir,
      },
      {
        title: "سامانه معاملات صحرا",
        text: " بررسی تخلف ایجاد شده توسط سایر ارکان صندوق و نظارت بر عملکرد ارکان مختلف",
        link: externalLinks.sahra,
      },
    ],
  },

  {
    reverseOrder: false,
    id: "section-advisor", // ← برای اسکرول درون‌صفحه
    tagText: "تامین مالی",
    title: " تامین مالی پاداش",
    link: externalLinks.advise,
    description:
      "شرکت تامین مالی پاداش با 3 راهبرد اساسی کمک به توسعه کسب و کارها، حافظ امنیت سرمایه‌گذاران و اطلاع‌رسانی فعالیت خود را آغاز کرد. کمک به توسعه کسب و کارها شامل تامین مالی، عرضه و پذیرش و ارزش‌گذاری می‌شود. همچنین به عنوان رکن ناظر امین شرکت‌های سبدگردانی و متولی صندوق‌های سرمایه‌گذاری فعالیت می‌کند. در حوزه اطلاع‌رسانی و تولید محتوا نیز این شرکت، بازار جهانی، بازارهای مالی ایران، گزارشات صنایع و گزارشات شرکت‌ها را مورد تحلیل و ارزیابی قرار می‌دهد.",
    imageUrl: "/images/section-4-moshavere.png",
    bulletPoints: [
      {
        title: "عرضه و پذیرش",
        text: " از طریق پذیرش شرکت ها در بازار سرمایه و انتشار اوراق بدهی",
        // link: externalLinks.padashregister,
      },
      {
        title: "تامین مالی شرکت ها",
        text: " خدمات تخصصی در زمینه ارزش‌گذاری شرکت‌ها، پروژه‌ها، استارتاپ‌ها و ...",
        // link: externalLinks.ebgo,
      },
      {
        title: "ارزش گذاری",
        text: " دانش حرفه‌ای، نیروی انسانی متخصص",
        // link: externalLinks.exir,
      },
      // {
      //   title: "سامانه معاملات صحرا",
      //   text: " بررسی تخلف ایجاد شده توسط سایر ارکان صندوق و نظارت بر عملکرد ارکان مختلف",
      //   link: externalLinks.sahra,
      // },
    ],
  },
  {
    reverseOrder: true,
    id: "section-leasing", // ← برای اسکرول درون‌صفحه
    tagText: "واسپاری",
    link: externalLinks.leasingInternal,
    title: " لیزینگ پاداش",
    description:
      "شرکت واسپاری پاداش با دریافت مجوزهای لازم از بانک مرکزی جمهوری اسلامی ایران و در راستای تکمیل زنجیره ارزش گروه، خدمات خود را به‌صورت آنلاین ارائه می‌کند. این شرکت با بهره‌گیری از روش‌های تخصصی لیزینگ و ارائه تسهیلات متنوع، به توسعه مداوم در صنعت لیزینگ و افزایش توان رقابتی خود می‌پردازد. واسپاری پاداش نقش مهمی در ارائه خدمات ترکیبی به مشتریان دارد و با تلفیق خدمات سرمایه‌گذاری و طرح‌های خرید اقساطی، تجربه‌ای نوین در بازار سرمایه ایران ایجاد می‌کند و از ظرفیت‌های موجود به بهترین شکل بهره‌مند می‌شود.",
    imageUrl: "/images/section-3-leasing.png",
    bulletPoints: [
      {
        title: "ماشین حساب",
        text: " از طریق پذیرش شرکت ها در بازار سرمایه و انتشار اوراق بدهی",
        link: externalLinks.leasingInternal,
      },
      {
        title: "شرایط اعطلای تسهیلات",
        text: " از طریق پذیرش شرکت ها در بازار سرمایه و انتشار اوراق بدهی",
        link: externalLinks.leasingInternal,
      },
      {
        title: "راهنمای دریافت تسهیلات",
        text: " از طریق پذیرش شرکت ها در بازار سرمایه و انتشار اوراق بدهی",
        link: externalLinks.leasingInternal,
      },
      {
        title: "ورود به حساب کاربری",
        text: " بررسی تخلف ایجاد شده توسط سایر ارکان صندوق و نظارت بر عملکرد ارکان مختلف",
        link: externalLinks.pwa,
      },
    ],
  },
];
