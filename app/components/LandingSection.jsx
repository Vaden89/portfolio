export const LandingSection = () => {
  return (
    <section className="w-full px-6 py-4 flex flex-col gap-6">
      <div className="text-3xl lg:text-5xl font-bold text-white ">
        <h1>Hi, I&apos;m Isaac 👋🏽</h1>
        <span>
          A Front-end Dev & <br className="lg:hidden" /> Friend.
        </span>
      </div>
      <div className="flex flex-col gap-3 text-sm text-gray-400 leading-6 opacity-70">
        <p>
          I love bringing designs to life on the web. With a strong foundation
          in HTML, CSS, and JavaScript, I use modern frameworks like React, or
          Nextjs to create websites that are not only visually stunning but also
          user-friendly and responsive and convey complex ideas.
        </p>
        {/* <p>
          I&apos;m always eager to learn new things and stay up-to-date with the
          latest web development trends. Whether it&apos;s experimenting with
          new technologies or collaborating with talented teams, I&apos;m driven
          to create exceptional digital experiences. Let&apos;s build something
          amazing together!
        </p> */}
      </div>

      <div className="flex items-center text-center gap-4 text-white">
        <span className=" h-3 w-3 rounded-full bg-[#6200ea] glow-button"></span>
        <span>
          Listening to{" "}
          <span className="underline underline-offset-4">Asake</span>
        </span>
      </div>
    </section>
  );
};
