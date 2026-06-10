import React from 'react';
import { 
  Search, MapPin, 
  ChevronRight, Star, ShieldCheck, Heart,
  Phone, Smartphone, Apple, PlayCircle,
  Users, Award, Sparkles, MessageCircle
} from 'lucide-react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { FeaturedSitterCard } from '../components/FeaturedSitterCard';
import { mockSitters, REVIEWS, SERVICES } from '../data/mockData';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// @ts-expect-error -- swiper CSS imports have no type declarations
import 'swiper/css';
// @ts-expect-error -- swiper CSS imports have no type declarations
import 'swiper/css/pagination';

// Import hero image (placeholder or generated)
import heroImage from '../assets/hero_pet_owner.png';

export const LandingPage: React.FC = () => {



  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#FFF9F5] pt-20 pb-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">#1 Pet Care Community in India</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Trusted care for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Furry Family</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Book verified pet sitters, walkers, and groomers in your neighborhood. 
                Peace of mind for you, pure joy for them.
              </p>

              {/* Advanced Search Widget */}
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-gray-100 mb-8 max-w-2xl">
                <div className="grid md:grid-cols-3 gap-2">
                  <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Service</label>
                    <div className="flex items-center gap-2 font-bold text-gray-800">
                      <Heart size={18} className="text-primary" />
                      <span>Pet Sitting</span>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border-t md:border-t-0 md:border-l border-gray-100">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Location</label>
                    <div className="flex items-center gap-2 font-bold text-gray-800">
                      <MapPin size={18} className="text-primary" />
                      <input type="text" placeholder="Your City" aria-label="Search city" className="bg-transparent outline-none w-full placeholder:text-gray-300" />
                    </div>
                  </div>
                  <div className="p-2">
                    <Button fullWidth size="lg" className="h-full rounded-2xl shadow-orange-500/20 shadow-lg">
                      <Search size={20} className="mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 items-center text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900 border-l border-gray-200 pl-4 ml-2">10k+ Happy Pets</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm">
                  <ShieldCheck size={18} className="text-success" />
                  <span>Verified by Aadhaar</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                <img src={heroImage} alt="Happy Dog" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">4.9/5 Rating</h4>
                    <p className="text-xs text-gray-500">From 5000+ reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Nearby Sitters</h4>
                    <p className="text-xs text-gray-500">200+ available today</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Simple 3-Step Care</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Getting professional care for your pet is now as easy as ordering food.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Search, title: 'Find', desc: 'Search for verified sitters and services in your local neighborhood.', color: 'bg-orange-50 text-orange-600' },
              { icon: MessageCircle, title: 'Meet & Connect', desc: 'Chat with providers and schedule a free meet-and-greet sessions.', color: 'bg-blue-50 text-trust-blue' },
              { icon: Award, title: 'Book & Relax', desc: 'Pay securely and get peace of mind with 24/7 support and updates.', color: 'bg-emerald-50 text-emerald-600' }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className={`w-24 h-24 ${step.color} rounded-[2rem] flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <step.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed px-6">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-500 text-lg">Whatever your pet needs, we've got a professional for it.</p>
            </div>
            <Button variant="outline" className="border-2 rounded-2xl group">
              View Pricing <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard 
                key={i}
                title={service.name}
                price={service.price}
                color={service.color}
                icon={<service.icon size={24} />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED SITTERS */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Featured Sitters</h2>
            <div className="flex gap-2">
              <Button variant="ghost" className="hidden md:flex">Browse Map</Button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {mockSitters.map((sitter) => (
              <SwiperSlide key={sitter.id}>
                <FeaturedSitterCard {...sitter} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-4" />
        </div>
      </section>

      {/* 5. WHY WAGGLE */}
      <section className="py-32 bg-gray-900 text-white rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">Why Pet Parents <span className="text-primary italic">Trust</span> Waggle</h2>
              <div className="space-y-10">
                {[
                  { title: 'Verified Profiles', desc: 'Every sitter goes through a multi-step background check including Aadhaar verification.', icon: ShieldCheck },
                  { title: 'Safe Payments', desc: 'Secure online payments with Waggle Protection. Your money is only released after service.', icon: Award },
                  { title: 'Free Meet & Greet', desc: 'Connect with sitters before you book to ensure a perfect match for your pet.', icon: Users },
                  { title: 'Photo & GPS Updates', desc: 'Get live updates, photos, and GPS tracking during every walk or booking.', icon: Smartphone }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-primary/20 to-trust-blue/20 rounded-full flex items-center justify-center p-12">
                <div className="w-full h-full bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                  />
                  <div className="text-center p-12 relative z-10">
                    <div className="text-7xl font-black text-primary mb-4 italic leading-none">98%</div>
                    <p className="text-xl font-bold text-white uppercase tracking-[0.2em]">Customer Satisfaction</p>
                    <div className="flex justify-center gap-1 mt-6 text-warning">
                      {[1,2,3,4,5].map(s => <Star key={s} size={24} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APP PROMO */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-trust-blue to-blue-800 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="grid lg:grid-cols-2 items-center gap-16 relative z-10">
              <div className="text-white text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Care for your pet, in your pocket.</h2>
                <p className="text-blue-100 text-xl mb-12">Get the Waggle app and manage bookings, track walks, and more on the go.</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => toast('The Waggle iOS app is coming soon!', { icon: '📱' })}
                    className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform"
                  >
                    <Apple size={28} />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold opacity-60 leading-none mb-1">Download on the</p>
                      <p className="text-lg font-bold leading-none">App Store</p>
                    </div>
                  </button>
                  <button
                    onClick={() => toast('The Waggle Android app is coming soon!', { icon: '📱' })}
                    className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform"
                  >
                    <PlayCircle size={28} />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold opacity-60 leading-none mb-1">Get it on</p>
                      <p className="text-lg font-bold leading-none">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 overflow-hidden shadow-2xl relative z-10">
                    <div className="w-1/2 h-6 bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl" />
                    <div className="p-4 pt-10">
                      <div className="w-full h-8 bg-gray-800 rounded-lg mb-4" />
                      <div className="w-full aspect-[4/3] bg-primary/20 rounded-2xl mb-4" />
                      <div className="space-y-3">
                        <div className="w-full h-4 bg-gray-800 rounded-full" />
                        <div className="w-2/3 h-4 bg-gray-800 rounded-full" />
                      </div>
                    </div>
                  </div>
                  {/* Decorative phone background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Waggle Love</h2>
            <p className="text-gray-500 text-lg">Real stories from the Waggle community across India.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border-2 border-gray-100 shadow-sm relative"
              >
                <div className="flex gap-1 text-warning mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 font-medium mb-8 leading-relaxed italic text-lg">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt={review.user} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.user}</h4>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BECOME A SITTER CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-primary">
            <Award size={48} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">Have a pet friendly house? <br />
            <span className="text-primary italic">Earn till you smile.</span>
          </h2>
          <p className="text-xl text-gray-500 mb-12">Join our network of 50,000+ sitters and turn your pet-love into a career. Flexible hours, top pay, and all help provided.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-12 rounded-2xl">Become a Sitter</Button>
            <Button size="lg" variant="outline" className="px-12 rounded-2xl">How it Works</Button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck size={32} />
              <div className="leading-tight text-left">
                <p className="font-bold text-gray-900">100% Secure</p>
                <p className="text-[10px] uppercase font-bold tracking-widest">Payments</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone size={32} />
              <div className="leading-tight text-left">
                <p className="font-bold text-gray-900">24/7 Support</p>
                <p className="text-[10px] uppercase font-bold tracking-widest">Available</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-2xl font-black tracking-tighter text-gray-900 italic">
              WAGGLE.TRUST
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award size={32} />
              <div className="leading-tight text-left">
                <p className="font-bold text-gray-900">Certified</p>
                <p className="text-[10px] uppercase font-bold tracking-widest">Sitters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

