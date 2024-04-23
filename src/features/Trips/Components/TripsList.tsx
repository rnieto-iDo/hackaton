import { useEffect, useState } from "react";
import { Proposal } from "../Utils/utils";
import TripDestination from "./TripDestination";
import { tripRequest } from "../Services";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

interface TripsListProps {
  data: Proposal[];
  proposal_id: string;
  trip_request_id: string;
  tripOrigin: string;
  tripChildren: number;
  tripPets: number;
  tripAdults: number;
}
const TripsList = ({
  proposal_id,
  data,
  trip_request_id,
  tripOrigin,
  tripChildren,
  tripPets,
  tripAdults,
}: TripsListProps) => {
  const [destinations, setDestinations] = useState<any>([]);
  const [hotelId, setHotelId] = useState<number | Array<number>>(0);
  const [restaurantIds, setRestaurantIds] = useState<number | Array<number>>(
    []
  );
  const [toursIds, setToursIds] = useState<number | Array<number>>([]);

  const [nextTrip, setNextTrip] = useState<boolean>(false);
  const [currentProposalIndex, setCurrentProposalIndex] = useState(0);
  const [buttons, setButtons] = useState<boolean>(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSetHotelId = (hotelId: number | Array<number>) => {
    setHotelId(hotelId);
  };

  useEffect(() => {
    console.log(hotelId);
    const dataFormattted = data.map((item) => {
      return {
        destination: item.city,
        arrival_date: item.arrival_date,
        departure_date: item.departure_date,
        hotel: 0,
        restaurant: [],
        tour: [],
      };
    });

    setDestinations(dataFormattted);
    if (data.length === 1) setButtons(true);
  }, []);

  const handleNextTrip = () => {
    setNextTrip(!nextTrip);
    form.resetFields();
    if (data.length === currentProposalIndex + 2) {
      setButtons(true);
      return;
    }
  };

  const handleSetRestaurantIds = (ids: number | number[]) => {
    if (Array.isArray(restaurantIds)) {
      setRestaurantIds([
        ...restaurantIds,
        ...(Array.isArray(ids) ? ids : [ids]),
      ]);
    } else {
      setRestaurantIds(Array.isArray(ids) ? ids : [ids]);
    }
  };

  const handleSetToursIds = (ids: number | number[]) => {
    if (Array.isArray(toursIds)) {
      setToursIds([...toursIds, ...(Array.isArray(ids) ? ids : [ids])]);
    } else {
      setToursIds(Array.isArray(ids) ? ids : [ids]);
    }
  };

  const handleSelectionType = (idHotel: number, type: string) => {
    const copy = [...destinations];
    console.log("type", type);
    switch (type) {
      case "hotels":
        let validateHotels = copy[currentProposalIndex].hotel;
        validateHotels === idHotel
          ? (copy[currentProposalIndex].hotel = 0)
          : (copy[currentProposalIndex].hotel = idHotel);

        break;
      case "restaurants":
        console.log("copy[currentProposalIndex]", copy[currentProposalIndex]);
        let validateRestau = copy[currentProposalIndex].restaurant;
        if (Array.isArray(validateRestau)) {
          validateRestau.includes(idHotel)
            ? (validateRestau = validateRestau.filter(
                (item) => item !== idHotel
              ))
            : validateRestau.push(idHotel);
        }
        console.log("validateRestau", validateRestau);
        copy[currentProposalIndex].restaurant = validateRestau;
        break;
      case "tours":
        let validateTours = copy[currentProposalIndex].tour;
        if (Array.isArray(validateTours)) {
          validateTours.includes(idHotel)
            ? (validateTours = validateTours.filter((item) => item !== idHotel))
            : validateTours.push(idHotel);
        }
        copy[currentProposalIndex].tour = validateTours;
        break;

      default:
        break;
    }

    setDestinations(copy);
  };

  const handleTripRequest = async () => {
    const finalDestinations = JSON.stringify(destinations);
    const data3 = {
      trip_request_id: trip_request_id,
      proposal_id: proposal_id,
      origin: tripOrigin,
      destinations: finalDestinations,
      adults: tripAdults,
      children: tripChildren,
      pets: tripPets,
    };

    const response: any = await tripRequest(data3);
    if (response.status === 200) {
      navigate(`/my-travels`);
    }
  };

  const goToNextProposal = () => {
    setCurrentProposalIndex((prevIndex) =>
      Math.min(data.length - 1, prevIndex + 1)
    );

    handleNextTrip();
  };

  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[24px]">{data[currentProposalIndex].city}</h2>

        <div className="flex flex-col gap-y-[70px]">
          <TripDestination
            isOnSelection={true}
            title="Selecciona Hotel"
            destination={data[currentProposalIndex].hotels}
            handleSelectedIds={handleSetHotelId}
            nextTrip={nextTrip}
            type="hotels"
            handleSelectionType={handleSelectionType}
            form={form}
          />

          {data[currentProposalIndex].restaurants.length > 0 && (
            <TripDestination
              isOnSelection={false}
              title="Selecciona Restaurante"
              destination={data[currentProposalIndex].restaurants}
              handleSelectedIds={handleSetRestaurantIds}
              nextTrip={nextTrip}
              type="restaurants"
              handleSelectionType={handleSelectionType}
              form={form}
            />
          )}

          {data[currentProposalIndex].tours.length > 0 && (
            <TripDestination
              isOnSelection={false}
              title="Selecciona Tours"
              destination={data[currentProposalIndex].tours}
              handleSelectedIds={handleSetToursIds}
              nextTrip={nextTrip}
              type="tours"
              handleSelectionType={handleSelectionType}
              form={form}
            />
          )}
        </div>
      </div>

      <div className="w-full flex justify-center mt-[10px]">
        {buttons ? (
          <button
            onClick={handleTripRequest}
            className="mt-[20px] bg-themePrimary text-themeOffwhite rounded-[4px] px-[10px] py-[4px]">
            Ordenar itinerario
          </button>
        ) : (
          <button
            className="mt-[20px] bg-themePrimary text-themeOffwhite rounded-[4px] px-[10px] py-[4px]"
            onClick={goToNextProposal}>
            Next proposal
          </button>
        )}
      </div>
    </div>
  );
};

export default TripsList;
