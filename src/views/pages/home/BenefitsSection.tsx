import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ServiceCard from "./serviceCard";
// import ArrowLeft from "../../../../public/arrowLeft";

const BenefitsSection = () => {
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);

  const [hideHeader, setHideHeader] = useState(false);

  const firstSectionRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const chatContentRef = useRef<HTMLDivElement | null>(null);

  // رفرنس سکشن دوم
  const secondSectionRef = useRef<HTMLDivElement | null>(null);

  // تنظیم IntersectionObserver برای هر سکشن
  useEffect(() => {
    // سکشن اول
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsFirstVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsSecondVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (firstSectionRef.current) {
      observer1.observe(firstSectionRef.current);
    }
    if (secondSectionRef.current) {
      observer2.observe(secondSectionRef.current);
    }

    return () => {
      if (firstSectionRef.current) observer1.unobserve(firstSectionRef.current);
      if (secondSectionRef.current)
        observer2.unobserve(secondSectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isFirstVisible) {
      setHideHeader(true);

      if (chatContainerRef.current && chatContentRef.current) {
        const container = chatContainerRef.current;
        const content = chatContentRef.current;

        const containerHeight = container.clientHeight;
        const contentHeight = content.clientHeight;

        if (contentHeight > containerHeight) {
          const totalScroll = contentHeight - containerHeight;
          const duration = 1500;

          let startTime: number | null = null;

          function animateScroll(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const translateY = totalScroll * progress;
            content.style.transform = `translateY(-${translateY}px)`;

            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          }
          requestAnimationFrame(animateScroll);
        }
      }
    } else {
      setHideHeader(false);
      if (chatContentRef.current) {
        chatContentRef.current.style.transform = "translateY(0)";
      }
    }
  }, [isFirstVisible]);

  return (
    <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-8 w-full">
      <div
        ref={firstSectionRef}
        className="flex flex-col bg-white w-full shadow-xl rounded-xl"
      >
        <div
          ref={chatContainerRef}
          className="
            relative
            rounded-t-[2rem] md:rounded-t-[50px] rounded-xl
            bg-white shadow-xl
            w-full
            overflow-hidden
            min-h-[340px]
          "
        >
          <Image
            src={"/images/bg-chat.png"}
            alt="section-bg"
            fill
            className="object-cover"
          />

          <div
            className={`
              absolute top-10 left-0 w-full
              transition-opacity duration-700
              z-10
              ${hideHeader ? "opacity-0" : "opacity-100"}
            `}
          >
            <Image
              src={"/images/header-chat.png"}
              alt="header-overlay"
              width={600}
              height={150}
              className="mx-auto"
            />
          </div>

          <div
            ref={chatContentRef}
            className="
              absolute top-0 left-0 w-full
              py-8 px-3 pt-[300px]
            "
          >
            <Image
              src={"/images/chat.png"}
              alt="chat"
              width={400}
              height={1200}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="relative p-8  group">
          <div className="mb-4">
            <Image
              src={"/images/benefits-badge.png"}
              alt="section"
              width={128}
              height={32}
            />
          </div>
          <div className="pb-8">
            شما با استفاده از هریک از خدمات پاداش, امتیازاتی برای استفاده از
            مابقی خدمات دریافت میکنید
          </div>

          {/* <button
            className="
    absolute bottom-4 left-4 px-4 py-2
    text-sm text-[#94989E]
    flex
    items-center justify-between
    border border-[#94989E]
    border-opacity-60
    bg-white
    shadow
    rounded-3xl
    transform transition-all duration-300
    opacity-100 scale-100 pointer-events-auto
    md:opacity-0 md:scale-75 md:pointer-events-none
    md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto
  "
          >
            اطلاعات بیشتر
            <ArrowLeft color="#94989E" />
          </button> */}
        </div>
      </div>

      <div ref={secondSectionRef} className="flex flex-col bg-white w-full">
        <div
          className="
      flex-1  rounded-t-[2rem] md:rounded-t-[50px] rounded-xl
      bg-white shadow-xl overflow-hidden w-full
    "
        >
          <div>
            <ServiceCard isVisible={isSecondVisible} />
          </div>

          <div className="relative p-8  group">
            <div className="mb-4">
              <Image
                src={"/images/badge-mali.png"}
                alt="section"
                width={128}
                height={32}
              />
            </div>
            <div className="pb-8">
              گروه خدمات بازار سرمایه پاداش منظومه‌ای از فرصت‌های شگفت‌انگیـز
              مالی را به جامعه سرمایه‌گذاران ارائه می‌کند.
            </div>

            {/* دکمه‌ای که با هاور ظاهر می‌شود */}
            {/* <button
              className="
    absolute bottom-4 left-4 px-4 py-2
    text-sm text-[#94989E]
    flex
    items-center justify-between
    border border-[#94989E]
    border-opacity-60
    bg-white
    shadow
    rounded-3xl
    transform transition-all duration-300
    opacity-100 scale-100 pointer-events-auto
    md:opacity-0 md:scale-75 md:pointer-events-none
    md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto
  "
            >
              اطلاعات بیشتر
              <ArrowLeft color="#94989E" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
