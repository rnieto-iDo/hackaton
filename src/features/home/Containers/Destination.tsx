import { useEffect } from "react";

import { PageLayout } from "../../../Shared/Containers/pageLayout";
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook";
import MasonryLayout from "../../../Shared/Components/MasonryLayout";
import { tagList } from "../../../Shared/Assets/mock";

import { DatePicker, Space } from "antd";
import {
  fetchSingleDestination,
  resetDestinationSelection,
} from "../../destinations/Slices/destinationsSlice";
import { useParams } from "react-router-dom";
import { Map } from "../../../Shared/Components/Map";
import { ICoordinate } from "../../../Shared/Utils/interfaces";
import { SectionLayout } from "../../../Shared/Components/SectionLayout";
import { Tag } from "../../../Shared/Components/Tag";
const { RangePicker } = DatePicker;

export const Destination = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const selectedDestination = useAppSelector(
    (state) => state.destinations.selectedDestination
  );
  const { gallery, city, location, description } = selectedDestination;

  const destinationLocation: ICoordinate = {
    latitude: Number(location.split(",")[0]),
    longitude: Number(location.split(",")[1]),
  };

  useEffect(() => {
    dispatch(fetchSingleDestination(id ?? "0"));

    return () => {
      dispatch(resetDestinationSelection());
    };
  }, []);

  return (
    <PageLayout pageName={selectedDestination.name}>
      {gallery && gallery.length > 0 && (
        <MasonryLayout
          images={gallery.slice(0, 6)}
          columnsConfig={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        />
      )}

      <SectionLayout containerClassName="mt-10 py-12 w-[60%] border-t border-solid border-[#DDD] font-onest text-pretty">
        <p className="py-3">{description}</p>
        <span className="font-semibold underline">Show more</span>
      </SectionLayout>

      <SectionLayout
        containerClassName="mt-10 py-12 w-[60%] border-t border-solid border-[#DDD]"
        titleClassName="text-[20px] font-semibold font-onest"
        title="What this place offers"
      >
        <div className="grid grid-cols-[repeat(2,minmax(200px,1fr))] gap-4 my-8">
          {tagList.slice(0, 8).map((tag, index) => (
            <Tag key={index} name={tag.name} icon={tag.icon} />
          ))}
        </div>
        {tagList.length > 8 && (
          <button className="px-4 py-2 border border-solid rounded-md font-onest">
            Show all {tagList.length} services
          </button>
        )}
      </SectionLayout>

      <SectionLayout
        containerClassName="mt-10 py-12 w-[60%] border-t border-solid border-[#DDD]"
        titleClassName="text-[20px] font-semibold font-onest"
        title={`How many nights in ${city}`}
      >
        <Space className="mt-8" direction="horizontal" size={16}>
          <RangePicker
            placement="bottomRight"
            variant="outlined"
            className="font-onest"
            size="large"
          />
        </Space>
      </SectionLayout>

      <SectionLayout
        containerClassName="mt-10 py-12 border-y border-solid border-[#DDD]"
        titleClassName="text-[20px] font-semibold font-onest"
        title="Where are you going to be"
      >
        <div className="mt-8">
          <Map
            latitude={destinationLocation.latitude}
            longitude={destinationLocation.longitude}
          />
        </div>
      </SectionLayout>
    </PageLayout>
  );
};
