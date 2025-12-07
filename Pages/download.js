import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Box, ExternalLink, CheckCircle, Gamepad2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function DownloadPage() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Choose Your <span className="text-purple-500">Download</span> Method
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
          Select your preferred way to download NightEZ Game Copies. All files are secure and verified.
          </motion.p>
        </div>

        {/* Download Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          
          {/* Lootlabs Card */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="w-full max-w-md bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 hover:border-purple-500/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full items-center text-center">
              <div className="w-20 h-20 mb-6 relative">
                <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20" />
                <Box className="w-full h-full text-yellow-500" />
              </div>

              <h3 className="text-3xl font-bold mb-2">Lootlabs</h3>
              <p className="text-gray-400 mb-8">Faster and simple download through Lootlabs</p>

              <div className="space-y-3 w-full mb-10 text-left pl-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span>Easy Download</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span>Reliable Service</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span>Quick Access</span>
                </div>
              </div>

              <a 
                href="https://lootdest.org/s?OhlP6p3q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full"
              >
                <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group-hover:scale-105">
                  Download Now <ExternalLink className="w-4 h-4" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* Direct (Coming Soon) Card */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-not-allowed"
          >
            <div className="flex flex-col h-full items-center text-center">
              <div className="w-20 h-20 mb-6 bg-purple-900/20 rounded-2xl flex items-center justify-center">
                <Download className="w-10 h-10 text-purple-500" />
              </div>

              <h3 className="text-3xl font-bold mb-2">Direct</h3>
              <p className="text-gray-400 mb-8">Direct download from our servers</p>

              <div className="space-y-3 w-full mb-10 text-left pl-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gray-500" />
                  <span>Instant Start</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gray-500" />
                  <span>No Ads</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gray-500" />
                  <span>Priority Speed</span>
                </div>
              </div>

              <button disabled className="mt-auto w-full py-4 bg-white/5 rounded-xl font-bold border border-white/5 text-gray-500">
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Latest Updates Section (from screenshots) */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mt-32 p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent"
        >
          <div className="bg-black rounded-[22px] p-8 md:p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
            
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-10">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)]">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-2">NightEZ Library</h3>
              <p className="text-gray-400 mb-8">Get instant access to our exclusive collection of games.</p>
              
              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <h4 className="font-bold mb-1 text-purple-400">Active Users</h4>
                  <p className="text-xs text-gray-500">Join our growing community</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <h4 className="font-bold mb-1 text-blue-400">Auto Update</h4>
                  <p className="text-xs text-gray-500">New games added daily</p>
                </div>
              </div>

              <a href="https://lootdest.org/s?OhlP6p3q" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]">
                  Download Now <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
