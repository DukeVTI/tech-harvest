
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Brand and contact */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-3 rounded-2xl shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold">Tech Harvest</span>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 max-w-md">
                Empowering smallholder farmers through smart agriculture technology. 
                Join us in harvesting the future.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-slate-800 hover:bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-semibold">Li</span>
                </a>
                <a 
                  href="#" 
                  className="bg-slate-800 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-semibold">Tw</span>
                </a>
                <a 
                  href="#" 
                  className="bg-slate-800 hover:bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-semibold">Ig</span>
                </a>
              </div>
            </div>

            {/* Right side - Newsletter signup */}
            <div className="bg-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
              <p className="text-slate-300 mb-6">
                Get early access to Tech Harvest and be the first to know about our launch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                />
                <Button 
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 px-8"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Tech Harvest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
