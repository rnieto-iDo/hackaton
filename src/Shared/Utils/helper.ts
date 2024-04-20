import {
  WifiIcon,
  KitchenIcon,
  CarIcon,
  ShowerIcon,
  WorkingAreaIcon,
} from "../Assets/icons";

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
