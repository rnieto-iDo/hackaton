const RoundTripHeader = () => {
  return (
    <div className="w-full flex justify-center mb-[20px]">
      <div className="flex items-center gap-x-[8px] text-[0.75rem] font-semibold text-[#001A66]">
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
        <p className="text-[16px] text-themeText">Destinos</p>
      </div>
    </div>
  );
};

export default RoundTripHeader;
