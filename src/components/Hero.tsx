
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/90 to-slate-800">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-5 sm:left-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-teal-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Enhanced Logo/Brand */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-4 sm:p-5 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start">
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
              Tech Harvest
            </span>
           <span className="text-emerald-300/90 text-sm sm:text-base font-medium tracking-[0.05em]">
              Integrating Agriculture With Technology
            </span>
          </div>
        </div>

        {/* Enhanced main heading with better typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 animate-fade-in delay-200 leading-[0.9] px-2">
          <span className="block bg-gradient-to-r from-white via-emerald-50 to-teal-50 bg-clip-text text-transparent drop-shadow-2xl mb-2">
            Harvest the Future.
          </span>
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            Smarter.
          </span>
        </h1>

        {/* Enhanced supporting text */}
        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-200/95 mb-10 sm:mb-14 max-w-5xl mx-auto leading-relaxed animate-fade-in delay-300 font-light px-4">
          Tech Harvest brings precision agriculture to the world's small farms through 
          <span className="text-emerald-300 font-medium"> cutting-edge AI technology</span> and 
          <span className="text-teal-300 font-medium"> sustainable innovation</span>.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in delay-500 mb-12 sm:mb-16 px-4">
          <Button 
            size="lg" 
            className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-emerald-600/30 transition-all duration-500 hover:scale-105 font-semibold tracking-wide w-full sm:w-auto border border-emerald-500/20"
          >
            <span className="relative z-10 flex items-center justify-center">
              Join the Waitlist
              <ChevronRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-emerald-500/60 text-emerald-100 hover:bg-emerald-600/15 hover:border-emerald-400 px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl rounded-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm font-semibold tracking-wide w-full sm:w-auto"
          >
            See What's Growing
            <ArrowDown className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Enhanced stats with better glass morphism */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in delay-700 px-4 max-w-4xl mx-auto">
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-3 tracking-tight">10K+</div>
              <div className="text-slate-300 font-medium text-base sm:text-lg">Farmers Ready</div>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent mb-3 tracking-tight">95%</div>
              <div className="text-slate-300 font-medium text-base sm:text-lg">Crop Yield Increase</div>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-3 tracking-tight">50+</div>
              <div className="text-slate-300 font-medium text-base sm:text-lg">Countries Waiting</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/30 shadow-lg">
          <ChevronRight className="w-6 h-6 text-emerald-300 rotate-90" />
        </div>
      </div>
    </section>
  );
};
