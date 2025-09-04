import React, { useState } from "react";
import Source from "../assets/Images/FeaturesDesigns/SingleSource.svg";
import Seamless from "../assets/Images/FeaturesDesigns/SeamlessCollaboration.svg";
import Traceability from "../assets/Images/FeaturesDesigns/FullTraceability.svg";
import AiPowered from "../assets/Images/FeaturesDesigns/AiPowered.svg";
import InstantChange from "../assets/Images/FeaturesDesigns/InstantChange.svg";


const Graphs = () => {

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDescription = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const cards = [
    {
      image: Source,
      title: "Single-Source of Truth",
      subTitle: "Unify Your Project Data",
      description:
        "Every piece of information lives in one authoritative location.",
    },
    {
      image: Traceability,
      title: "Full Traceability",
      subTitle: "Track Every Cost, Every Change.",
      description:
        "Embedded metadata and audit trails track every change and decision.",
    },
    {
      image: Seamless,
      title: "Seamless Collaboration",
      subTitle: "Plan, Approve, and Update—Together.",
      description:
        "Shared workspaces keep teams aligned in real-time.",
    },
    {
      image: InstantChange,
      title: "Instant Change Orders",
      subTitle: "Adapt Without the Bottlenecks",
      description:
        "Modular structure enables rapid approvals and updates.",
    },
    {
      image: AiPowered,
      title: "AI-Powered Orchestration",
      subTitle: "Let AI Drive Execution Intelligence",
      description:
        "Intelligence learns from patterns to predict risks and surface insights",
    },
  ];

  const renderCard = (card, idx) => {
    const isOpen = openIndexes.includes(idx);

    return (
      <div
        key={idx}
        className="relative border border-[#555555] bg-[#111111] p-4 flex flex-col justify-between h-[400px] rounded-lg overflow-hidden"
      >
        {/* The "Light Bright" Effect at the top */}
        {/* Increased height (e.g., h-16) and used a top-to-bottom gradient with transparent stops */}
        <div
          className={`absolute top-0 left-0 right-0 h-16 // Increased height for a more diffused glow (64px)
            bg-gradient-to-b from-[rgba(255,255,255,0.3)] via-[rgba(247,247,247,0.1)] to-transparent
            transition-opacity duration-300 ease-in-out rounded-t-lg
            ${isOpen ? "opacity-100" : "opacity-0"}`}
        ></div>

        <div className="overflow-hidden h-full transition-all duration-500 ease-in-out">
          {/* Main content div that slides up/down */}
          <div
            className={`transition-transform duration-500 ease-in-out ${
              isOpen ? "-translate-y-[160px]" : "translate-y-0"
            }`}
          >
            {/* Image */}
            <div>
              <div className="flex flex-row w-full items-center justify-center">
                <img src={card.image} alt="Images" />
              </div>

              {/* Title when closed */}
              <h3
                className={`text-xl  items-start text-white transition-all duration-500 ease-in-out ${
                  !isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                {card.title}
              </h3>

              {/* Subtitle when closed */}
              <p
                className={`text-[#888888] items-start transition-all duration-500 ease-in-out delay-100 ${
                  !isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                {card.subTitle}
              </p>
            </div>

            {/* Description content when open */}
            <div
              className={`text-gray-400 text-sm text-left transition-all duration-500 ease-in-out delay-200 ${
                isOpen
                  ? "opacity-100 h-auto translate-x-0"
                  : "opacity-0 h-0 -translate-x-full"
              }`}
            >
              <p className={`text-[#E2E8F0] text-xl text-left `}>
                {card.title}
              </p>
              <p className="text-[#9CA3AF] text-left text-md ">{card.subTitle}</p>
              <p className="leading-6 pt-1">{card.description}</p>
            </div>
          </div>
        </div>

        {/* Learn More / Hide Button */}
        <div className="pt-4 ">
          <button
            onClick={() => toggleDescription(idx)}
            className="border border-gray-600 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            {isOpen ? "Hide" : "Learn more"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black min-h-screen py-10 text-white px-4">
      {/* First row: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.slice(0, 3).map(renderCard)}
      </div>

      {/* Second row: 2 cards aligned left */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:w-2/3 items-start">
        {cards.slice(3, 5).map((card, i) => renderCard(card, i + 3))}
      </div>
    </div>
  );
};
export default Graphs