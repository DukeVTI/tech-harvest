
import { Leaf, Target, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-blue-600 bg-clip-text text-transparent">
            About Tech Harvest
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're bridging the gap between cutting-edge agricultural technology and the world's 
            500 million smallholder farmers who feed our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation</h3>
            <p className="text-slate-600 leading-relaxed">
              Leveraging AI, IoT sensors, and satellite data to make precision agriculture 
              accessible and affordable for small-scale farmers worldwide.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Impact</h3>
            <p className="text-slate-600 leading-relaxed">
              Empowering farmers to increase yields, reduce waste, and build sustainable 
              livelihoods while feeding growing communities.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Sustainability</h3>
            <p className="text-slate-600 leading-relaxed">
              Creating resilient food systems that protect our environment while 
              ensuring food security for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
