"use client";

import { externalLinks } from "@/constant/externalLinks.data";
import {
  IconBooks,
  IconChevronDown,
  IconChevronLeft,
  IconChevronUp,
  IconCreditCardRefund,
  IconDatabaseDollar,
  IconMailDollar,
  IconMenu2,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import CacheSvg from "../../../../public/cache";

interface ImageSize {
  width: number;
  height: number;
}

interface MenuItem {
  title: string;
  description: string;
  image: string;
  imageSize: ImageSize;
  link?: string;
  internal?: boolean;
}

interface AdditionalLinkItem {
  title: string;
  link?: string;
  internal?: boolean;
}

interface NavItem {
  id: string;
  title: string;
  hasDropdown: boolean;
  menuItems?: MenuItem[];
  additionalLinks?: AdditionalLinkItem[];
  icon: JSX.Element;
  link?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "investment",
    title: "سرمایه گذاری",
    hasDropdown: true,
    icon: <CacheSvg />,
    menuItems: [
      // {
      //   title: "شرکت مشاور سرمایه‌گذاری پاداش",
      //   description: "مدیریت حرفه ای دارایی شما",
      //   image: "/images/investment-1.png",
      //   imageSize: { width: 182, height: 136 },
      //   link: externalLinks.advise,
      // },
      {
        title: "شرکت سبدگردان پاداش",
        description: "مدیریت حرفه ای دارایی شما",
        image: "/images/investment-2.png",
        imageSize: { width: 135, height: 80 },
        link: externalLinks.sabadPadash,
      },
      {
        title: "صندوق های پاداش",
        description: "مشاهده همه صندوق های پاداش",
        image: "/images/section-1-sabad-gardan.png",
        imageSize: { width: 100, height: 60 },
        link: externalLinks.fund,
      },
    ],
  },
  {
    id: "trades",
    title: "معاملات",
    hasDropdown: true,
    icon: <IconDatabaseDollar />,

    menuItems: [
      {
        title: "شرکت کارگزاری پاداش",
        description: "مدیریت حرفه ای دارایی شما",
        image: "/images/broker-1.png",
        imageSize: { width: 100, height: 68 },
        link: externalLinks.broker,
      },
      {
        title: "سامانه های معاملاتی",
        description: "مدیریت حرفه ای دارایی شما",
        image: "/images/broker-2.png",
        imageSize: { width: 116, height: 76 },
        link: externalLinks.broker,
      },
    ],
    additionalLinks: [
      {
        title: "ورود به سامانه معاملات(اکسیر)",
        link: externalLinks.exir,
      },
      { title: "سامانه معاملات ebgo", link: externalLinks.ebgo },
      {
        title: "ثبت نام غیرحضوری",
        link: externalLinks.padashregister,
      },
    ],
  },
  {
    id: "leasing",
    title: "لیزینگ",
    icon: <IconCreditCardRefund />,
    hasDropdown: false,
    link: externalLinks.leasingInternal,
  },
  {
    id: "tamin-mali",
    title: "تامین مالی",
    icon: <CacheSvg />,
    hasDropdown: false,
  },
  {
    id: "education",
    title: "آموزش",
    icon: <IconBooks />,
    hasDropdown: true,
    menuItems: [
      {
        title: "آکادمی پاداش",
        description: "مشاهده آموزش های مالی",
        image: "/images/edu-1.png",
        imageSize: { width: 120, height: 68 },
        link: externalLinks.academy,
      },
      {
        title: "بلاگ پاداش",
        description: "مشاهده آخرین اخبار مالی",
        image: "/images/edu-2.png",
        imageSize: { width: 170, height: 90 },
        link: externalLinks.advise,
      },
    ],
  },
  {
    id: "contact",
    title: "ارتباط با ما",
    hasDropdown: true,
    menuItems: [
      {
        title: "درباره پاداش",
        description: "درباره پاداش",
        image: "/images/contact-1.png",
        imageSize: { width: 130, height: 80 },
        link: externalLinks.about,
        internal: true,
      },
      {
        title: "ارتباط با ما",
        description: "مشاهده آموزش های مالی",
        image: "/images/contact-2.png",
        imageSize: { width: 160, height: 94 },
        link: externalLinks.contact,
      },
      {
        title: "همکاری با ما",
        description: "موقعیت های شغلی",
        image: "/images/contact-3.png",
        imageSize: { width: 190, height: 100 },
        link: externalLinks.contact,
      },
    ],
    icon: <IconMailDollar />,
  },
];

const AdditionalLink: React.FC<AdditionalLinkItem> = ({
  title,
  link,
  internal,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (internal) {
          router.push(link!);
        } else {
          window.open(link, "_blank");
        }
      }}
      className="border  flex border-dashed border-white border-opacity-30 hover:shadow-xl rounded-xl py-3 px-2 items-center justify-between"
    >
      <CacheSvg />
      <p className="text-sm text-white">{title}</p>
      <IconChevronLeft
        size={18}
        className="group-hover:opacity-100 opacity-0 transitio text-[10px]"
      />
    </div>
  );
};

const DropdownMenuItem: React.FC<MenuItem> = ({
  title,
  description,
  image,
  imageSize,
  link,
  internal,
}) => {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => {
          if (internal) {
            router.push(link!);
          } else {
            window.open(link, "_blank");
          }
        }}
        className="flex w-[300px] border border-white border-dashed border-opacity-30 h-[200px] items-center rounded-xl py-4 gap-2 transition hover:shadow-xl text-white flex-col cursor-pointer"
      >
        <Image
          src={image}
          alt={title}
          width={imageSize.width}
          height={imageSize.height}
        />
        {/* باکس عنوان و توضیحات */}
        <div className="mt-2 w-full px-4 text-right self-start">
          <div className="font-bold text-nowrap text-sm lg:text-base">
            {title}
          </div>
          <div className="flex items-center gap-1">
            <div className="text-xs lg:text-sm text-[#D8D8D8] mt-2">
              {description}
            </div>
            <div className="mb-[-8px]">
              <IconChevronLeft
                size={18}
                className="group-hover:opacity-100 opacity-0 transition text-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Nav: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMenus(new Set());
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
      setOpenMenus(new Set());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (id: string) => {
    if (openMenus.has(id)) {
      setOpenMenus(new Set());
    } else {
      setOpenMenus(new Set([id]));
    }
  };

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setOpenMenus(new Set());
    }
    const handlePopState = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isMobileMenuOpen]);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    history.pushState(null, "", window.location.href);
  };

  return (
    <div className="fixed top-0 w-full flex flex-col items-center justify-center z-50 mt-4 md:mt-6">
      <div
        className={`container px-2 md:px-0 ${
          isMobileMenuOpen ? "hidden" : "block"
        }`}
      >
        <nav className="bg-primary-500 max-w-[1120px] mx-auto rounded-[3rem] px-4 py-2 shadow-lg flex justify-between items-center bg-pattern relative z-[1]">
          <div className="container mx-auto flex justify-between items-center">
            <div
              className="text-white block lg:hidden pl-2 cursor-pointer"
              onClick={openMobileMenu}
            >
              <IconMenu2 />
            </div>
            <div
              className={`text-white cursor-pointer font-bold text-lg flex-1 lg:flex-none ${
                isHover ? "opacity-40" : "opacity-100"
              }`}
              onClick={() => router.push("/")}
            >
              <Image
                src="/images/nav-logo.png"
                width={90}
                height={28}
                alt="Nav Logo"
              />
            </div>
            <div className="flex-1 hidden lg:block">
              <ul className="flex items-center align-center justify-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        setIsHover(true);
                      }
                    }}
                    onClick={() => {
                      if (item.id === "tamin-mali") {
                        const element =
                          document.getElementById("section-advisor");
                        if (element) {
                          const offset = 150;
                          const topPosition =
                            element.getBoundingClientRect().top +
                            window.scrollY -
                            offset;
                          window.scrollTo({
                            top: topPosition,
                            behavior: "smooth",
                          });
                        }
                      } else if (item.link) {
                        window.open(item.link, "_blank");
                      }
                    }}
                    onMouseLeave={() => setIsHover(false)}
                    className="group py-2"
                  >
                    <div className="text-white hover:text-blue-200 flex align-center justify-center cursor-pointer">
                      {item.title}
                      {item.hasDropdown && (
                        <div className="relative group">
                          <IconChevronUp className="absolute top-0 left-0 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                          <IconChevronDown className="opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90 transition-all duration-500" />
                        </div>
                      )}
                      {item.menuItems && (
                        <div
                          className="overflow-hidden max-h-0 opacity-0 transition-all duration-300 group-hover:max-h-[270px] group-hover:opacity-100 
                            px-4 lg:px-4 xl:px-28 absolute group-hover:min-h-[270px] rounded-b-[2.5rem] gap-2 justify-evenly top-[32px] z-[-1] right-0 w-full 
                            bg-pattern bg-primary-500 flex items-center"
                        >
                          <div className="flex justify-center gap-4 w-full">
                            {item.menuItems.map((menuItem, index) => (
                              <DropdownMenuItem key={index} {...menuItem} />
                            ))}
                          </div>
                          {item.additionalLinks && (
                            <div className="flex w-full mx-4 flex-col gap-[24px]">
                              {item.additionalLinks.map((link, index) => (
                                <AdditionalLink key={index} {...link} />
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={externalLinks.pwa}
              target="_blank"
              className={`text-white hover:text-blue-200 rounded-full border-2 px-4 py-2 cursor-pointer ${
                isHover ? "opacity-40" : "opacity-100"
              }`}
            >
              ورود | ثبت نام
            </a>
          </div>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-primary-500 bg-opacity-25 backdrop-blur-lg p-6 transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-xl absolute top-4 right-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="mt-10 space-y-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="text-white text-lg cursor-pointer">
              <div
                className="flex items-center gap-2"
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleMenu(item.id);
                  }
                  if (item.id === "tamin-mali") {
                    const element = document.getElementById("section-advisor");
                    if (element) {
                      const offset = 150;
                      const topPosition =
                        element.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                      window.scrollTo({
                        top: topPosition,
                        behavior: "smooth",
                      });
                    } else {
                      router.push("/");
                    }
                  }
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                {item.icon}
                <span>{item.title}</span>
                {item.hasDropdown &&
                  (openMenus.has(item.id) ? (
                    <IconChevronUp className="text-white ml-2" />
                  ) : (
                    <IconChevronDown className="text-white ml-2" />
                  ))}
              </div>

              <div
                className={`transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden ${
                  openMenus.has(item.id)
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pr-4 mt-3 space-y-4">
                  {item.menuItems &&
                    item.menuItems.map((menuItem, index) => (
                      <li
                        onClick={() => {
                          if (menuItem.link && menuItem.internal) {
                            router.push(menuItem.link);
                          }
                          if (menuItem.link && !menuItem.internal) {
                            window.open(menuItem.link, "_blank");
                          }
                        }}
                        key={index}
                      >
                        <div className="text-sm">{menuItem.title}</div>
                      </li>
                    ))}
                  {item.additionalLinks &&
                    item.additionalLinks.map((link, index) => (
                      <li
                        onClick={() => {
                          if (link.link) {
                            window.open(link.link, "_blank");
                          }
                        }}
                        key={index}
                        className="text-sm"
                      >
                        {link.title}
                      </li>
                    ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
