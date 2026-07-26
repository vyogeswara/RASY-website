import React from 'react';

/**
 * IntroVideo Component
 * 
 * Clones the split section containing a mission statement on the left 
 * and a glowing, frosted sphere animation with a tech icon on the right.
 * 
 * Design Details:
 * - Theme: Dark
 * - Left Content: Mission statement about reimagining business growth
 * - Right Content: Glowing frosted sphere with "Tech" icon/label
 * - Background: Subtle grain/starfield texture inherited from global body style
 */

const IntroVideo = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-[120px] md:py-[160px] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 overflow-hidden">
      {/* Left Column: Mission Statement */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-[#999999] text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] tracking-[-0.02em] max-w-[550px]">
          We help enterprises to reimagine business growth with our AI Platform, Work Solutions, and Intelligent Marketplace. Unlock efficiency, automation, and innovation across every workflow.
        </h2>
      </div>

      {/* Right Column: Glowing Frosted Sphere Animation */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {/* Background Glows for Depth */}
          <div
            className="absolute inset-0 rounded-full blur-[60px] opacity-40 z-0 bg-gradient-to-br from-[#ff9900] to-[#00ccff]"
            aria-hidden="true"
          />

          {/* The Sphere Component */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 backdrop-blur-[40px] flex flex-col items-center justify-center shadow-[0_0_100px_rgba(0,204,255,0.15)] group transition-transform duration-700 ease-out hover:scale-[1.02]">
            {/* The Video Layer (Frosted Interior) */}
            <div className="absolute inset-0 z-0 scale-[1.1]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="https://pikaso.cdnpk.net/private/production/2290455794/59751519-c5a8-4e4b-b8dd-94ffbfa08aa8-0.mp4?token=exp=1775001600~hmac=946fe13b73c600580de2f6d03194555735d752048382e42b0ebe1dcdf4a376b6"
              />
            </div>

            {/* Glossy Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-60" />

            {/* Content Overlays */}
            <div className="relative z-20 flex flex-col items-center gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(255,255,255,0.3)]">
                {/* Lightning/Tech Icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-xl md:text-2xl font-medium tracking-tight">Tech</span>
            </div>
          </div>

          {/* Frost/Noise Overlay over sphere */}
          <div className="absolute inset-0 pointer-events-none rounded-full z-30 mix-blend-overlay opacity-20 bg-[url('https://res.cloudinary.com/doibx3aol/image/upload/v1767948498/RASY_LOGO_vtjngu.svg')] bg-repeat" />
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
