import { Checkbox } from "antd";
import { Hotel } from "../Utils/utils";
import { useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface TripDestination {
  destination: Hotel[];
  title: string;
  isOnSelection: boolean;
  handleSelectedIds: (ids: number | Array<number>) => void;
}

const TripDestination = ({
  destination,
  title,
  isOnSelection,
  handleSelectedIds,
}: TripDestination) => {
  const [checkboxSelected, setCheckboxSelected] = useState<number | null>(null);

  const handleChangeOne = (e: CheckboxChangeEvent) => {
    const itemId = parseInt(e.target.value, 10);

    if (checkboxSelected === itemId) {
      setCheckboxSelected(null);
    } else {
      setCheckboxSelected(itemId);
      handleSelectedIds(itemId);
    }
  };

  const handleChange = (e: CheckboxChangeEvent) => {
    const itemId = parseInt(e.target.value, 10);
    console.log("itemId", itemId);

    handleSelectedIds(itemId);
  };

  return (
    <div>
      <h3 className="mb-[10px] text-[18px] text-themePrimary font-bold">
        {title}
      </h3>
      <div className="flex gap-x-[10px]">
        {destination.map((item, index) => (
          <div key={index} className="relative">
            <img className="w-full h-full" src={item.cover}></img>
            <h4 className="absolute text-themeOffwhite bottom-[10px] left-[10px]">
              {item.name}
            </h4>
            {isOnSelection ? (
              <Checkbox
                disabled={
                  checkboxSelected !== null && checkboxSelected !== item.id
                }
                className="absolute bottom-[10px] right-0 text-themeOffwhite"
                onChange={handleChangeOne}
                checked={checkboxSelected === item.id}
                value={item.id.toString()}>
                Select
              </Checkbox>
            ) : (
              <Checkbox
                className="absolute bottom-[10px] right-0 text-themeOffwhite"
                onChange={handleChange}
                value={item.id.toString()}>
                Select
              </Checkbox>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripDestination;
