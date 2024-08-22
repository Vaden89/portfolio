export const LandingSection = () => {
  return (
    <section className="w-full px-6 py-4 flex flex-col gap-6">
      <div className="text-3xl font-bold">
        <h1>Hi, I&apos;m Isaac 👋🏽</h1>
        <span>
          A Front-end Dev & <br /> Friend.
        </span>
      </div>
      <p className=" font-semibold text-gray-400 opacity-70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        blanditiis.
      </p>

      <div className="flex items-center text-center gap-4">
        <span className=" h-3 w-3 rounded-full bg-[#6200ea] glow-button"></span>
        <span>Listening to Odumodu</span>
      </div>
    </section>
  );
};
