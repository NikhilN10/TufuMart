const WTCU = () => {
  const features = [
    {
      title: "Trust-Based Partnership",
      description:
        "We operate with transparency, reliability, and your long-term success in mind.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      textColor: "text-white",
    },
    {
      title: "Customized Fulfillment",
      description: "Tailored solutions based on your specific business needs.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconBg: "bg-purple-100",
      textColor: "text-white",
    },
    {
      title: "Reliable Delivery",
      description: "On-time delivery guaranteed across cities & states.",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      iconBg: "bg-green-100",
      textColor: "text-white",
    },
    {
      title: "Faster Turnaround Time",
      description: "Get quotations quickly with minimal lead time.",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      iconBg: "bg-orange-100",
      textColor: "text-white",
    },
    {
      title: "Unlimited Sourcing Capabilities",
      description:
        "We are not limited to fixed products. If it exists, we can procure it.",
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
      iconBg: "bg-pink-100",
      textColor: "text-white",
    },
    {
      title: "Expert Market Intelligence",
      description:
        "Leverage our team's deep procurement experience and vendor insight.",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      iconBg: "bg-indigo-100",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 ${feature.bgColor} rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
          >
            <div
              className={`w-12 h-12 ${feature.iconBg} rounded-full mx-auto mb-4 flex items-center justify-center`}
            >
              <div className={`w-6 h-6 ${feature.bgColor} rounded-full`}></div>
            </div>
            <h4 className={`text-xl font-semibold ${feature.textColor} mb-3`}>
              {feature.title}
            </h4>
            <p className={`${feature.textColor} opacity-90`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WTCU;
