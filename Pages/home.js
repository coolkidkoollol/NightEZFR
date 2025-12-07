import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Zap, Shield, Globe, Terminal, Box, ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              v2.0 is now available
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">
              Premium <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Roblox Game Copies</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Access the largest library of uncopylocked Roblox games. 
              Download full game copies, maps, and assets instantly for free.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to={createPageUrl('Download')}>
                <button className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                  Download Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                View Documentation
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <FeatureCard 
              icon={Zap} 
              title="Instant Downloads" 
              desc="Get direct access to game files immediately. No waiting, high-speed download servers."
              delay={0}
            />
            <FeatureCard 
              icon={Shield} 
              title="Virus Free" 
              desc="All game files are scanned and verified. Safe to download and open in Roblox Studio."
              delay={0.1}
            />
            <FeatureCard 
              icon={Box} 
              title="Huge Library" 
              desc="Thousands of popular game copies including simulators, tycoons, and roleplay games."
              delay={0.2}
            />
          </motion.div>
        </div>
      </section>

      {/* Interface Preview Section */}
      <section className="py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
                Massive <span className="text-purple-500">Collection</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg">
                Browse through our extensive collection of high-quality game copies. 
                Perfect for learning, assets, or starting your own project.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  { title: "Total Games", value: "1", icon: Box },
                  { title: "Happy Users", value: "100%", icon: Shield },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{stat.title}</span>
                    </div>
                    <span className="font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Fake UI Representation */}
              <div className="rounded-xl bg-[#0f0f0f] border border-white/10 p-4 shadow-2xl overflow-hidden aspect-video relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Header */}
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="ml-4 h-6 w-32 bg-white/10 rounded-full" />
                </div>

                {/* Game Library Content */}
                <div className="grid grid-cols-2 gap-3 p-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/5">
                      <div className="aspect-video bg-white/10 rounded-md mb-2 relative overflow-hidden">
                         <div className={`absolute inset-0 bg-gradient-to-br ${i === 1 ? 'from-red-500/20' : i === 2 ? 'from-blue-500/20' : i === 3 ? 'from-green-500/20' : 'from-yellow-500/20'} to-transparent`} />
                      </div>
                      <div className="h-2 w-3/4 bg-white/20 rounded mb-1" />
                      <div className="h-2 w-1/2 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>

                {/* Cursor Animation */}
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="absolute top-[88px] left-[60px] w-2 h-4 bg-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Teaser */}
      <section className="py-32 relative bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold">
              Ready to Start?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400">
              Join thousands of developers using NightEZ to jumpstart their Roblox projects.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to={createPageUrl('Download')}>
                <button className="bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-purple-50 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  Go to Download Page
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { delay, duration: 0.6 }
        }
      }}
      className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
    >
      <div className="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
