"use client";
import { useEffect, useState } from "react";
import { IconChevronUp } from "@tabler/icons-react";

const MoveToTopInFooter = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.scrollY > scrollableHeight / 5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMoveToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <div
      onClick={handleMoveToTopClick}
      className="fixed bottom-20 left-4 z-50 bg-white text-black shadow rounded-full p-2 cursor-pointer"
    >
      <IconChevronUp />
    </div>
  );
};

export default MoveToTopInFooter;
