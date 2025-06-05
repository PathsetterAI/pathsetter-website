import React from "react";

const Features = () => {
  const cards = [
    {
      image: "",

      title: "Single-Source of Truth",
      subTitle: "Unify Your Project Data",
      description:
        "Every card becomes a live, structured source of truth-standardized, time-stamped, and visible across all roles. From clients to site engineers, everyone operates with the same data,eliminating silos and miscommunication.",
    },
    {
      image: "",
      title: "Full Traceability",
      subTitle: "Track Every Cost,Every Change,Every Owner.",
      description:
        "Each card carries embedded metadata for scope, budget, timeline and responsibilty-making it effortless to trace accountability and progress from initiation to closure",
    },
    {
      image: "",
      title: "Seamless Collaboration",
      subTitle: "Plan,Approve, and Update-Together",
      description:
        "Cards act as shared workspaces. Any update-whether it's a risk flag, material approval, or site progress-instantly reflects across all stakeholder views, keeping teams aligned in real time.",
    },
    {
      image: "",
      title: "Instant Change Orders",
      subTitle: "Adapt Without the Bottlenecks",
      description:
        "Alfred's modular card structure allows you to issue and approve change orders in minutes-not days. React to site realities swiftly, with full audit trails and automated stakeholder alerts.",
    },
    {
      image: "",
      title: "AI-Powered Orchestration",
      subTitle: "Let AI Drive Execution Intelligence",
      description:
        "Alfred doesn't just manage cards-it learns from them. Generate reports, predict risks, and surface critical insights automatically, enabling leaders to intervene early and lead proactively",
    },
  ];

  return (
    <div className="bg-black min-h-screen  py-5 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.slice(0, 3).map((card, idx) => (
          <div
            key={idx}
            className="border border-[#555555] bg-[#111111] p-6 flex flex-col items-start space-y-4"
          >
            <div className="w-full  mb-4" />
            <img src={card.image} />
            <h3 className="text-xl ">{card.title}</h3>
            <p className="text-[#555555]">{card.subTitle}</p>
            <p className="text-[#555555]">{card.description}</p>
            <button className="mt-4 border border-[#555555] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Learn more
            </button>
          </div>
        ))}
      </div>

      {/* Bottom 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:w-2/3 mx-auto">
        {cards.slice(3).map((card, idx) => (
          <div
            key={idx}
            className="border  border-[#555555] bg-[#111111] p-6 flex flex-col items-start space-y-4"
          >
            {/* <div className="w-full h-32 bg-[#1a1a1a] rounded mb-4" /> */}
            <img src={card.image} />
            <h3 className="text-xl">{card.title}</h3>
            <p className="text-gray-400">{card.subTitle}</p>
            <p className="text-gray-400">{card.description}</p>
            <button className="mt-4 border border-gray-600 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
