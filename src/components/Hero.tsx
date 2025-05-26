
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Premium animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Premium Logo/Brand */}
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-emerald-500 to-blue-500 p-4 rounded-3xl shadow-2xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start">
            <span className="text-3xl font-bold bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
              Tech Harvest
            </span>
            <span className="text-emerald-300/80 text-sm font-medium tracking-widest uppercase">
              Precision Agriculture
            </span>
          </div>
        </div>

        {/* Premium main heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in delay-200 leading-tight">
          <span className="bg-gradient-to-r from-white via-emerald-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
            Harvest the Future.
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
            Smarter.
          </span>
        </h1>

        {/* Premium supporting text */}
        <p className="text-xl sm:text-2xl text-slate-200/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300 font-light">
          Tech Harvest brings precision agriculture to the world's small farms through 
          <span className="text-emerald-300 font-medium"> cutting-edge AI technology</span> and 
          <span className="text-blue-300 font-medium"> sustainable innovation</span>.
        </p>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500 mb-16">
          <Button 
            size="lg" 
            className="group relative bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 font-semibold tracking-wide"
          >
            <span className="relative z-10 flex items-center">
              Join the Waitlist
              <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-emerald-400/50 text-emerald-200 hover:bg-emerald-500/10 hover:border-emerald-300 px-10 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm font-semibold tracking-wide"
          >
            See What's Growing
            <ArrowDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Premium stats with glass morphism */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in delay-700">
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent mb-3">10K+</div>
              <div className="text-slate-300 font-medium">Farmers Ready</div>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mb-3">95%</div>
              <div className="text-slate-300 font-medium">Crop Yield Increase</div>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-slate-300 font-medium">Countries Waiting</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
          <ChevronRight className="w-6 h-6 text-emerald-300 rotate-90" />
        </div>
      </div>
    </section>
  );
};
