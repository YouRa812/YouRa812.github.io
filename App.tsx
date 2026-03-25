/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Send, ArrowDown, Sparkles } from 'lucide-react';

// 3D Floating Cube Component
const Cube = ({ size, colorClass, className, duration = 20, reverse = false }: { size: number, colorClass: string, className: string, duration?: number, reverse?: boolean }) => {
  const half = size / 2;
  const faceClass = `absolute w-full h-full border-2 backdrop-blur-sm ${colorClass}`;
  
  return (
    <div className={`absolute ${className} pointer-events-none z-0`} style={{ width: size, height: size, perspective: '1000px' }}>
      <motion.div 
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ 
          rotateX: reverse ? -360 : 360, 
          rotateY: reverse ? -360 : 360, 
          rotateZ: reverse ? 360 : -360 
        }}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
      >
        <div className={faceClass} style={{ transform: `rotateY(0deg) translateZ(${half}px)` }}></div>
        <div className={faceClass} style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}></div>
        <div className={faceClass} style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}></div>
        <div className={faceClass} style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}></div>
        <div className={faceClass} style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}></div>
        <div className={faceClass} style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}></div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14, mass: 1 },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#030712] flex flex-col items-center justify-center overflow-hidden font-sans text-slate-100 selection:bg-orange-500/30">
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 perspective-bg overflow-hidden pointer-events-none z-0">
        {/* Top 3D Grid Plane */}
        <div className="absolute w-[200vw] h-[100vh] left-[-50vw] bottom-[50%] grid-plane-top opacity-60"></div>
        
        {/* Bottom 3D Grid Plane */}
        <div className="absolute w-[200vw] h-[100vh] left-[-50vw] top-[50%] grid-plane-bottom opacity-60"></div>
        
        {/* Radial fade to blend edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#030712_80%)] z-10"></div>
      </div>

      {/* 3D Floating Cubes */}
      <Cube size={90} colorClass="border-[#00f0ff]/50 bg-[#00f0ff]/10 shadow-[inset_0_0_20px_rgba(0,240,255,0.3)]" className="top-[5%] left-[2%] md:top-[15%] md:left-[10%]" duration={15} />
      <Cube size={60} colorClass="border-[#ff5e00]/50 bg-[#ff5e00]/10 shadow-[inset_0_0_20px_rgba(255,94,0,0.3)]" className="bottom-[10%] right-[2%] md:bottom-[20%] md:right-[15%]" duration={12} reverse={true} />
      <Cube size={120} colorClass="border-indigo-500/40 bg-indigo-500/10 shadow-[inset_0_0_30px_rgba(99,102,241,0.3)]" className="hidden md:block top-[40%] right-[5%] opacity-50" duration={25} />
      <Cube size={50} colorClass="border-purple-500/50 bg-purple-500/10 shadow-[inset_0_0_15px_rgba(168,85,247,0.3)]" className="bottom-[25%] left-[5%] md:bottom-[15%] md:left-[20%]" duration={10} />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-orange-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full max-w-2xl mx-auto"
      >
        <div className="glass-panel rounded-[2.5rem] md:rounded-[3rem] px-5 py-10 sm:px-8 sm:py-16 md:py-20 flex flex-col items-center text-center mx-4 relative overflow-hidden w-[calc(100%-2rem)] sm:w-auto">
          {/* Inner subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          
          {/* Logo Section with Spinning Border */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12 relative group cursor-pointer">
            {/* Spinning gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border border-white/10 shadow-2xl overflow-hidden bg-slate-900 flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-800 flex items-center justify-center">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #fb923c 100%)',
                    WebkitMaskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                {/* Inner shadow overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] rounded-full pointer-events-none"></div>
              </div>
            </div>
            
            {/* Floating Sparkles */}
            <motion.div 
              className="absolute -top-2 -right-2 text-orange-400"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </motion.div>

          {/* Animated Text */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-wide leading-[1.3]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400 animate-gradient-text">
              Напиши мне
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              в Telegram
            </span>
          </motion.h1>

          {/* Bouncing Arrow */}
          <motion.div
            variants={itemVariants}
            className="mb-8 md:mb-12"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <div className="p-5 md:p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.15)]">
              <ArrowDown className="w-10 h-10 md:w-14 md:h-14 text-[#00f0ff] opacity-90" />
            </div>
          </motion.div>

          {/* Telegram Button */}
          <motion.div variants={itemVariants} className="w-full sm:w-auto relative z-20">
            <motion.a
              href="https://t.me/CTPAXBCEX444"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_0_60px_-10px_rgba(255,94,0,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Sweeping light effect */}
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
              <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:animate-[sweep_1s_ease-in-out_forwards]"></span>
              
              {/* Button Content */}
              <span className="relative flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-display tracking-wide">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-300 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Перейти в Telegram
              </span>
              
              {/* Hover Glow Ring */}
              <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-orange-400/60 transition-all duration-300 pointer-events-none"></div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Add sweep animation for button */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}} />
    </div>
  );
}
