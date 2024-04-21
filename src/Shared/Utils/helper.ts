import {
  WifiIcon,
  KitchenIcon,
  CarIcon,
  ShowerIcon,
  WorkingAreaIcon,
} from "../../assets/icons";

export const iconSelector = (icon: string) => {
  switch (icon) {
    case "wifi":
      return WifiIcon;
    case "kitchen":
      return KitchenIcon;
    case "car":
    case "valet parking":
      return CarIcon;
    case "shower":
      return ShowerIcon;
    case "working area":
      return WorkingAreaIcon;
    default:
      return WifiIcon;
  }
};

export const capitalizeFirstLetter = (text: string | null): string | null => {
  if (text && typeof text === "string") {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
};

export const trimPunctuation = (text: string): string => {
  return text.replace(/^['".]+|['".]+$/g, "").trim();
};
