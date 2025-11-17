import { useState } from "react";
import abstractBg from "../assets/moon2.png";

type TabKey = "biography" | "hobbies" | "food" | "family";

export default function PersonalSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("biography");

  const content = {
    biography:
      "Born under the digital stars, Alfijah has always had a passion for creating immersive worlds through code and design.",
    hobbies:
      "When not behind the keyboard, Alfijah enjoys photography, gaming, and exploring new cafes around the city.",
    food: "Favorite meals include sushi, ramen, and anything spicy. Favorite spots? A quiet beach café or a neon-lit ramen bar.",
    family:
      "Family means support and balance — a reminder of where passion and perseverance come from.",
  };

  return (
    <section
      id="personal"
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-black pt-40"
    >
      {/* Scherm-container */}
      <div className="relative w-11/12 sm:w-4/5 md:w-3/5 h-[500px] bg-black/40 border-1 rounded-2xl border-white/30 overflow-hidden -mt-52">
        {/* Achtergrondafbeelding achter het scherm */}
        <img
          src={abstractBg}
          alt="Screen background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl"></div>

        {/* Tekstgedeelte */}
        <div className="relative z-20 flex-1 p-8 text-center text-white flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 text-blue-400 drop-shadow-lg">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            {content[activeTab]}
          </p>
        </div>

        {/* Buttons onderaan */}
        <div className="absolute bottom-0 w-full flex justify-around sm:justify-center sm:gap-8 p-4 bg-blue-900/30 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("biography")}
            className={`px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors ${
              activeTab === "biography"
                ? "bg-teal-400 text-black"
                : "text-white hover:text-teal-300"
            }`}
          >
            Biography
          </button>
          <button
            onClick={() => setActiveTab("hobbies")}
            className={`px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors ${
              activeTab === "hobbies"
                ? "bg-teal-400 text-black"
                : "text-white hover:text-teal-300"
            }`}
          >
            Hobby’s
          </button>
          <button
            onClick={() => setActiveTab("food")}
            className={`px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors ${
              activeTab === "food"
                ? "bg-teal-400 text-black"
                : "text-white hover:text-teal-300"
            }`}
          >
            Favorite food & places
          </button>
          <button
            onClick={() => setActiveTab("family")}
            className={`px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors ${
              activeTab === "family"
                ? "bg-teal-400 text-black"
                : "text-white hover:text-teal-300"
            }`}
          >
            Family
          </button>
        </div>
      </div>
    </section>
  );
}
