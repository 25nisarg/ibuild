import FeaturedProducts from "@/components/landing-page/feature-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <RecentlyLaunchedProducts/>
    </div>
  );
}
