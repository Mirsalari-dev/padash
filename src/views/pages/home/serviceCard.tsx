import styled, { css } from "styled-components";
import BasketMakerIcon from "../../../../public/basketMaker";
import CounselingIcon from "../../../../public/counseling";
import LeasingIcon from "../../../../public/leasing";
import { externalLinks } from "@/constant/externalLinks.data";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./images/bg-card-padash.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 340px;
  width: 100%;
  max-width: none;

  @media (max-width: 550px) {
    background-size: cover;
  }
`;

const MainCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "ishovered",
})<{ ishovered: boolean }>`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  overflow: hidden;

  @media (max-width: 550px) {
    height: 250px;
  }

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const AnimatedItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isvisible", "x", "y"].includes(prop),
})<{
  isvisible: boolean;
  x: number;
  y: number;
}>`
  position: absolute;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ isvisible, x, y }) =>
    isvisible &&
    css`
      opacity: 1;
      transform: translate(${x}px, ${y}px) scale(1);
    `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  line-height: 35px;

  @media (max-width: 550px) {
    transform: scale(0.7);
    ${({ isvisible, x, y }) =>
      isvisible &&
      css`
        transform: translate(${x / 1.5}px, ${y / 1.5}px) scale(0.9);
      `};
  }

  /* Adjust position for screens between 898px and 1123px */
  @media (min-width: 898px) and (max-width: 1123px) {
    ${({ isvisible, x, y }) =>
      isvisible &&
      css`
        transform: translate(${x / 1.2}px, ${y / 1.2}px) scale(1);
      `};
  }

  /* Adjust position for screens between 350px and 380px */
  @media (min-width: 350px) and (max-width: 380px) {
    ${({ isvisible, x, y }) =>
      isvisible &&
      css`
        transform: translate(${x / 1.5}px, ${y / 1.5}px) scale(0.8);
      `};
  }
`;

const ServiceCard = ({ isVisible }: { isVisible: boolean }) => {
  const items = [
    {
      label: "صندوق",
      x: -190,
      y: 10,
      icon: <CounselingIcon />,
      href: externalLinks.fund,
    },
    {
      label: "سبدگردان",
      x: -100,
      y: -100,
      icon: <BasketMakerIcon />,
      href: externalLinks.sabadPadash,
    },
    {
      label: "لیزینگ",
      x: 100,
      y: -100,
      icon: <LeasingIcon />,
      href: externalLinks.leasingInternal,
    },
    {
      label: "کارگزاری",
      x: 190,
      y: 10,
      icon: <CounselingIcon />,
      href: externalLinks.broker,
    },
  ];

  return (
    <Container>
      <MainCard ishovered={isVisible}>
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            isvisible={isVisible}
            x={item.x}
            y={item.y}
            className="w-20 h-20 rounded-full flex justify-center items-center text-center text-white font-bold cursor-pointer"
            onClick={() => window.open(item.href, "_blank")}
          >
            {item.icon}
            <div className="ml-[-7px]">{item.label}</div>
          </AnimatedItem>
        ))}
      </MainCard>
    </Container>
  );
};

export default ServiceCard;
