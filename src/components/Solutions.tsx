
import { Droplets, Eye, Thermometer, CloudRain } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "AI-powered watering systems that optimize water usage and timing for maximum crop health.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "AI Crop Monitoring",
      description: "Computer vision technology that detects pests, diseases, and growth patterns in real-time.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Thermometer,
      title: "Soil Health Sensors",
      description: "IoT sensors that monitor soil moisture, pH, and nutrients to optimize growing conditions.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: CloudRain,
      title: "Weather Prediction",
      description: "Hyper-local weather forecasting to help farmers plan planting, harvesting, and protection.",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-blue-600 bg-clip-text text-transparent">
            Our Solutions Preview
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge agricultural technology designed specifically for smallholder farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${solution.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {solution.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
