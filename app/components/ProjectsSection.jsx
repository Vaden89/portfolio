export const ProjectSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-xl font-semibold">PROJECTS</h1>
        <p className="text-gray-500">
          Here are some projects I have worked on...
        </p>
      </div>
      <div className="w-full flex items-center h-fit overflow-x-auto gap-6">
        <div className="w-full min-w-[100%] flex flex-col bg-[#ffb345] rounded-2xl h-[45vh] p-5 text-white gap-2">
          <h1 className="text-lg font-semibold">Project Title</h1>
          <div className="flex w-full h-[50%] bg-white text-black items-center justify-center text-2xl">
            Image
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quia recusandae quas aperiam unde ullam nulla repellat? Laudantium
            sapiente, aliquid delectus ab sunt quo aut, quidem voluptatem,
            dolores dolorem minima id quisquam.
          </p>
        </div>
        <div className="w-full min-w-[95%] flex flex-col bg-black rounded-2xl h-[45vh] p-5 text-white gap-2">
          <h1 className="text-lg font-semibold">Project Title</h1>
          <div className="flex w-full h-[50%] bg-white text-black items-center justify-center text-2xl">
            Image
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quia recusandae quas aperiam unde ullam nulla repellat? Laudantium
            sapiente, aliquid delectus ab sunt quo aut, quidem voluptatem,
            dolores dolorem minima id quisquam.
          </p>
        </div>
        <div className="w-full min-w-[95%] flex flex-col bg-black rounded-2xl h-[45vh] p-5 text-white gap-2">
          <h1 className="text-lg font-semibold">Project Title</h1>
          <div className="flex w-full h-[50%] bg-white text-black items-center justify-center text-2xl">
            Image
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quia recusandae quas aperiam unde ullam nulla repellat? Laudantium
            sapiente, aliquid delectus ab sunt quo aut, quidem voluptatem,
            dolores dolorem minima id quisquam.
          </p>
        </div>
      </div>
    </section>
  );
};
