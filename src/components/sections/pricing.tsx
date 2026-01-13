"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: "Sonic",
    monthlyPrice: 49,
    yearlyPrice: 34,
    description: "Access to core AI Agents and basic workflow automation.",
    features: [
      "Access to core AI Agents",
      "Workflow automation for teams",
      "Basic integrations",
      "Standard reporting & analytics",
      "Email support",
      "5,000 AI actions per month"
    ],
    trustedBy: "300+ teams trusted this",
    gradient: "https://framerusercontent.com/images/XXSw2JqvtikgOcaexTTozzVsO54.webp"
  },
  {
    name: "Supersonic",
    monthlyPrice: 99,
    yearlyPrice: 69,
    description: "Everything in Sonic plus advanced agents and priority support.",
    features: [
      "Everything in Sonic Monthly",
      "Advanced AI Agents for workflows",
      "Priority integrations",
      "Enhanced dashboards",
      "24/7 support via chat",
      "20,000 AI actions per month"
    ],
    trustedBy: "250+ growing enterprises",
    gradient: "https://framerusercontent.com/images/4fEwCxLuKCW6ZaczMzoeCElmzBg.webp"
  },
  {
    name: "HyperSonic",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "Unlimited automation with dedicated enterprise support.",
    features: [
      "Enterprise-grade AI Agent",
      "Full custom API access",
      "Unlimited workflows & automation",
      "Dedicated account manager",
      "On-premise deployment options",
      "Unlimited AI actions"
    ],
    trustedBy: "Industry leaders choice",
    gradient: "https://framerusercontent.com/images/K53jEm1inmwk6lcSyDVU5W7rvLM.webp"
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="framer-6tlzhn relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 px-6 md:px-10 max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="framer-t8rkwp flex flex-col gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="framer-xjRP0 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[1px] border border-white/10 bg-[rgb(6,7,10)] w-fit">
                <img src="https://framerusercontent.com/images/3UovOTKirX07vhyWYJGSliEt1E4.svg" className="w-6 h-6 opacity-80" alt="" />
                <span className="text-[14px] font-medium tracking-[0.2em] text-[#8491ab]">PRICING</span>
              </div>
              <div className="h-[1px] flex-1 bg-[rgba(125,164,255,0.16)]" />
            </div>
          </div>
          <div className="framer-1uvftu4 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] max-w-[720px]">
              Flexible Plans for Every
            </h2>
            <p className="text-xl text-[#b0bed9] max-w-[320px] pb-2">
              Choose the plan that fits your team and scales with your business.
            </p>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center p-1 bg-white/5 rounded-2xl border border-white/10 relative">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition-colors relative z-10 ${billingCycle === 'monthly' ? 'text-black' : 'text-white/60 hover:text-white'}`}
            >
              {billingCycle === 'monthly' && (
                <motion.div layoutId="cycle-bg" className="absolute inset-0 bg-white rounded-xl -z-10" />
              )}
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition-colors relative z-10 flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-black' : 'text-white/60 hover:text-white'}`}
            >
              {billingCycle === 'yearly' && (
                <motion.div layoutId="cycle-bg" className="absolute inset-0 bg-white rounded-xl -z-10" />
              )}
              Yearly
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md bg-[#FFAC0A] text-black font-bold uppercase ${billingCycle === 'yearly' ? 'opacity-100' : 'opacity-80'}`}>30% OFF</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col rounded-[32px] border border-[rgba(125,164,255,0.16)] bg-[#060710] overflow-hidden group"
            >
              {/* Background Gradient Image */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <img src={plan.gradient} className="w-full h-full object-cover" alt="" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-10">
                <div className="mb-12 text-center">
                  <h4 className="text-xl font-medium text-white mb-6 uppercase tracking-wider">{plan.name}</h4>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-medium text-white">
                      {typeof plan[billingCycle === 'monthly' ? 'monthlyPrice' : 'yearlyPrice'] === 'number' ? `$${plan[billingCycle === 'monthly' ? 'monthlyPrice' : 'yearlyPrice']}` : plan[billingCycle === 'monthly' ? 'monthlyPrice' : 'yearlyPrice']}
                    </span>
                    {typeof plan[billingCycle === 'monthly' ? 'monthlyPrice' : 'yearlyPrice'] === 'number' && (
                      <span className="text-[#8491ab]">/month</span>
                    )}
                  </div>
                </div>

                <a 
                  href="/contact"
                  className="w-full py-4 rounded-2xl bg-white text-black font-bold text-center mb-12 shadow-[inset_-4px_3px_9px_0px_rgba(1,117,255,0.3),inset_3px_-2px_8px_0px_rgba(255,205,125,0.3)] hover:scale-[1.02] transition-transform"
                >
                  Contact Us
                </a>

                <div className="flex-1">
                  <ul className="space-y-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[inset_0px_0px_2px_1px_rgba(255,255,255,0.4)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-[#8491ab] text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-center text-sm text-white font-medium opacity-80">{plan.trustedBy}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
