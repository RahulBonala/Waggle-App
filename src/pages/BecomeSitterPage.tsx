import React from 'react';
import { 
  Heart, ShieldCheck, Clock, Award, 
  ChevronRight, CheckCircle2, Star, 
  Zap, Users, MessageCircle, Wallet
} from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';

export const BecomeSitterPage: React.FC = () => {
  const { user, setAuthModalOpen } = useAppStore();

  const handleStartApplication = () => {
    if (!user) {
      setAuthModalOpen(true);
    } else {
      // Navigate to application form (placeholder)
      alert("Application form starting soon!");
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-orange-50/50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
              <Star size={16} className="text-primary fill-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider italic">Join 50,000+ Happy Sitters</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              Turn your love for pets <br />
              <span className="text-primary italic">into a rewarding career.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Become a verified Waggle Partner. Earn Top-Pay, set your own hours, and help pet parents in your neighborhood.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="px-12 rounded-2xl shadow-xl shadow-orange-500/20" onClick={handleStartApplication}>
                Start Your Journey <ChevronRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-12 rounded-2xl">
                Watch How it Works
              </Button>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            {[
              { label: 'Avg. Earnings', value: '₹25,000/mo', icon: Wallet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'Flexible Work', value: '100% Yours', icon: Clock, color: 'text-trust-blue', bg: 'bg-blue-50' },
              { label: 'Trusted Brand', value: 'India\'s #1', icon: Award, color: 'text-orange-600', bg: 'bg-orange-50' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-50 hover:border-primary/20 transition-all shadow-sm group"
              >
                <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={28} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Breakdown */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-white rounded-[3rem] shadow-2xl p-4 overflow-hidden -rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=800" 
                  alt="Happy Sitter" 
                  className="w-full h-full object-cover rounded-[2.5rem]" 
                />
              </div>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 italic"
              >
                <div className="flex items-center gap-3">
                  <Heart className="text-primary" fill="currentColor" size={20} />
                  <span className="font-bold text-gray-800">"Best job in the world!"</span>
                </div>
              </motion.div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">The <span className="text-primary italic">Waggle Perks</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Weekly Payments', desc: 'Get your earnings safely transferred via UPI every Wednesday without delays.', icon: Zap },
                  { title: 'Expert Support 24/7', desc: 'Our safety team is always available to help you during emergencies or tricky situations.', icon: MessageCircle },
                  { title: 'Free Sitter Insurance', desc: 'Enjoy peace of mind with our Waggle Trust Guarantee that covers your pet clients.', icon: ShieldCheck },
                  { title: 'Build Your Community', desc: 'Host meet-ups, share tips, and grow your local network of pet lovers.', icon: Users }
                ].map((perk, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-2xl border-2 border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-all flex-shrink-0">
                      <perk.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{perk.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">How to Become a Partner</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">Get verified and start your profile in just 4 simple steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gray-100 -z-10" />
            
            {[
              { step: '01', title: 'Quick Apply', desc: 'Fill in your details and tell us about your pet experience.' },
              { step: '02', title: 'Identity Check', desc: 'Securely verify your identity with Aadhaar in 2 minutes.' },
              { step: '03', title: 'Onboarding', desc: 'Attend a quick virtual call with our community managers.' },
              { step: '04', title: 'Start Earning', desc: 'Go live on the platform and start receiving booking requests!' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary text-white font-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20 ring-8 ring-white">
                  {step.step}
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="py-32 bg-gray-900 text-white rounded-[4rem] mx-6 mb-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-primary animate-pulse">
            <Heart size={40} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to make pets happy?</h2>
          <p className="text-xl text-gray-400 mb-12">No joining fees. Instant verification. The community is waiting for you.</p>
          <Button size="lg" className="px-16 rounded-2xl shadow-2xl shadow-primary/40" onClick={handleStartApplication}>
            Get Started Now
          </Button>
          
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-gray-500 font-bold uppercase tracking-widest text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              Free Training
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              Sitter Apparel
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              Zero Platform Fee*
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

