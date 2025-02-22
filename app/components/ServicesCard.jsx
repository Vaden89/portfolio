export const ServicesCard = ({ header, desc }) => {
  return (
    <div className="w-full h-[300px] bg-[#0D1826] px-6 ">
      <div className="h-1/3 text-xl font-semibold flex flex-col justify-end mb-4">
        {header}
      </div>
      <div className="font-light text-gray-400">{desc}</div>
    </div>
  );
};
