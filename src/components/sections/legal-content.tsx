"use client";

import React, { ReactNode } from "react";

interface LegalContentProps {
  children: ReactNode;
}

export default function LegalContent({ children }: LegalContentProps) {
  return (
    <section className="w-full px-5 md:px-10 py-16 md:py-24 bg-black">
      <div
        className="mx-auto max-w-[800px] space-y-6
          [&_h2]:text-white [&_h2]:font-['Inter_Display',sans-serif] [&_h2]:font-normal
          [&_h2]:text-[36px] min-[810px]:[&_h2]:text-[45px] min-[1200px]:[&_h2]:text-[56px]
          [&_h2]:tracking-[-0.02em] [&_h2]:leading-[1.2em] [&_h2]:mt-12 [&_h2]:mb-4
          
          [&_h3]:text-white [&_h3]:font-['Inter',sans-serif] [&_h3]:font-medium
          [&_h3]:text-[20px] min-[810px]:[&_h3]:text-[24px]
          [&_h3]:tracking-[-0.02em] [&_h3]:leading-[1.2em] [&_h3]:mt-8 [&_h3]:mb-3
          
          [&_p]:text-[#9ba9c4] [&_p]:font-['Inter',sans-serif] [&_p]:font-normal
          [&_p]:text-[16px] min-[810px]:[&_p]:text-[17px] min-[1200px]:[&_p]:text-[18px]
          [&_p]:leading-[1.4em] [&_p]:tracking-[-0.03em] [&_p]:my-4
          
          [&_strong]:text-white [&_strong]:font-semibold
          
          [&_em]:text-white [&_em]:italic
          
          [&_ul]:space-y-3 [&_ul]:my-6 [&_ul]:pl-6
          [&_li]:text-[#9ba9c4] [&_li]:font-['Inter',sans-serif] [&_li]:font-normal
          [&_li]:text-[16px] min-[810px]:[&_li]:text-[17px] min-[1200px]:[&_li]:text-[18px]
          [&_li]:leading-[1.4em] [&_li]:tracking-[-0.03em] [&_li]:list-disc
          [&_li]:marker:text-blue-400
          
          [&_li_p]:my-0
          
          [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-4
          [&_a]:transition-colors [&_a]:duration-200
          hover:[&_a]:text-blue-300
          
          [&_a[href^='mailto:']]:text-blue-400 [&_a[href^='mailto:']]:no-underline
          [&_a[href^='mailto:']]:hover:underline [&_a[href^='mailto:']]:hover:text-blue-300
        "
        style={{
          ['--framer-font-family' as string]: 'Inter, Inter Placeholder, sans-serif'
        }}
      >
        {children}
      </div>
    </section>
  )
}
