
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-teal-500/12 to-emerald-500/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main footer content */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Enhanced Brand and contact */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Tech Harvest</span>
                 <span className="text-emerald-300/90 text-sm sm:text-base font-medium tracking-[0.05em]">
                      Integrating Agriculture With Technology
                  </span>
                </div>
              </div>
              
              <p className="text-slate-300 text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Empowering smallholder farmers through smart agriculture technology. 
                <span className="text-emerald-300 font-medium"> Join us in harvesting the future.</span>
              </p>

              {/* Enhanced social links */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="group relative bg-white/8 hover:bg-emerald-500/25 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-emerald-500/40"
                >
                  <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-emerald-300 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="group relative bg-white/8 hover:bg-teal-500/25 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-teal-500/40"
                >
                  <Twitter className="w-6 h-6 text-slate-400 group-hover:text-teal-300 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="group relative bg-white/8 hover:bg-pink-500/25 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-pink-500/40"
                >
                  <Instagram className="w-6 h-6 text-slate-400 group-hover:text-pink-300 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Right side - Enhanced newsletter signup */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/8 backdrop-blur-xl rounded-3xl p-10 border border-white/25">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent text-center lg:text-left">Stay in the Loop</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed text-center lg:text-left">
                  Get early access to Tech Harvest and be the first to know about our 
                  <span className="text-emerald-300 font-medium"> revolutionary launch</span>.
                </p>
                
                <div className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/30 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-emerald-400/30 rounded-xl py-4 px-6 text-lg backdrop-blur-sm transition-all duration-300"
                  />
                  <Button 
                    className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-emerald-600/30 transition-all duration-500 hover:scale-105 font-semibold w-full border border-emerald-500/20"
                  >
                    <span className="relative z-10">Subscribe</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom bar */}
      <div className="border-t border-white/20 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-slate-400 text-lg font-light mb-4 sm:mb-0">
            © 2025 Tech Harvest. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
            <a href="#" className="text-slate-400 hover:text-emerald-300 text-lg transition-colors duration-300 font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-300 text-lg transition-colors duration-300 font-medium">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-300 text-lg transition-colors duration-300 font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
