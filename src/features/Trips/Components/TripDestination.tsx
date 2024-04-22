import { Checkbox, Form } from "antd";
import { Hotel } from "../Utils/utils";
import { useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface TripDestination {
  destination: Hotel[];
  title: string;
  isOnSelection: boolean;
  type: string;
  nextTrip: boolean;
  handleSelectionType: (idHotel: number, type: string) => void;
  handleSelectedIds: (ids: number | Array<number>) => void;
  form: any;
}

const TripDestination = ({
  destination,
  title,
  isOnSelection,
  handleSelectedIds,
  type,
  handleSelectionType,
  form,
}: TripDestination) => {
  const [checkboxSelected, setCheckboxSelected] = useState<number | null>(null);

  const handleChangeOne = (e: CheckboxChangeEvent) => {
    const itemId = parseInt(e.target.value, 10);
    handleSelectionType(itemId, type);
    if (checkboxSelected === itemId) {
      setCheckboxSelected(null);
    } else {
      setCheckboxSelected(itemId);
      handleSelectedIds(itemId);
    }
  };

  const handleChange = (e: CheckboxChangeEvent) => {
    const itemId = parseInt(e.target.value, 10);
    handleSelectionType(itemId, type);

    console.log("itemId", itemId);
    setCheckboxSelected(itemId);

    handleSelectedIds(itemId);
  };

  return (
    <div>
      <h3 className="mb-[10px] text-[18px] text-themePrimary font-bold ml-2">
        {title}
      </h3>
      <div className="flex gap-x-[20px]  overflow-x-auto overflow-y-hidden p-2">
        {destination.map((item, index) => (
          <div key={index} className="relative  w-full h-full">
            <img
              className="min-w-[300px] min-h-[200px] rounded-[8px] object-contain"
              src={item.cover}></img>
            <h4 className="absolute text-themeOffwhite bottom-[10px] left-[10px] max-w-[100px] max-h-[20px] text-ellipsis overflow-hidden">
              {item.name}
            </h4>

            <Form className="absolute right-[10px] bottom-[-29px]" form={form}>
              {isOnSelection ? (
                <Form.Item name={`random${index}`} valuePropName="checked">
                  <Checkbox
                    // disabled={
                    //   checkboxSelected !== null && checkboxSelected !== item.id
                    // }

                    className="absolute bottom-[10px] right-0 text-themeOffwhite"
                    onChange={handleChangeOne}
                    checked={checkboxSelected === item.id}
                    value={item.id.toString()}></Checkbox>
                </Form.Item>
              ) : (
                <Form.Item
                  name={
                    type === "restaurants"
                      ? `restaurant${index}`
                      : `tours${index}`
                  }
                  valuePropName="checked">
                  <Checkbox
                    className="absolute bottom-[10px] right-0 text-themeOffwhite"
                    onChange={handleChange}
                    value={item.id.toString()}></Checkbox>
                </Form.Item>
              )}
            </Form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripDestination;
