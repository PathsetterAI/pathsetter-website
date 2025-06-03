import React from 'react'

const Features = () => {
   const cards = [
    {
      title: "Single-source of truth",
      description: "Cards are a fundamental unit of work packages.",
    },
    {
      title: "Traceability",
      description: "Each card is marked by costs, scope, schedule and owner. Trace cards from start to finish",
    },
    {
      title: "Collaborate",
      description: "Cards enable users to streamline planning and approvals with updates that proliferate across all stakeholders",
    },
    {
      title: "Change Orders",
      description: "Cards are modular and change orders and pertinent approvals can be done super fast",
    },
    {
      title: "AI-powered",
      description: "Use AI to generate reports across cards, predict risks and communicate seamlessly across stakeholders",
    },
  ];

  return (
    <div className="bg-black min-h-screen  py-10 text-white">
    

      <div className="grid grid-cols-1 md:grid-cols-3 px-40 gap-8">
        {cards.slice(0, 3).map((card, idx) => (
          <div
            key={idx}
            className="border border-[#555555] bg-[#111111] p-6 flex flex-col items-start space-y-4"
          >
            <div className="w-full h-32 bg-[#1a1a1a] rounded-lg mb-4" /> {/* Placeholder Image */}
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-[#555555]">{card.description}</p>
            <button className="mt-4 border border-[#555555] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Learn more
            </button>
          </div>
        ))}
      </div>

      {/* Bottom 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:w-2/3 px-28 mx-auto">
        {cards.slice(3).map((card, idx) => (
          <div
            key={idx}
            className="border  border-[#555555] bg-[#111111] p-6 flex flex-col items-start space-y-4"
          >
            <div className="w-full h-32 bg-[#1a1a1a] rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{card.title}</h3>
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

export default Features