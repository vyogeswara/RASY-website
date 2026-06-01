"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, useInView } from 'framer-motion';

interface Feature {
  id: string;
  tabLabel: string;
  tabIcon: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badges: { text: string; icon: string }[];
  image: string;
  framerImage: string;
}

const features: Feature[] = [
  {
    id: 'defense',
    tabLabel: 'DEFENSE',
    tabIcon: 'https://framerusercontent.com/images/01d6Xos4x3sbU293TmKaFduYFAc.svg',
    title: 'AI-Powered Threat Defense',
    description: 'Integrate with your security infrastructure, understand your threat landscape, and activate intelligent protection.',
    ctaText: 'Explore Defense',
    ctaLink: '/services/ai-for-work',
    badges: [
      { text: 'Healthcare', icon: 'https://framerusercontent.com/images/rHi83QNHLWfMpfg2vj176ghopo.svg' },
      { text: 'Financial Services', icon: 'https://framerusercontent.com/images/eULxkhSvgmgm7XIuguu97va5Pqo.svg' },
      { text: 'Critical Infrastructure', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' },
      { text: 'Enterprise', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' }
    ],
    image: 'https://framerusercontent.com/images/DKhCP3xiqB8m3zBp2E6ysooT3SY.webp',
    framerImage: 'https://framerusercontent.com/images/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png'
  },
  {
    id: 'technology',
    tabLabel: 'TECHNOLOGY',
    tabIcon: 'https://framerusercontent.com/images/DzDW9qxLWt1R7V7DL7f89IPJfk.svg',
    title: 'Advanced Security Technology',
    description: 'Implement robust security protocols and threat response with confidence and continuous monitoring.',
    ctaText: 'View Technology',
    ctaLink: '/technology',
    badges: [
      { text: 'Multi-Vector Defense', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' },
      { text: 'AI/ML Threat Detection', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' },
      { text: 'Intelligence Platform', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' },
      { text: 'Automated Response', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' }
    ],
    image: 'https://framerusercontent.com/images/4ABnXaFshXBVkaMyEU2NjeeqE.webp',
    framerImage: 'https://framerusercontent.com/images/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png'
  },
  {
    id: 'integration',
    tabLabel: 'INTEGRATION',
    tabIcon: 'https://framerusercontent.com/images/Akgvq4ROltzdkv9bMr9wLtsd5c.svg',
    title: 'Enterprise System Integration',
    description: 'Our solutions work with your existing technology stack, ensuring seamless security implementation.',
    ctaText: 'Learn More',
    ctaLink: '/integration',
    badges: [
      { text: 'SIEM Integration', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' },
      { text: 'Cloud Platforms', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' },
      { text: 'Legacy Systems', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' },
      { text: 'API Framework', icon: 'https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg' }
    ],
    image: 'https://framerusercontent.com/images/rYyqmKb6ZW8scPMDoDnkLicukfc.png',
    framerImage: 'https://framerusercontent.com/images/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png'
  }
];

// Tab with smooth scroll-linked progress bar
const FeatureTab = ({
  feature,
  isActive,
  isCompleted,
  progress
}: {
  feature: Feature;
  isActive: boolean;
  isCompleted: boolean;
  progress: number;
}) => {
  let translateX = "-100%";
  if (isCompleted) {
    translateX = "0%";
  } else if (isActive) {
    translateX = `${(progress - 1) * 100}%`;
  }

  return (
    <div className={`flex min-w-[180px] flex-col transition-opacity duration-300 ${isActive || isCompleted ? 'opacity-100' : 'opacity-40'}`}>
      <div className="flex items-center gap-4 py-4">
        <img src={feature.tabIcon} alt="" className="w-6 h-6" />
        <span className="text-white font-medium text-[14px] uppercase tracking-[0.2em]">{feature.tabLabel}</span>
      </div>
      <div className="h-[1px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(47,57,80)]" />
        <motion.div
          animate={{ x: translateX }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-[rgb(255,205,125)] to-[rgb(1,117,255)]"
        />
      </div>
    </div>
  );
};

// Feature Card with scroll progress tracking
const FeatureCard = ({
  feature,
  index,
  onProgressChange,
  onActiveChange
}: {
  feature: Feature;
  index: number;
  onProgressChange: (index: number, progress: number) => void;
  onActiveChange: (index: number) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (isInView) {
      onActiveChange(index);
      onProgressChange(index, Math.min(v * 1.5, 1));
    }
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 80, y: 40 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[rgb(6,7,10)] overflow-hidden flex flex-col md:flex-row"
    >
      <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h4 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium text-white tracking-[-0.02em] leading-[1.15]">
            {feature.title}
          </h4>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#b0bed9] max-w-[400px]">
            {feature.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {feature.badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(125,164,255,0.16)] bg-white/5 text-[rgb(209,212,227)] text-[14px]"
              >
                <img src={badge.icon} alt="" className="w-4 h-4 opacity-80" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
        <a
          href={feature.ctaLink}
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-[rgb(47,57,80)] bg-[rgb(12,15,22)] px-6 py-4 font-semibold transition-all hover:-translate-y-0.5 hover:bg-white/5 sm:w-fit sm:px-8"
        >
          <span className="bg-gradient-to-r from-[rgb(1,117,255)] to-[rgb(255,205,125)] bg-clip-text text-transparent">
            {feature.ctaText}
          </span>
        </a>
      </div>

      <div className="flex-1 md:flex-[1.2] relative overflow-hidden min-h-[240px] sm:min-h-[280px]">
        <img
          src={feature.image}
          className="w-full h-full object-cover"
          alt=""
          style={{
            maskImage: 'linear-gradient(-90deg, black 0%, rgba(0,0,0,0.94) 71%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(-90deg, black 0%, rgba(0,0,0,0.94) 71%, transparent 100%)',
          }}
        />
        <div className="absolute bottom-4 left-4 hidden max-w-[calc(100%-32px)] items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-[40px] sm:flex md:bottom-10 md:left-10">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/20">
            <img src={feature.framerImage} className="w-full h-full object-cover" alt="" />
          </div>
          <span className="truncate pr-4 text-sm font-medium text-white/80 md:pr-6 md:text-base">Help me with the bank|</span>
        </div>
      </div>
    </motion.div>
  );
};

const AllInOneFeatures = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progressValues, setProgressValues] = useState([0, 0, 0]);

  const handleProgressChange = useCallback((index: number, progress: number) => {
    setProgressValues(prev => {
      const newValues = [...prev];
      newValues[index] = progress;
      for (let i = 0; i < index; i++) {
        newValues[i] = 1;
      }
      return newValues;
    });
  }, []);

  const handleActiveChange = useCallback((index: number) => {
    setActiveIdx(index);
  }, []);

  return (
    <section className="bg-black relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 py-14 md:py-20">
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 py-3">
              <img
                src="https://framerusercontent.com/images/GFmvU3dWENS60V6v8Jglw0qJ7zY.svg"
                className="w-6 h-6 opacity-80"
                alt=""
              />
              <span className="text-[14px] font-medium tracking-[0.2em] text-[#8491ab] uppercase">SOLUTIONS</span>
            </div>
            <div className="w-full h-[1px] bg-[rgba(125,164,255,0.16)]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="flex-1 max-w-[680px] text-[36px] md:text-[60px] font-medium text-white leading-[1.1] tracking-[-0.02em]">
              Complete cybersecurity for your organization
            </h2>
            <p className="md:flex-1 max-w-[310px] text-[16px] md:text-[18px] leading-[1.5] text-[#b0bed9] md:pb-2">
              Simplify, accelerate, and transform with integrated security ecosystem.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
          {/* Left Column - Sticky Tabs */}
          <div className="hidden lg:block relative">
            <div className="sticky top-[120px] w-full flex flex-col gap-0">
              <FeatureTab
                feature={features[0]}
                isActive={activeIdx === 0}
                isCompleted={activeIdx > 0}
                progress={progressValues[0]}
              />
              <FeatureTab
                feature={features[1]}
                isActive={activeIdx === 1}
                isCompleted={activeIdx > 1}
                progress={progressValues[1]}
              />
              <FeatureTab
                feature={features[2]}
                isActive={activeIdx === 2}
                isCompleted={activeIdx > 2}
                progress={progressValues[2]}
              />
            </div>
          </div>

          {/* Mobile Tabs (visible only on mobile) */}
          <div className="lg:hidden flex flex-row gap-4 overflow-x-auto w-full col-span-full no-scrollbar pb-2">
            <FeatureTab
              feature={features[0]}
              isActive={activeIdx === 0}
              isCompleted={activeIdx > 0}
              progress={progressValues[0]}
            />
            <FeatureTab
              feature={features[1]}
              isActive={activeIdx === 1}
              isCompleted={activeIdx > 1}
              progress={progressValues[1]}
            />
            <FeatureTab
              feature={features[2]}
              isActive={activeIdx === 2}
              isCompleted={activeIdx > 2}
              progress={progressValues[2]}
            />
          </div>

          {/* Right Column - Cards */}
          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
                onProgressChange={handleProgressChange}
                onActiveChange={handleActiveChange}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOneFeatures;
