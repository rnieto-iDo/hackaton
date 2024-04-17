interface RoundTripsCounterProps {
  counter: number;
  title: string;
  description?: string;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
const RoundTripCounter = ({
  title,
  counter,
  description,
  setCounter,
}: RoundTripsCounterProps) => {
  const handleIncrement = (e) => {
    setCounter(counter + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <div className="flex w-full justify-between items-center">
      <div className="">
        <p>{title}</p>
        {description && <p>{description}</p>}
      </div>
      <div className="flex gap-[16px] items-center">
        <button
          type="button"
          onClick={() => handleIncrement()}
          className="border-[1px] border-solid border-[#646464] rounded-[50%] w-[25px] h-[25px] cursor-pointer">
          +
        </button>
        <span>{counter}</span>
        <button
          type="button"
          onClick={() => handleDecrement()}
          className="border-[1px] border-solid border-[#646464] rounded-[50%] w-[25px] h-[25px] cursor-pointer">
          -
        </button>
      </div>
    </div>
  );
};

export default RoundTripCounter;
