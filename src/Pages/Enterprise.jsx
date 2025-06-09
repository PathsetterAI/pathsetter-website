import React from "react";

import EffortlessOnboarding from "../Components/svg/EnterpriseSvg/EffortlessOnboarding";
import EnterpriseGradeSecurity from "../Components/svg/EnterpriseSvg/EnterpriseGradeSecurity";
import ResponsibleAI from "../Components/svg/EnterpriseSvg/ResponsibleAI";
import MLIntelligence from "../Components/svg/EnterpriseSvg/MLIntelligence";
import RoleAccessControl from "../Components/svg/EnterpriseSvg/RoleAccessControl";

const features = [
  {
    icon: <EffortlessOnboarding />,
    title: "Effortless Onboarding",
    subtitle: "Start Fast. Deliver Faster.",
    description:
      "From your first login, Alfred aligns with your project structure and roles. Our AI-assisted onboarding and templates card systems get your teams productive from Day One—with zero disruption to existing workflows.",
  },
  {
    icon: <EnterpriseGradeSecurity />,
    title: "Enterprise-Grade Security",
    subtitle: "Built for Critical Infrastructure",
    description:
      "Data encryption, role-based access, and audit trails ensure your project information is secure, compliant, and always under your control—whether hosted on cloud or hybrid.",
  },
  {
    icon: <ResponsibleAI />,
    title: "Responsible AI",
    subtitle: "Explainable. Transparent. Human-in-the-Loop",
    description:
      "Every AI insight—from risk predictions to summaries—comes with traceable logic. Alfred empowers your teams, never overrides them—ensuring AI augments judgment, not replaces it.",
  },
  {
    icon: <MLIntelligence />,
    title: "Built for AI/ML Intelligence",
    subtitle: "Learn From Every Project. Improve Every Decision",
    description:
      "Alfred continuously learns from task progress, delays, and outcomes across projects. Use ML to uncover bottlenecks, benchmark timelines, and refine project strategy with precision.",
  },
  {
    icon: <RoleAccessControl />,
    title: "Role-Based Access & Version Control",
    subtitle: "Govern with Confidence. Work Without Conflict.",
    description:
      "Fine-grained access rules and card-level versioning ensure the right people see the right data at the right time—enabling distributed teams to work safely and in sync.",
  },
  {
    icon: <ResponsibleAI />,
    title: "Ready to Integrate (Coming Soon)",
    subtitle: "No More Tool Fragmentation",
    description:
      "Alfred is designed for seamless API-based interoperability with tools like MS Project, Primavera, and Autodesk—ensuring your ecosystem stays connected and collaborative.",
  },
];

const Enterprise = () => {
  return (
    <section className="bg-black  py-20 text-white">
      <h2 className="text-sm tracking-widest mb-12 text-gray-400">ENTERPRISE READY</h2>
      <div className="grid grid-cols-1 leading-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div key={index} className="space-y-2 border-l   border-gray-700 pl-8">
            <div className="text-white">{item.icon}</div>
            <h3 className="font-semibold pt-8 text-lg">{item.title}</h3>
            <h4 className="text-sm text-gray-400 font-medium">{item.subtitle}</h4>
            <p className="text-sm pt-2 text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Enterprise;
