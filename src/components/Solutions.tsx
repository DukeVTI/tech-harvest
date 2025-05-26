
import { Droplets, Eye, Thermometer, CloudRain } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "AI-powered watering systems that optimize water usage and timing for maximum crop health and sustainability.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Eye,
      title: "AI Crop Monitoring",
      description: "Computer vision technology that detects pests, diseases, and growth patterns in real-time with precision.",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10"
    },
    {
      icon: Thermometer,
      title: "Soil Health Sensors",
      description: "IoT sensors that monitor soil moisture, pH, and nutrients to optimize growing conditions continuously.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: CloudRain,
      title: "Weather Prediction",
      description: "Hyper-local weather forecasting to help farmers plan planting, harvesting, and crop protection strategies.",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 font-semibold mb-6 sm:mb-8 border border-emerald-400/30 backdrop-blur-sm text-sm sm:text-base">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            Our Solutions Preview
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent leading-tight px-4">
            Technology That
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Transforms Farming</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Cutting-edge agricultural technology designed specifically for 
            <span className="text-emerald-300 font-medium"> smallholder farmers</span> around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Premium glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${solution.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700`}></div>
                
                {/* Main card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-2xl">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="relative mb-6 sm:mb-8">
                      <div className={`absolute -inset-2 bg-gradient-to-br ${solution.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}></div>
                      <div className={`relative bg-gradient-to-br ${solution.gradient} w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 group-hover:text-emerald-200 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 text-base sm:text-lg">
                      {solution.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
