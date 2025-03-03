import { StaticImageData } from "next/image";
import { JSX } from "react";

export interface IFundInfo {
  calcDate: string;
  fundCapital: number;
  purchaseNav: number;
  saleNav: number;
  fundNavId: number;
  issuedUnit: number;
  revokedUnit: number;
  statisticNav: number;
}

export interface IFundList {
  fund: {
    id: number;
    title: string;
    shortTitle: string;
    fundType: number;
    monthlyProfit: number;
    yearlyProfit: number;
    dsCode: number;
  };
  fundInfo: IFundInfo[];
  fundtype: {
    id: number;
    title: string;
  };
}

export interface ITab {
  id: number;
  title: string;
  tabName: string;
  component: JSX.Element;
}

export interface IFundDetails {
  shortDesc: string;
  desc: string;
  links: string;
  images: StaticImageData;
}
