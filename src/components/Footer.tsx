import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from './Button';


export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                <Heart fill="white" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">Waggle <span className="text-primary italic">India</span></span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              India's most trusted pet care community. We connect pet parents with verified, loving sitters and walkers for the best care possible.
            </p>
            
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                Join the Waggle Club
              </h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary/50 flex-grow"
                />
                <Button size="sm" className="rounded-xl px-4">Join</Button>
              </div>
              <p className="text-[10px] text-gray-500 mt-3 font-medium uppercase tracking-widest">No spam, just pet love & offers.</p>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-primary pl-4">Services</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Pet Boarding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dog Walking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">House Sitting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pet Grooming</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-trust-blue pl-4">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Become a Sitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-emerald-500 pl-4">Support</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Strip & Socials */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Aadhaar Verified</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Heart size={20} fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Pet First</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Made in Bharat</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all border border-white/5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; 2025 Waggle India Solutions Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

