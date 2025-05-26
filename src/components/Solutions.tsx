
import { Droplets, Eye, Thermometer, CloudRain } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "AI-powered watering systems that optimize water usage and timing for maximum crop health and sustainability.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/15 to-teal-500/15",
      hoverGradient: "from-emerald-500/25 to-teal-500/25"
    },
    {
      icon: Eye,
      title: "AI Crop Monitoring",
      description: "Computer vision technology that detects pests, diseases, and growth patterns in real-time with precision.",
      gradient: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-500/15 to-emerald-600/15",
      hoverGradient: "from-teal-500/25 to-emerald-600/25"
    },
    {
      icon: Thermometer,
      title: "Soil Health Sensors",
      description: "IoT sensors that monitor soil moisture, pH, and nutrients to optimize growing conditions continuously.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-500/15 to-orange-500/15",
      hoverGradient: "from-amber-500/25 to-orange-500/25"
    },
    {
      icon: CloudRain,
      title: "Weather Prediction",
      description: "Hyper-local weather forecasting to help farmers plan planting, harvesting, and crop protection strategies.",
      gradient: "from-slate-500 to-slate-600",
      bgGradient: "from-slate-500/15 to-slate-600/15",
      hoverGradient: "from-slate-500/25 to-slate-600/25"
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-500/12 to-emerald-500/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-600/8 to-teal-600/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/25 to-teal-500/25 text-emerald-300 font-semibold mb-8 border border-emerald-500/40 backdrop-blur-sm text-base shadow-lg">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            Our Solutions Preview
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent leading-tight px-4">
            Technology That
            <br />
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Transforms Farming</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light px-4">
            Cutting-edge agricultural technology designed specifically for 
            <span className="text-emerald-300 font-medium"> smallholder farmers</span> around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="group relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-3"
              >
                {/* Enhanced glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${solution.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700`}></div>
                
                {/* Main card with better backdrop */}
                <div className="relative bg-white/8 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/12 transition-all duration-700 shadow-2xl">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className={`absolute -inset-3 bg-gradient-to-br ${solution.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition duration-1000`}></div>
                      <div className={`relative bg-gradient-to-br ${solution.gradient} w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-200 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 text-lg">
                      {solution.description}
                    </p>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-white/15 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
