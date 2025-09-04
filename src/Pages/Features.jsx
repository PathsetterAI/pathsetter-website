import React, { useState } from "react";
import smartproj from "../../src/assets/Images/smartproj.png"
import automate from "../../src/assets/Images/automatedRepo.png"
import commandceter from "../../src/assets/Images/commandcenter.png"
import intelligent from "../../src/assets/Images/intelligent.png"

const tabs = [
  {
    id: "setup",
    title: "Smart Project Setup",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#EDF5FC]">
            From Contract to Launch in Minutes
          </h2>
          <ul className="list-disc pl-4 text-sm space-y-2 text-[#AEB4BA]">
            <li>
              Upload your contract, chat with Alfred AI, and watch your project structure itself
            </li>
            <li>
              Intelligent Q&amp;A extracts key details and creates your setup checklist automatically
            </li>
            <li>
              Generate work packages and project assets as editable drafts before going live
            </li>
            <li>
              Skip what you don’t know—Alfred creates placeholders you can fill later
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={smartproj}
            alt="Smart Project Setup"
            className="rounded-lg shadow-lg border border-[#444]"
          />
        </div>
      </div>
    ),
  },
  {
    id: "dashboard",
    title: "Command Center Dashboard",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#EDF5FC]">
            Your Project's Mission Control
          </h2>
          <ul className="list-disc pl-4 text-sm space-y-2 text-[#AEB4BA]">
            <li>Real-time oversight of all project sites and KPIs in one unified view</li>
            <li>
              Drill down from high-level sites → sub-projects → individual assets → detailed tasks
            </li>
            <li>AI-powered search bar for instant project intelligence</li>
            <li>Smart notifications for risks, updates, and RFIs that need your attention</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={automate}
            alt="Command Center Dashboard"
            className="rounded-lg shadow-lg border border-[#444]"
          />
        </div>
      </div>
    ),
  },
  {
    id: "communication",
    title: "Intelligent Communication Hub",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#EDF5FC]">
            Never Miss What Matters
          </h2>
          <ul className="list-disc pl-4 text-sm space-y-2 text-[#AEB4BA]">
            <li>
              AI automatically categorizes every message: risks, RFIs, updates, decisions, compliance
            </li>
            <li>Detects conflicting data across sources and prompts resolution</li>
            <li>One-click task updates when progress comes in via email or chat</li>
            <li>Manual override keeps you in control while AI learns from your corrections</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={automate}
            alt="Intelligent Communication Hub"
            className="rounded-lg shadow-lg border border-[#444]"
          />
        </div>
      </div>
    ),
  },
  {
    id: "reporting",
    title: "Automated Reporting",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#EDF5FC]">
            Professional Reports, Zero Manual Work
          </h2>
          <ul className="list-disc pl-4 space-y-2 text-sm text-[#AEB4BA]">
            <li>Choose templates or create custom reports through conversation with Alfred</li>
            <li>AI pulls latest KPIs, synthesizes risks, and drafts professional documents</li>
            <li>Every data point links back to its source for instant verification</li>
            <li>Export to Word/PDF or share within the platform</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={automate}
            alt="Automated Reporting"
            className="rounded-lg shadow-lg border border-[#444]"
          />
        </div>
      </div>
    ),
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState("setup");

  return (
    <div className=" min-h-screen  py-12">
      {/* Heading */}
      <div className="text-white mb-12">
        <p className="uppercase text-[#B5C0C9] text-lg mb-2">features</p>
        <h1 className="text-3xl text-[#EDF5FC]">
          Alfred is your AI Project Manager: 10x your project teams output with Alfred
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 rounded-full text-white  transition-all
              ${
                activeTab === tab.id
                  ? "border-2 border-transparent"
                  : "border border-[#555] hover:border-[#777]"
              }`}
            style={
              activeTab === tab.id
                ? {
                    backgroundImage:
                      "linear-gradient(#323434, #323434), linear-gradient(to right, #6462D7, #A6EBC9)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }
                : {}
            }
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className=" p-6 rounded-2xl shadow-lg text-white">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Features;
