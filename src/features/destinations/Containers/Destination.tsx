import { useEffect } from "react";

import { PageLayout } from "../../../Shared/Containers/pageLayout"
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook"
import MasonryLayout from "../../../Shared/Components/MasonryLayout";
import { tagList } from "../../../Shared/Assets/mock";
import { iconSelector } from "../../../Shared/Utils/helper";

import { DatePicker, Space } from 'antd';
import { fetchSingleDestination, resetDestinationSelection } from "../Slices/destinationsSlice";
import { useParams } from "react-router-dom";
const { RangePicker } = DatePicker;

export const Destination = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const selectedDestination = useAppSelector((state) => state.destinations.selectedDestination)
    const { gallery, city } = selectedDestination

    useEffect(() => {
        dispatch(fetchSingleDestination(id ?? "0"))

        return () => {
            dispatch(resetDestinationSelection())
        }
    }, []);

    return (
        <PageLayout pageName={selectedDestination.name}>
            {
                gallery && gallery.length > 0 &&
                <MasonryLayout images={gallery.slice(0, 6)} columnsConfig={{ xs: 1, sm: 2, md: 3, lg: 3 }} />
            }

            <div className="mt-10 py-12 w-[60%] border-t border-solid border-[#DDD] font-onest text-pretty">
                <p className="py-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, dolorem unde officia recusandae dicta deserunt animi aut nobis ad, optio distinctio iste nesciunt, accusantium a ut quo ex possimus perspiciatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit saepe nihil pariatur ad incidunt fugiat commodi voluptatum itaque ratione, deserunt reprehenderit nesciunt provident quo in vel magni eaque dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur numquam quae necessitatibus, voluptas sapiente corrupti esse id eaque quas delectus nulla, nobis dolor minus autem totam eligendi vel soluta.
                </p>
                <span className="font-semibold underline">Show more</span>
            </div>

            <div className="mt-10 py-12 w-[60%] border-t border-solid border-[#DDD]">
                <h1 className="text-[20px] font-semibold font-onest">What this place offers</h1>
                <section className="grid grid-cols-[repeat(2,minmax(200px,1fr))] gap-4 my-8">
                    {
                        tagList.slice(0, 8).map((tag, index) => (
                            <div key={index} className="flex items-center gap-3 mt-2">
                                <i>
                                    {
                                        iconSelector(tag.icon)()
                                    }
                                </i>
                                <span className="text-gray-600 font-onest">{tag.title}</span>
                            </div>
                        ))
                    }
                </section>
                {
                    tagList.length > 8 &&
                    <button className="px-4 py-2 border border-solid rounded-md font-onest">Show all {tagList.length} services</button>
                }
            </div>

            <div className="mt-10 py-12 w-[60%] border-t border-solid border-[#DDD]">
                <h1 className="text-[20px] font-semibold font-onest">How many nights in {city}</h1>
                <Space className="mt-8" direction="horizontal" size={16}>
                    <RangePicker
                        placement="bottomRight"
                        variant="outlined"
                        className="font-onest"
                        size="large"
                    />
                </Space>
            </div>

            <div className="mt-10 py-12 border-y border-solid border-[#DDD]">
                <h1 className="text-[20px] font-semibold font-onest">Where are you going to be</h1>
                <div className="mt-8">
                    <iframe
                        allowFullScreen
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.468929768056!2d-73.98512268459725!3d40.74881797932742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f8d2f0b45d%3A0x9c1c2d8e4e4b6b0e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sbd!4v1630365792164!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                    />
                </div>
            </div>

        </PageLayout>
    )
}

