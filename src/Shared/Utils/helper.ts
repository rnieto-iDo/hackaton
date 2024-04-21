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

export const calculateDaysDifference = (
  dates: string[]
): {
  daysDifference: number;
  minDate: string;
  maxDate: string;
} => {
  if (dates.length < 2) {
    return { daysDifference: 0, minDate: "", maxDate: "" };
  }

  const dateObjects = dates.map((date) => new Date(date));
  let minDate = new Date(
    Math.min(...dateObjects.map((date) => date.getTime()))
  );
  let maxDate = new Date(
    Math.max(...dateObjects.map((date) => date.getTime()))
  );

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (maxDate.getTime() - minDate.getTime()) / millisecondsPerDay
  );

  return {
    daysDifference: daysDifference,
    minDate: minDate.toISOString().slice(0, 10),
    maxDate: maxDate.toISOString().slice(0, 10),
  };
};
