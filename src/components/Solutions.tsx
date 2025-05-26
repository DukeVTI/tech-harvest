
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
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 font-semibold mb-8 border border-emerald-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            Our Solutions Preview
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Technology That
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">Transforms Farming</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Cutting-edge agricultural technology designed specifically for 
            <span className="text-emerald-300 font-medium"> smallholder farmers</span> around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-2xl">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className={`absolute -inset-2 bg-gradient-to-br ${solution.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}></div>
                      <div className={`relative bg-gradient-to-br ${solution.gradient} w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-200 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 text-lg">
                      {solution.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
