
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      {/* Premium animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-5 sm:left-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-green-600/15 to-teal-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-teal-600/10 to-green-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-br from-green-700/8 to-teal-700/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Premium grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Subtle noise texture for premium feel */}
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-gradient-to-br from-transparent via-slate-500/5 to-transparent"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Premium Logo/Brand */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-teal-600 to-green-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-green-700 to-teal-700 p-3 sm:p-4 rounded-3xl shadow-2xl">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <div className="ml-3 sm:ml-4 flex flex-col items-start">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent tracking-tight">
              Tech Harvest
            </span>
            <span className="text-green-300/80 text-xs sm:text-sm font-medium tracking-widest uppercase">
              Precision Agriculture
            </span>
          </div>
        </div>

        {/* Premium main heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 animate-fade-in delay-200 leading-tight px-2">
          <span className="bg-gradient-to-r from-white via-green-100 to-teal-100 bg-clip-text text-transparent drop-shadow-2xl">
            Harvest the Future.
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
            Smarter.
          </span>
        </h1>

        {/* Premium supporting text */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-200/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300 font-light px-4">
          Tech Harvest brings precision agriculture to the world's small farms through 
          <span className="text-green-300 font-medium"> cutting-edge AI technology</span> and 
          <span className="text-teal-300 font-medium"> sustainable innovation</span>.
        </p>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in delay-500 mb-12 sm:mb-16 px-4">
          <Button 
            size="lg" 
            className="group relative bg-gradient-to-r from-green-700 to-teal-700 hover:from-green-600 hover:to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-green-700/25 transition-all duration-500 hover:scale-105 font-semibold tracking-wide w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center">
              Join the Waitlist
              <ChevronRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-green-600/50 text-green-200 hover:bg-green-700/10 hover:border-green-500 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm font-semibold tracking-wide w-full sm:w-auto"
          >
            See What's Growing
            <ArrowDown className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Premium stats with glass morphism */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in delay-700 px-4">
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-700/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2 sm:mb-3">10K+</div>
              <div className="text-slate-300 font-medium text-sm sm:text-base">Farmers Ready</div>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent mb-2 sm:mb-3">95%</div>
              <div className="text-slate-300 font-medium text-sm sm:text-base">Crop Yield Increase</div>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-700/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2 sm:mb-3">50+</div>
              <div className="text-slate-300 font-medium text-sm sm:text-base">Countries Waiting</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/20">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 rotate-90" />
        </div>
      </div>
    </section>
  );
};
