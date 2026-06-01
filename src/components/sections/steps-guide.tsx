"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// Design tokens matching original
const tokens = {
  white: "#fff",
  textMuted: "rgb(132, 145, 171)",
  textSecondary: "rgb(176, 190, 217)",
  textTertiary: "rgb(209, 212, 227)",
  border: "rgba(125, 164, 255, 0.16)",
  cardBg: "rgb(6, 7, 10)",
  checkboxBg: "rgba(255, 255, 255, 0.1)",
  beamOrange: "#ffac0a",
  beamBlue: "#0175ff",
};

// Step data
const steps = [
  {
    id: "01",
    title: "Security Consultation",
    description: "Begin with expert security assessment and consultation.",
    points: [
      "Schedule comprehensive security evaluation",
      "Identify current vulnerability landscape",
      "Define specific security requirements",
    ],
    image: "https://framerusercontent.com/images/vUiGHc7SR4A4SrQMUODr2UXNbY.png",
    stickyTop: 214, // Original value from CSS
  },
  {
    id: "02",
    title: "Solution Selection",
    description: "Choose from our comprehensive security service portfolio.",
    points: [
      "Select services matching your threat profile",
      "Access complete security capabilities",
      "Deploy solutions aligned with compliance needs",
    ],
    image: "https://framerusercontent.com/images/1h2g2AnKRHxZzmSq2umWuiBsSys.png",
    stickyTop: 240, // Original value from CSS
  },
  {
    id: "03",
    title: "Implementation & Support",
    description: "Professional implementation with ongoing support and optimization.",
    points: [
      "Configure security policies and protocols",
      "Receive continuous monitoring and updates",
      "Access expert support and maintenance",
    ],
    image: "https://framerusercontent.com/images/8KzDLcSNotT5Lxj1UyWAsRCZu3E.png",
    stickyTop: 214, // Original value from CSS (same as card 1)
  },
];

export function StepsGuide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth progress for animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // FIX #1: Beam uses translateX (slides in from left)
  // At scrollProgress 0: beam shows 33% (under "01.")
  // At scrollProgress 1: beam shows 100% (full width)
  // translateX(-66.67%) means 33% visible, translateX(0) means 100% visible
  const beamX = useTransform(smoothProgress, [0, 1], ["-66.67%", "0%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setActiveStep(0);
    else if (latest < 0.66) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    <section
      ref={containerRef}
      className="steps-guide-section relative bg-[rgb(6,7,10)]"
    >
      <style jsx>{`
        .steps-guide-section {
          padding: 80px 40px !important;
        }
        @media (max-width: 809px) {
          .steps-guide-section {
            padding: 40px 20px !important;
          }
        }
        .step-card-sticky-container {
          position: sticky !important;
        }
        @media (max-width: 1023px) {
          .step-card-sticky-container {
            position: relative !important;
            top: auto !important;
          }
        }
        @media (max-width: 809px) {
          .steps-guide-section .steps-content {
            gap: 40px !important;
          }
        }
      `}</style>
      {/* Main Container - max-width 1200px centered */}
      <div
        className="mx-auto flex flex-col gap-12 md:gap-20"
        style={{ maxWidth: "1200px" }}
      >
        {/* HEADING AREA */}
        <div className="flex flex-col gap-6">
          {/* Section Tag */}
          <div className="flex flex-col items-start" style={{ maxWidth: "269px" }}>
            <div className="flex items-center gap-3 py-3 pr-3">
              <figure className="relative w-8 h-8" style={{ opacity: 0.8 }}>
                <Image
                  src="https://framerusercontent.com/images/lwNa4WCrpY0HtXMtN0IteQrJig.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </figure>
              <p
                className="text-base whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: tokens.textMuted,
                }}
              >
                GET STARTED
              </p>
            </div>
            <div
              className="w-full"
              style={{ height: "1px", backgroundColor: tokens.border }}
            />
          </div>

          {/* Title */}
          <h2
            className="text-3xl md:text-[45px] leading-tight"
            style={{
              fontFamily: "'Inter Display', 'Inter', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: tokens.white,
              maxWidth: "680px",
            }}
          >
            Your Security Journey in 3 Steps
          </h2>

          {/* Subtitle */}
          <p
            className="text-base"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: tokens.textSecondary,
              maxWidth: "310px",
            }}
          >
            From assessment to comprehensive protection made straightforward.
          </p>
        </div>

        {/* CONTENT AREA - Numbers + Cards */}
        <div className="steps-content flex flex-col gap-12 md:gap-16">
          {/* FIX #3: Numbers Indicator - Independently sticky at top: 120px */}
          <div
            className="hidden lg:flex items-center gap-0 relative"
            style={{
              position: "sticky",
              top: "120px",
              zIndex: 10,
              paddingBottom: "6px",
            }}
          >
            {/* Background Line - spans full width at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: "1px", backgroundColor: tokens.border }}
            />

            {/* Beam Container - has overflow:hidden to clip the animated line */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "2px",
                overflow: "hidden", // Clips the beam line
              }}
            >
              {/* Animated Beam Line - slides in from left via translateX */}
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(90deg, ${tokens.beamOrange} 0%, ${tokens.beamBlue} 100%)`,
                  x: beamX, // translateX from -66.67% to 0%
                }}
              />
            </div>

            {/* Number Indicators - 3 flex items */}
            <div className="flex-1 flex items-center">
              <p
                className="text-base font-medium transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: activeStep >= 0 ? tokens.white : tokens.textMuted,
                }}
              >
                01.
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <p
                className="text-base font-medium transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: activeStep >= 1 ? tokens.white : tokens.textMuted,
                }}
              >
                02.
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <p
                className="text-base font-medium transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: activeStep >= 2 ? tokens.white : tokens.textMuted,
                }}
              >
                03.
              </p>
            </div>
          </div>

          {/* Cards Container - FIX #2: Each card has specific sticky top */}
          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FIX #2: Card Component with original sticky top values
function StepCard({
  step,
  index,
  isActive,
}: {
  step: (typeof steps)[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <div
      className="step-card-sticky-container w-full"
      style={{
        top: `${step.stickyTop}px`, // Use original values: 214, 240, 214
        zIndex: 10 + index,
      }}
    >
      <motion.div
        className="flex flex-col lg:flex-row w-full"
        style={{
          borderRadius: "24px",
          backgroundColor: tokens.cardBg,
          border: `1px solid ${tokens.border}`,
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        {/* Content Side */}
        <div
          className="flex flex-col p-6 lg:p-10"
          style={{ flex: "1 0 0" }}
        >
          <div className="flex flex-col gap-6 mb-10">
            <h3
              className="text-2xl lg:text-[30px] leading-tight"
              style={{
                fontFamily: "'Inter Display', 'Inter', sans-serif",
                fontWeight: 400,
                color: tokens.white,
                maxWidth: "380px",
              }}
            >
              {step.title}
            </h3>
            <p
              className="text-base"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: tokens.textMuted,
                maxWidth: "400px",
              }}
            >
              {step.description}
            </p>
          </div>

          <div className="flex flex-col gap-5" style={{ maxWidth: "420px" }}>
            {step.points.map((point, i) => (
              <PointItem key={i} text={point} />
            ))}
          </div>
        </div>

        {/* Image Side - Desktop */}
        <div
          className="relative hidden lg:flex items-center justify-center"
          style={{
            flex: "1.5 0 0",
            height: "558px",
            WebkitMask:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 11.23%, rgba(0,0,0,1) 100%)",
            mask: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 11.23%, rgba(0,0,0,1) 100%)",
          }}
        >
          <figure
            className="relative h-full"
            style={{ aspectRatio: "1.17832", filter: "brightness(1.5)" }}
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="658px"
            />
          </figure>
        </div>

        {/* Image Side - Mobile */}
        <div className="lg:hidden relative w-full h-[250px] sm:h-[331px]">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
            style={{
              filter: "brightness(1.5)",
              WebkitMask:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 16.19%, rgba(0,0,0,1) 100%)",
              mask: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 16.19%, rgba(0,0,0,1) 100%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// Point Item Component
function PointItem({ text }: { text: string }) {
  return (
    <div
      className="flex items-center gap-3 p-3 relative"
      style={{
        borderRadius: "12px",
      }}
    >
      {/* Content */}
      <div className="flex items-center gap-3 w-full">
        {/* Checkmark Label */}
        <div
          className="flex-shrink-0 flex items-center justify-center"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: tokens.checkboxBg,
            boxShadow: "inset 0px 0px 4px 0px rgba(255, 255, 255, 0.31)",
          }}
        >
          <svg width="13" height="10" viewBox="0 0 15 11" fill="none">
            <path
              d="M1 5.5L5.5 10L14 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Text */}
        <p
          className="flex-1 text-sm lg:text-base"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: tokens.textTertiary,
          }}
        >
          {text}
        </p>
      </div>

      {/* Border Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: `1px solid ${tokens.border}`,
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
