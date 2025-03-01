import React from 'react';

const plans = [
  {
    name: "Basic",
    price: "Free Plan",
    description: "Perfect for individuals getting started.",
    features: [
      "Core features access",
      "Email support",
      "Monthly updates",
    ],
    buttonText: "Coming Soon",
    buttonDisabled: true,
  },
  {
    name: "Pro",
    price: "$6.99/mo",
    description: "Ideal for professionals and small teams.",
    features: [
      "Everything in Basic",
      "Priority support",
      "Advanced analytics",
      "Weekly updates",
    ],
    buttonText: "Coming Soon",
    buttonDisabled: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Tailored solutions for large organizations.",
    features: [
      "Custom solutions",
      "Dedicated account manager",
      "24/7 priority support",
      "On-demand updates",
    ],
    buttonText: "Contact Us",
    buttonDisabled: false,
  },
];

export default function SubscriptionPlans() {
  return (
      <div id="plans" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center text-[#0d3445] mb-6">
            Choose Your Plan
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Explore our subscription options to match your needs. Plans are launching soon!
          </p>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className="flex flex-col bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-center text-[#0d3445] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-center text-gray-500">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <p className="text-center text-3xl font-bold text-[#0d3445] mb-6">
                    {plan.price}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 text-gray-600 flex-1">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-[#0d3445]">✓</span>
                          <span>{feature}</span>
                        </li>
                    ))}
                  </ul>

                  {/* Button - Positioned at the bottom */}
                  <div className="text-center mt-auto">
                    <button
                        className={`w-full px-4 py-2 rounded-full font-semibold text-white ${
                            plan.buttonDisabled
                                ? "bg-[#0d3445] cursor-not-allowed animate-pulse"
                                : "bg-[#0d3445] hover:bg-[#0d3445]"
                        } transition-colors duration-300`}
                        disabled={plan.buttonDisabled}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
