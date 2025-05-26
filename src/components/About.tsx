
import { Leaf, Target, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-emerald-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 font-semibold mb-8 border border-emerald-200/50">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
            About Tech Harvest
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-emerald-700 to-blue-700 bg-clip-text text-transparent leading-tight">
            Bridging Innovation
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">& Agriculture</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            We're connecting cutting-edge agricultural technology with the world's 
            <span className="font-semibold text-emerald-700"> 500 million smallholder farmers</span> who feed our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="group relative">
            {/* Premium card with glass morphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 to-green-500 w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-emerald-700 transition-colors duration-300">Innovation</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Leveraging <span className="font-semibold text-emerald-600">artificial intelligence</span>, IoT sensors, and satellite data to make precision agriculture 
                accessible and affordable for small-scale farmers worldwide.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-500 w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-blue-700 transition-colors duration-300">Impact</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Empowering farmers to <span className="font-semibold text-blue-600">increase yields</span>, reduce waste, and build sustainable 
                livelihoods while feeding growing communities across the globe.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-green-500/10 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-green-700 transition-colors duration-300">Sustainability</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Creating <span className="font-semibold text-green-600">resilient food systems</span> that protect our environment while 
                ensuring food security for future generations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
