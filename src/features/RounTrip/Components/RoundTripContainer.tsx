import RoundTripHeader from "./RoundTripHeader";
import { Button, Form, DatePicker } from "antd";
import { useEffect, useState } from "react";
import "./style.css";
import RoundTripCounter from "./RoundTripCounter";

import { handleSaveInfo, handleSaveRoundTrip } from "../Slice/roundTripSlice";
import { useAppDispatch } from "../../../Shared/App/hook";
import { roundTrip2 } from "../Services";
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface Destinations {
  destination: string;
  arrival_date: string;
  departure_date: string;
}
declare global {
  interface Window {
    initMap: (() => void) | null;
  }
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: any;
        };
      };
    };
  }
}

const RoundTripContainer = () => {
  const [form] = Form.useForm();
  const [adultCounter, setAdultCounter] = useState<number>(1);
  const [childCounter, setChildCounter] = useState<number>(0);
  const [petCounter, setPetCounter] = useState<number>(0);
  const [originValue, setOriginValue] = useState<string>("");
  const [arrayDates, setArrayDates] = useState([{ id: 1 }]);
  const [destinations, setDestinations] = useState<Destinations[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async () => {
    const dates = form.getFieldsValue();
    console.log(dates);

    const arrayDates: any = Object.entries(dates).map(([key, value]) => ({
      [key]: value,
    }));

    const destinationsDates = destinations.map((item, index) => {
      const fechaName = `fecha${index + 1}`;

      const arrival_date = `${arrayDates[index][fechaName][0].$y}-${arrayDates[index][fechaName][0].$M}-${arrayDates[index][fechaName][0].$D}`;
      const end_date = `${arrayDates[index][fechaName][1].$y}-${arrayDates[index][fechaName][1].$M}-${arrayDates[index][fechaName][1].$D}`;
      return {
        destination: item.destination,
        arrival_date: arrival_date,
        departure_date: end_date,
      };
    });
    console.log("destinationsDates", destinationsDates);

    console.log("origin value format", originValue);
    const data = {
      adults: adultCounter,
      children: childCounter,
      pets: petCounter,
      origin: originValue,
      destination: JSON.stringify(destinationsDates),
    };

    dispatch(
      handleSaveInfo({
        adults: adultCounter,
        children: childCounter,
        origin: originValue,
        pets: petCounter,
      })
    );

    // await dispatch(roundTrip(data));
    const response: any = await roundTrip2(data);
    console.log("response", response.data);

    if (response.status === 200) {
      dispatch(handleSaveRoundTrip(response.data));
      navigate(`/roundTrip/${response.data.trip_request_id}/trip`);
    }

    form.resetFields();
  };

  const handleAddDestination = () => {
    const newId = arrayDates.length + 1;
    setArrayDates([...arrayDates, { id: newId }]);
  };

  const handleRemoveDestination = (index: number) => {
    const newArray = [...arrayDates]; // Create a copy of the array
    newArray.splice(index, 1); // Remove 1 element at the specified index
    setArrayDates(newArray); // Update the state with the new array
  };

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9IZmZAdQmrdduQpT2UlWa5mPs9Skr-yk&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    window.initMap = () => {
      const searchInput = document.querySelector('input[name="origin"]');
      const autocomplete = new window.google.maps.places.Autocomplete(
        searchInput,
        {
          types: ["geocode"],
          componentRestrictions: { country: ["ni", "cr"] },
        }
      );
      autocomplete.addListener("place_changed", () => {
        const nearPlace = autocomplete.getPlace();
        console.log(nearPlace);
        setOriginValue(nearPlace.formatted_address);
      });

      arrayDates.forEach((element) => {
        const searchInput = document.querySelector(
          `input[name="destino${element.id}"]`
        );
        const autocomplete = new window.google.maps.places.Autocomplete(
          searchInput,
          {
            types: ["geocode"],
            componentRestrictions: { country: ["ni", "cr"] },
          }
        );
        autocomplete.addListener("place_changed", () => {
          const nearPlace = autocomplete.getPlace();
          console.log(nearPlace);
          setDestinations((prevDestinations) => [
            ...prevDestinations,
            {
              destination: nearPlace.formatted_address,
              arrival_date: "test",
              departure_date: "test",
            },
          ]);
        });
      });
    };

    loadScript();

    // Cleanup
    return () => {
      window.initMap = null;
      const script = document.querySelector(
        'script[src^="https://maps.googleapis.com/maps/api/js"]'
      );

      script?.parentNode!.removeChild(script);
    };
  }, [arrayDates]);

  return (
    <div>
      <RoundTripHeader />

      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}>
        <Form.Item label="Desde" rules={[{ required: true }]}>
          <input
            className="search-google-maps"
            type="text"
            name="origin"
            autoComplete="on"
            placeholder="Search Places"
          />
        </Form.Item>
        <div className="flex flex-col gap-y-[40px]">
          {arrayDates.map((item, index: number) => {
            return (
              <div key={item.id} className="">
                <Form.Item
                  className="input-delete"
                  label={`Destino ${item.id}`}
                  rules={[{ required: true }]}>
                  <input
                    className="search-google-maps"
                    type="text"
                    name={`destino${item.id}`}
                    autoComplete="on"
                    placeholder="Search Places"
                  />

                  {index >= 1 && (
                    <button
                      className=""
                      onClick={() => handleRemoveDestination(index)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </Form.Item>
                <Form.Item name={`fecha${item.id}`} label="Fecha">
                  <RangePicker />
                </Form.Item>
              </div>
            );
          })}
        </div>

        <Form.Item label="Pasajeros">
          <div className="flex flex-col p-[16px] gap-[16px] bg-themeOffwhite rounded-[6px]">
            <RoundTripCounter
              counter={adultCounter}
              title="Adultos"
              description="13 años o mas"
              setCounter={setAdultCounter}
            />
            <RoundTripCounter
              counter={childCounter}
              title="Niños"
              description="De 0 a 12 años"
              setCounter={setChildCounter}
            />
            <RoundTripCounter
              counter={petCounter}
              title="Mascotas"
              setCounter={setPetCounter}
            />
          </div>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="default"
            className="mt-[10px] flex gap-x-[4px] items-center bg-themePrimary text-themeOffwhite rounded-[4px] px-[10px] py-[4px]"
            onClick={() => handleAddDestination()}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </span>
            Add destino
          </Button>
        </Form.Item>

        <Form.Item className="test " {...tailLayout}>
          <Button
            className="flex gap-x-[4px] items-center"
            type="primary"
            htmlType="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-plane-arrival">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15.157 11.81l4.83 1.295a2 2 0 1 1 -1.036 3.863l-14.489 -3.882l-1.345 -6.572l2.898 .776l1.414 2.45l2.898 .776l-.12 -7.279l2.898 .777l2.052 7.797z" />
              <path d="M3 21h18" />
            </svg>
            Buscar Propuestas
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RoundTripContainer;
