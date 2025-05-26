
import { Leaf, Target, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-200/15 to-emerald-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/10 to-teal-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100/80 to-teal-100/80 text-emerald-700 font-semibold mb-8 border border-emerald-200/60 backdrop-blur-sm text-base shadow-lg">
            <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 animate-pulse"></span>
            About Tech Harvest
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-700 bg-clip-text text-transparent leading-tight px-4">
            Revolutionizing Agriculture
            <br />
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">in Africa</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light px-4">
            We're connecting cutting-edge agricultural technology with the world's 
            <span className="font-semibold text-emerald-700"> 500 million smallholder farmers</span> who feed our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="group relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/60 shadow-2xl hover:shadow-emerald-500/15 transition-all duration-700">
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <Leaf className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-emerald-700 transition-colors duration-300">Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To <span className="font-semibold text-emerald-700">revolutionize agriculture</span> in Africa by empowering smallholder farmers with innovation, sustainable, and accessible solutions.
              </p>
            </div>
          </div>

          <div className="group relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/60 shadow-2xl hover:shadow-teal-500/15 transition-all duration-700">
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-teal-700 transition-colors duration-300">Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
              <span className="font-semibold text-teal-700">Bridging the gaps</span> in agriculture by providing affordable access mechanization, smart farming technology.
              </p>
            </div>
          </div>

          <div className="group relative md:col-span-2 lg:col-span-1 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/60 shadow-2xl hover:shadow-emerald-500/15 transition-all duration-700">
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-emerald-600 to-teal-500 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-emerald-700 transition-colors duration-300">Sustainability</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Creating <span className="font-semibold text-emerald-700">resilient food systems</span> that protect our environment while 
                ensuring food security for future generations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
