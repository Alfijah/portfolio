import heroBg from "../assets/videoBg3.mp4";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="flex items-center justify-center w-screen h-screen overflow-hidden"
    >
      <div className="relative flex inset-0 items-center justify-center w-4/5">
        <video
          src={heroBg}
          autoPlay
          loop
          playsInline
          muted
          className="absolute max-w-none z-0"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* tekst container */}
        <div className="relative inset-0 flex flex-col items-center justify-center text-center text-white max-w-5xl px-6 sm:px-8 mx-auto gap-8">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl">
            &lt;dev Alfijah Sarban /&gt;
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium bg-blue-900/40 rounded-lg leading-relaxed">
            Welcome, traveler. You've discovered a portfolio unlike any other.
            Explore the interface below to learn more about the developer behind
            this journey.
          </p>
          <div className="flex gap-6 w-full h-12 items-center justify-center">
            <button className="bg-blue-900/40 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all cursor-pointer rounded-lg font-medium w-35 h-10 transition duration-200 hover:scale-110">
              Explore Data
            </button>
            <button className="bg-white text-blue-900 outline-2 outline-offset-2 outline-white hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] cursor-pointer rounded-lg w-35 h-10 transition duration-200 hover:scale-110">
              View Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
