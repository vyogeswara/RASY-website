"use client";

import { BlogHero } from "@/components/blog/BlogHero";
import { CommonCTA } from "@/components/shared/CommonCTA";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center">
      <BlogHero />
      <CommonCTA />
    </div>
  );
}
