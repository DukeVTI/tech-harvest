
import { Leaf, Target, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-green-200/15 to-teal-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-teal-200/10 to-green-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 font-semibold mb-6 sm:mb-8 border border-green-200/50 text-sm sm:text-base">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></span>
            About Tech Harvest
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-slate-800 via-green-800 to-teal-700 bg-clip-text text-transparent leading-tight px-4">
            Bridging Innovation
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">& Agriculture</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            We're connecting cutting-edge agricultural technology with the world's 
            <span className="font-semibold text-green-700"> 500 million smallholder farmers</span> who feed our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="group relative">
            {/* Premium card with glass morphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/15 to-green-700/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-green-600/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center shadow-xl">
                  <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 group-hover:text-green-700 transition-colors duration-300">Innovation</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Leveraging <span className="font-semibold text-green-700">artificial intelligence</span>, IoT sensors, and satellite data to make precision agriculture 
                accessible and affordable for small-scale farmers worldwide.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/15 to-teal-700/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-teal-600/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-teal-700 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center shadow-xl">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 group-hover:text-teal-700 transition-colors duration-300">Impact</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Empowering farmers to <span className="font-semibold text-teal-700">increase yields</span>, reduce waste, and build sustainable 
                livelihoods while feeding growing communities across the globe.
              </p>
            </div>
          </div>

          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-700/15 to-teal-600/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-green-600/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-700 to-teal-600 rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-green-700 to-teal-600 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center shadow-xl">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 group-hover:text-green-700 transition-colors duration-300">Sustainability</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Creating <span className="font-semibold text-green-700">resilient food systems</span> that protect our environment while 
                ensuring food security for future generations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
