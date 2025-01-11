export const ServicesCard = ({ header, desc }) => {
  return (
    <div className="w-full h-[300px] bg-[#0D1826] flex flex-col px-6 justify-center gap-4">
      <h3 className="text-xl font-semibold">{header}</h3>
      <p className="font-light text-gray-400">{desc}</p>
    </div>
  );
};
