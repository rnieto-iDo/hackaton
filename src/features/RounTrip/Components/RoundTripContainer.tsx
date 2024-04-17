import RoundTripHeader from "./RoundTripHeader";
import { Button, Form, Input, Select, Space, DatePicker } from "antd";
import { useEffect, useState } from "react";
import "./style.css";
import RoundTripCounter from "./RoundTripCounter";

const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const getFields = () => {};

const RoundTripContainer = () => {
  const [form] = Form.useForm();
  const [adultCounter, setAdultCounter] = useState<number>(0);
  const [childCounter, setChildCounter] = useState<number>(0);
  const [petCounter, setPetCounter] = useState<number>(0);
  const [originValue, setOriginValue] = useState<string>("");
  const [arrayDates, setArrayDates] = useState([{ id: 1 }]);

  const onReset = () => {
    form.resetFields();
  };
  const onFinish = () => {
    // const date = form.getFieldsValue();
    // const { fecha } = date;
    // const originDate = fecha[0].$y;
    // console.log("origin date", originDate);

    console.log("form", form.getFieldsValue());

    form.resetFields();
  };

  const handleAddDestination = () => {
    const newId = arrayDates.length + 1;
    setArrayDates([...arrayDates, { id: newId }]);
  };

  useEffect(() => {
    console.log("aveeer");
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
        // setOriginValue(nearPlace.formatted_address);
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
          // setOriginValue(nearPlace.formatted_address);
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
      script.parentNode.removeChild(script);
    };
  }, [arrayDates]);
  console.log("origin", originValue);
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
        {arrayDates.map((item) => {
          return (
            <div key={item.id}>
              <Form.Item
                label={`Destino${item.id}`}
                rules={[{ required: true }]}>
                <input
                  className="search-google-maps"
                  type="text"
                  name={`destino${item.id}`}
                  autoComplete="on"
                  placeholder="Search Places"
                />
              </Form.Item>
              <Form.Item name={`fecha${item.id}`} label="Fecha">
                <RangePicker />
              </Form.Item>
            </div>
          );
        })}

        <Form.Item label="Info">
          <div className="flex flex-col gap-[16px]">
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
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <button onClick={() => handleAddDestination()}>Add destino</button>
    </div>
  );
};

export default RoundTripContainer;
