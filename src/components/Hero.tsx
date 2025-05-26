
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-green-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23059669\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-3 rounded-2xl shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Tech Harvest
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-blue-600 bg-clip-text text-transparent">
            Harvest the Future.
          </span>
          <br />
          <span className="text-slate-800">Smarter.</span>
        </h1>

        {/* Supporting text */}
        <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Tech Harvest brings precision agriculture to the world's small farms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            See What's Growing
          </Button>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center animate-fade-in delay-700">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">10K+</div>
            <div className="text-slate-600">Farmers Ready</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-slate-600">Crop Yield Increase</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-slate-600">Countries Waiting</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-slate-400 rotate-90" />
      </div>
    </section>
  );
};
