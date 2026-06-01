"use client";

import React from 'react';
import { motion } from 'framer-motion';

const InnerBorderOverlay = () => (
  <div
    className="framer-8ixsur absolute inset-0 border-[0.5px] border-white rounded-[10px] pointer-events-none"
    style={{
      backgroundColor: 'rgba(255, 254, 250, 0)',
      mask: 'linear-gradient(255deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 18.1687%, rgba(0, 0, 0, 0.23) 85.166%, rgba(0, 0, 0, 0) 100%) add, linear-gradient(320deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 25.753%, rgba(0, 0, 0, 0.13) 78.87%, rgba(0,0,0,1) 100%) add',
      WebkitMask: 'linear-gradient(255deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 18.1687%, rgba(0, 0, 0, 0.23) 85.166%, rgba(0, 0, 0, 0) 100%) add, linear-gradient(320deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 25.753%, rgba(0, 0, 0, 0.13) 78.87%, rgba(0,0,0,1) 100%) add',
    }}
  />
);

// Speed Card Visual - SVG Wireframe + Gradient Sparks
const SpeedVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
    {/* Central Wireframe SVG */}
    <img
      src="data:image/svg+xml,%3Csvg display='block' role='presentation' viewBox='0 0 578 462' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 144 L 222 0 L 577.5 162.5 L 325.5 461.5 L 0 245 L 119 0 L 577.5 95.5 L 0 199 L 577.5 419 L 69.5 0 L 119 461.5 L 428 0 L 487.5 461.5' fill='transparent' stroke='rgba(255, 255, 255, 0.15)' stroke-width='1'/%3E%3C/svg%3E"
      className="w-[80%] h-auto opacity-50"
      alt=""
    />

    {/* Blue Sparks */}
    <div className="absolute w-[14px] h-[2px]" style={{ top: '20%', left: '55%', transform: 'rotate(12deg)' }}>
      <div className="absolute inset-0 rounded-full blur-[2px]" style={{ background: 'linear-gradient(90deg, #0175ff 0%, #fff 100%)' }} />
      <div className="relative w-full h-[2px] rounded-full z-[2]" style={{ background: 'linear-gradient(90deg, #0175ff 0%, #fff 100%)' }} />
    </div>
    <div className="absolute w-[14px] h-[2px]" style={{ top: '50%', left: '80%', transform: 'rotate(82deg)' }}>
      <div className="absolute inset-0 rounded-full blur-[2px]" style={{ background: 'linear-gradient(90deg, #0175ff 0%, #fff 100%)' }} />
      <div className="relative w-full h-[2px] rounded-full z-[2]" style={{ background: 'linear-gradient(90deg, #0175ff 0%, #fff 100%)' }} />
    </div>

    {/* Yellow Sparks */}
    <div className="absolute w-[14px] h-[2px]" style={{ top: '30%', right: '10%', transform: 'rotate(-9deg)' }}>
      <div className="absolute inset-0 rounded-full blur-[2px]" style={{ background: 'linear-gradient(90deg, #ffac0a 0%, #fff 100%)' }} />
      <div className="relative w-full h-[2px] rounded-full z-[2]" style={{ background: 'linear-gradient(90deg, #ffac0a 0%, #fff 100%)' }} />
    </div>
    <div className="absolute w-[14px] h-[2px]" style={{ top: '15%', left: '65%', transform: 'rotate(26deg)' }}>
      <div className="absolute inset-0 rounded-full blur-[2px]" style={{ background: 'linear-gradient(90deg, #ffac0a 0%, #fff 100%)' }} />
      <div className="relative w-full h-[2px] rounded-full z-[2]" style={{ background: 'linear-gradient(90deg, #ffac0a 0%, #fff 100%)' }} />
    </div>
  </div>
);

// Deep Capabilities Visual - Cone wireframe + Glowing Dots
const DeepCapabilitiesVisual = () => (
  <div className="absolute z-[1] pointer-events-none" style={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)', width: '46%', maxWidth: '250px', aspectRatio: '1.05932', height: '189px' }}>
    {/* Cone Wireframe */}
    <div
      className="w-full h-full opacity-50"
      style={{
        background: `url("data:image/svg+xml,%3Csvg display='block' role='presentation' viewBox='0 0 578 462' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 144 L 222 0 L 577.5 162.5 L 325.5 461.5 L 0 245 L 119 0 L 577.5 95.5 L 0 199 L 577.5 419 L 69.5 0 L 119 461.5 L 428 0 L 487.5 461.5' fill='transparent' stroke='rgba(255, 255, 255, 0.15)' stroke-width='1'/%3E%3C/svg%3E") no-repeat center/contain`
      }}
    />

    {/* Glowing Dots */}
    <div className="absolute flex items-center justify-center" style={{ top: '8%', left: '26%', width: '19px', height: '19px' }}>
      <div className="absolute w-full h-full rounded-full bg-white blur-[5px]" />
      <div className="w-full h-full rounded-full bg-white" />
    </div>
    <div className="absolute flex items-center justify-center" style={{ top: '22%', left: '75%', width: '19px', height: '19px' }}>
      <div className="absolute w-full h-full rounded-full bg-white blur-[5px]" />
      <div className="w-full h-full rounded-full bg-white" />
    </div>
    <div className="absolute flex items-center justify-center" style={{ top: '42%', left: '13%', width: '18px', height: '18px' }}>
      <div className="absolute w-full h-full rounded-full bg-white blur-[5px]" />
      <div className="w-full h-full rounded-full bg-white" />
    </div>
  </div>
);

// Control Visual - 3 Slider Bars
const ControlVisual = () => (
  <div className="absolute z-[1] flex gap-7 sm:gap-11 items-center justify-center pointer-events-none" style={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(78vw, 349px)' }}>
    {/* Slider 1 */}
    <div className="relative flex flex-col items-center justify-center" style={{ width: '37px', height: '208px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px' }}>
      <div className="absolute w-[6px] rounded-full" style={{ bottom: '7px', height: '50%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
      <div className="absolute flex items-center justify-center" style={{ width: '37px', height: '37px', bottom: '50%', transform: 'translateY(50%)', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
        <div className="absolute w-full h-full rounded-full opacity-[0.93] blur-[4px]" style={{ background: 'linear-gradient(180deg, rgb(0, 117, 255) 0%, rgb(255, 172, 8) 100%)' }} />
        <div className="relative w-full h-full rounded-full bg-white z-[2]" />
      </div>
    </div>

    {/* Slider 2 */}
    <div className="relative flex flex-col items-center justify-center" style={{ width: '37px', height: '208px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px' }}>
      <div className="absolute w-[6px] rounded-full" style={{ bottom: '7px', height: '75%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
      <div className="absolute flex items-center justify-center" style={{ width: '37px', height: '37px', bottom: '75%', transform: 'translateY(50%)', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
        <div className="absolute w-full h-full rounded-full opacity-[0.93] blur-[4px]" style={{ background: 'linear-gradient(180deg, rgb(0, 117, 255) 0%, rgb(255, 172, 8) 100%)' }} />
        <div className="relative w-full h-full rounded-full bg-white z-[2]" />
      </div>
    </div>

    {/* Slider 3 */}
    <div className="relative flex flex-col items-center justify-center" style={{ width: '37px', height: '208px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px' }}>
      <div className="absolute w-[6px] rounded-full" style={{ bottom: '7px', height: '25%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
      <div className="absolute flex items-center justify-center" style={{ width: '37px', height: '37px', bottom: '25%', transform: 'translateY(50%)', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
        <div className="absolute w-full h-full rounded-full opacity-[0.93] blur-[4px]" style={{ background: 'linear-gradient(180deg, rgb(0, 117, 255) 0%, rgb(255, 172, 8) 100%)' }} />
        <div className="relative w-full h-full rounded-full bg-white z-[2]" />
      </div>
    </div>
  </div>
);

// Flexibility Visual - Two Rows of Icons
const FlexibilityVisual = () => {
  const row1Icons = [
    "hdYPy2J7QbpyCYtFC4VUGW13ytI.svg",
    "EvRpOn9wuYvQYZzCfYwtnS65jRE.svg",
    "FQP31xwbbI4n1vs2r24mfuxRGQI.svg",
    "aap1xSJQbafVrLaeVhlLfdpwNZg.svg"
  ];
  const row2Icons = [
    "QaeKao8eibxNDl43Zp0JVaFeI.svg",
    "7FD49Lwwd6BP9eCtJ1YSgmHeVg.svg",
    "DU8DKlxTsbVIEUdhYPL0FdSSqDY.svg",
    "dRjKz5jULiduxg4HJkqfdEnv54.svg"
  ];

  return (
    <>
      {/* Row 1 - positioned at 19% from top */}
      <div className="absolute left-0 right-0 z-[1] h-[72px] flex justify-center pointer-events-none" style={{ top: 'calc(19% - 36px)' }}>
        <ul className="flex gap-2 sm:gap-4 list-none p-0 m-0">
          {row1Icons.map((icon, i) => (
            <li key={i}>
              <div className="w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] flex items-center justify-center rounded-[16px] sm:rounded-[20px] backdrop-blur-[10px]" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.1)' }}>
                <img src={`https://framerusercontent.com/images/${icon}`} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Row 2 - positioned at 41.5% from top */}
      <div className="absolute left-0 right-0 z-[1] h-[75px] flex justify-center pointer-events-none" style={{ top: 'calc(41.5% - 37.5px)' }}>
        <ul className="flex gap-2 sm:gap-4 list-none p-0 m-0">
          {row2Icons.map((icon, i) => (
            <li key={i}>
              <div className="w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] flex items-center justify-center rounded-[16px] sm:rounded-[20px] backdrop-blur-[10px]" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.1)' }}>
                <img src={`https://framerusercontent.com/images/${icon}`} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Exceptionalities = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-black flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] w-full px-5 flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 pb-3 border-b border-white/[0.12] w-full">
            <img src="https://framerusercontent.com/images/BZk5mbe8FBf9Lhl8okYcCei2g.svg" alt="" className="w-[14px] h-[14px]" />
            <span className="text-[12px] font-medium tracking-[1px] text-[#9BA9C4] uppercase">WHY CHOOSE US</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
            <div className="max-w-[720px]">
              <h2 className="text-[34px] sm:text-[42px] md:text-[56px] font-medium text-white leading-[1.1] tracking-tight m-0">What makes RASY different</h2>
            </div>
            <div className="max-w-[320px] pb-1">
              <p className="text-[16px] leading-[1.5] text-[#9BA9C4] m-0 md:text-right">Smarter, faster, and more adaptive than<br />traditional cybersecurity providers.</p>
            </div>
          </div>
        </div>

        {/* Content - 5 Cards Layout */}
        <div className="flex flex-col gap-6">

          {/* Row 1 - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Speed Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-[22px] md:rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#060710] overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]"
            >
              <div className="w-full h-full filter brightness-[1.33] transition-transform duration-700 group-hover:scale-105 relative" style={{ aspectRatio: '1.26' }}>
                <img src="https://framerusercontent.com/images/AroYsG98cecxdfVar1RpE3QmpjY.webp" className="w-full h-full object-cover absolute inset-0" alt="" />
                <SpeedVisual />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-5 backdrop-blur-[5px] rounded-[10px]" style={{ backgroundColor: 'rgba(255, 254, 250, 0)' }}>
                <InnerBorderOverlay />
                <h4 className="text-[20px] font-medium text-white mb-1.5" style={{ fontFamily: '"Inter Display", sans-serif' }}>Speed</h4>
                <p className="text-[17px] leading-[1.4] text-[#9ba9c4]">Faster threat detection and response with our enterprise cybersecurity solutions and AI-powered defense systems.</p>
              </div>
            </motion.div>

            {/* Deep Capabilities Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative rounded-[22px] md:rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#060710] overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]"
            >
              <div className="w-full h-full filter brightness-[1.33] transition-transform duration-700 group-hover:scale-105 relative" style={{ aspectRatio: '1.26' }}>
                <img src="https://framerusercontent.com/images/yW0YwfEjj3XVmK9OpcRWpCha3k.png" className="w-full h-full object-cover absolute inset-0" alt="" />
                <DeepCapabilitiesVisual />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-5 backdrop-blur-[5px] rounded-[10px]" style={{ backgroundColor: 'rgba(255, 254, 250, 0)' }}>
                <InnerBorderOverlay />
                <h4 className="text-[20px] font-medium text-white mb-1.5" style={{ fontFamily: '"Inter Display", sans-serif' }}>Deep capabilities</h4>
                <p className="text-[17px] leading-[1.4] text-[#9ba9c4]">Security expertise with the depth to adapt to every threat vector, vulnerability, and enterprise environment.</p>
              </div>
            </motion.div>
          </div>

          {/* Row 2 - 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Control Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative rounded-[22px] md:rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#060710] overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]"
            >
              <div className="w-full h-full filter brightness-[1.33] transition-transform duration-700 group-hover:scale-105 relative" style={{ aspectRatio: '1.26' }}>
                <img src="https://framerusercontent.com/images/UoZeXgrLVIo07yWMmdM4MO8F0.webp" className="w-full h-full object-cover absolute inset-0" alt="" />
                <ControlVisual />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-5 backdrop-blur-[5px] rounded-[10px]" style={{ backgroundColor: 'rgba(255, 254, 250, 0)' }}>
                <InnerBorderOverlay />
                <h4 className="text-[20px] font-medium text-white mb-1.5" style={{ fontFamily: '"Inter Display", sans-serif' }}>Control</h4>
                <p className="text-[17px] leading-[1.4] text-[#9ba9c4]">The power of standardized security frameworks built for enterprise-grade protection demands.</p>
              </div>
            </motion.div>

            {/* Flexibility Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative rounded-[22px] md:rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#060710] overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]"
            >
              <div className="w-full h-full filter brightness-[1.33] transition-transform duration-700 group-hover:scale-105 relative" style={{ aspectRatio: '1.26' }}>
                <img src="https://framerusercontent.com/images/TdhDQYxz25yRgOwLKeC05FZVk.webp" className="w-full h-full object-cover absolute inset-0" alt="" />
                <FlexibilityVisual />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-5 backdrop-blur-[5px] rounded-[10px]" style={{ backgroundColor: 'rgba(255, 254, 250, 0)' }}>
                <InnerBorderOverlay />
                <h4 className="text-[20px] font-medium text-white mb-1.5" style={{ fontFamily: '"Inter Display", sans-serif' }}>Flexibility</h4>
                <p className="text-[17px] leading-[1.4] text-[#9ba9c4]">Our security approach works with your existing infrastructure, allowing seamless integration.</p>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-[22px] md:rounded-[24px] bg-[#060710] border border-[rgba(125,164,255,0.16)] p-6 md:p-10 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-[30px] md:text-[42px] font-medium text-white leading-[1.1] tracking-tight">Ready to secure your business?</h3>
                <p className="text-[16px] md:text-[18px] text-[#8491ab]">Let's strengthen your security posture. We're here to help.</p>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <a href="/contact" className="w-full py-4 bg-white text-black rounded-2xl font-semibold text-center hover:scale-[1.02] transition-transform shadow-[inset_-4px_3px_9px_0px_rgba(1,117,255,0.5),inset_3px_-2px_8px_0px_rgba(255,205,125,0.5)]">
                  Get Protected
                </a>
                <a href="/contact" className="w-full py-4 bg-[rgb(12,15,22)] border border-[rgb(47,57,80)] rounded-2xl font-medium text-center hover:bg-white/5 transition-colors">
                  <span className="bg-gradient-to-r from-[rgb(1,117,255)] to-[rgb(255,205,125)] bg-clip-text text-transparent">Contact Experts</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exceptionalities;
