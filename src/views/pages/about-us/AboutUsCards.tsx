"use client";
import Image from "next/image";
import styled from "styled-components";

const PageWrapper = styled.div`
  overflow: visible;
  position: relative;
  width: 100%;
  height: 100%;
`;

const AboutUsCards = () => {
  return (
    <PageWrapper>
      <div className="relative min-h-[24rem] md:min-h-[35rem]">
        <div className="flex">
          <div className="flex-1 cards-section-bg-right h-[360px] md:h-[562px]"></div>
          <div className="flex-1 cards-section-bg-left h-[360px] md:h-[562px]"></div>
        </div>

        <div className="container z-[999] mx-auto justify-center flex mt-[-8rem] md:mt-[-14rem] md:scale-110">
          <div className="w-[310px] md:w-[460px] text-center justify-center items-center flex flex-col relative ">
            <div className="absolute">
              <Image
                src={"/images/cards-pocket-bg.png"}
                alt={"section"}
                width={520}
                height={420}
              />
            </div>

            <div className="absolute md:top-[-280px] top-[-200px] ">
              <Image
                className="w-[300px] md:w-[420px]"
                width={500}
                height={480}
                alt="about us"
                src={"/images/about.png"}
              />
            </div>

            <div className="absolute md:w-[478px] bottom-[-104px] md:bottom-[-165px] m-[-10px] md:m-[8px]">
              <Image
                src={"/images/cards-pocket.png"}
                alt={"section"}
                width={600}
                height={460}
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutUsCards;
